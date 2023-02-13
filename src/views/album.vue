<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * This component implements the view used to present an individual album. The
     * album ID is provided as a path parameter and used to fetch the album details
     * from the backend service.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import type { Album } from '@/types';
    import { BackendApi, settings } from '@/utils';

    @Component
    export default class Navbar extends Vue {
        album?: Album;

        async created() {
            const { id } = this.$route.params;

            try {
                this.album = await new BackendApi().getAlbum(id as string);
                // console.log('AAAAAAAAA', JSON.stringify(this.album, null, 2));
            } catch (error) {
                console.error(`Failed to get album "${id}" from server.`);
            }
        }

        get contentBase() {
            return settings.contentBase;
        }

        get maxWidth() {
            return `max-width: ${this.album?.width}px;`;
        }
    }
</script>

<template>
    <div v-if="album" class="album-container" :style="maxWidth">
        <h1>{{ album.caption }}</h1>

        <!-- Render the album videos. -->
        <div class="video" v-for="(video, i) in album.videos" :key="i">
            <img :src="`${contentBase}/backdrops/video.png`" />
            <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
        </div>

        <!-- Render the album images. -->
        <div class="image" v-for="(image, i) in album.images" :key="i" oncontextmenu="return false;">
            <v-lazy-image :src="image.url" />
            <div class="caption">{{ image.caption }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .album-container {
        margin: 1rem auto 0 auto;
        max-width: $max-album-width;

        .video,
        .image {
            height: auto;
            padding: 2rem 2rem 3rem 2rem;

            img {
                width: 100%;
                @include box-shadow(0 0 2.4rem 0 $dark-shadow-color);
            }
        }

        .video {
            position: relative;

            iframe {
                position: absolute;
                left: 2rem;
                height: calc(100% - 5rem);
                top: 2rem;
                width: calc(100% - 4rem);
                z-index: 10;
            }
        }

        .caption {
            color: $secondary-foreground-color;
            font-size: $image-caption-font-size;
            text-align: center;
        }
    }
</style>
