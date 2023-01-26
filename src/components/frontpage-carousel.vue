<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * This component implements the wide image carousel that is used in the landing page
     * for the site. To maintain a nice user experience, the images of the carousel are
     * sequencially preloaded to avoid a slow rendering of the initial image. As the saying
     * goes, you only get one chance to provide a nice first impression.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import { BackendApi, Utils, settings } from '@/utils';
    import { AlbumImage } from '@/types';

    @Component({ name: 'fd-frontpage-carousel' })
    export default class FrontpageCarousel extends Vue {
        images: Array<AlbumImage> = [];
        interval: number = 0;

        // Component creation hook.
        created() {
            this.loadCarouselImages();
        }

        get backdropUrl() {
            return `${settings.contentBase}/frontpage/carousel-images/backdrop.png`;
        }

        /**
         * Clears the potentially initiated interval used to slowly display the
         * images in the caroulsel.
         */
        clearInterval() {
            if (this.interval) {
                window.clearInterval(this.interval);
            }
        }

        /**
         * Preload the carousel images.
         */
        async preloadImages(images: Array<AlbumImage>) {
            let image: AlbumImage | undefined;

            if (images && images.length > 0) {
                try {
                    image = images.shift();
                    if (image) {
                        this.images.push((await Utils.loadImage(image)) as AlbumImage);
                    }
                } catch (error) {
                    if (image) {
                        console.warn('Failed to load image:', image.url);
                    }
                } finally {
                    this.preloadImages(images);
                }
            }
        }

        /**
         * Method that makes the currently indexed carousel image visible.
         */
        showCarouselImage(index: number) {
            this.images.forEach((image, i) => {
                if (index !== i) {
                    image.hide();
                } else {
                    image.show();
                }
            });
        }

        /**
         * Starts the image carousel.
         */
        startCarousel(index = 0) {
            this.clearInterval();
            this.showCarouselImage(index);

            // Start the carousel.
            this.interval = setInterval(() => {
                index = (index + 1) % this.images.length;
                this.showCarouselImage(index);
            }, settings.frontpageImageDisolveDelay);
        }

        /**
         * Method that fetches the list of frontpage images and at random selects
         * a subset of them to load and display in this carousel component.
         */
        async loadCarouselImages() {
            try {
                const album = await new BackendApi().getFrontpageImages();
                const images = album.images.sort(() => 0.5 - Math.random());
                const subset = images.slice(0, settings.numberOfFrontpageImages);
                await this.preloadImages(subset);

                // Start the carousel as soon as the first image is loaded.
                this.startCarousel();
            } catch (error) {
                console.error('Failed to get frontpage images from server.');
            }
        }
    }
</script>

<template>
    <div>
        <div class="carousel-container">
            <!-- The backdrop image. -->
            <img :src="backdropUrl" />

            <!-- The image captions. -->
            <div class="captions" v-for="image in images" :key="image.url">
                <span :class="{ visible: image.visible, transparent: !image.visible }">
                    {{ image.caption }}
                </span>
            </div>

            <!-- The carousel images. -->
            <div class="images" v-for="image in images" :key="image.url" oncontextmenu="return false;">
                <img :src="image.url" :class="{ visible: image.visible, transparent: !image.visible }" />
            </div>
        </div>

        <!-- Render the copyright text. -->
        <div class="copyright">All images and videos © Federico Engler</div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .carousel-container {
        display: block;
        height: auto;
        margin-top: 4rem;
        position: relative;
        padding: 0;
        width: 100%;

        @include box-shadow(0px 0px 40px 0px $dark-shadow-color);

        img {
            width: 100%;
        }

        .captions {
            color: $caption-color;
            font-family: $caption-font;
            font-size: 1.4rem;
            position: absolute;
            width: 100%;
            text-align: center;
            top: -2.5rem;

            .visible {
                transition: all 2s ease-in-out;
                opacity: 0.9;
            }

            .transparent {
                transition: all 2s ease-in-out;
                opacity: 0;
            }
        }

        .images {
            position: absolute;
            top: 0;
            left: 0;

            img {
                border-bottom: 1px solid $carousel-border-color;
                border-top: 1px solid $carousel-border-color;
                transition: all 3s ease-in-out;
            }

            & .visible {
                opacity: 1;
            }

            & .transparent {
                opacity: 0;
            }
        }
    }

    .copyright {
        color: $caption-color;
        font-family: $caption-font;
        font-size: 1.1rem;
        padding-top: 0.6rem;
        text-align: center;
    }
</style>
