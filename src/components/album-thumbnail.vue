<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * This component is used to render an album thumbnail. The component uses
     * condensed information about a particular album and renders its presentation
     * image together with its caption.
     */
    import { Component, Prop, Vue } from 'vue-facing-decorator';
    import type { Album } from '@/types';

    @Component({ name: 'fd-album-thumbnail' })
    export default class AlbumThumbnail extends Vue {
        /**
         * The parameters for this component are:
         * @param {Album} album - An album description object.
         */
        @Prop album!: Album;
    }
</script>

<template>
    <div class="thumbnail-container">
        <router-link :to="`/${album.type}/${album.id}`">
            <!-- Render the thumbnail image. -->
            <div>
                <img :src="album.url" />
            </div>

            <!-- Render the caption text. -->
            <div class="caption">
                {{ album.caption }}
            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .thumbnail-container {
        background-color: $thumbnail-background-color;
        border: $border-width-xs solid $thumbnail-border-color;
        border-radius: $border-radius;
        overflow: hidden;
        transition-duration: $thumbnail-transition-duration;

        @include box-shadow(0 0 2rem 0 $dark-shadow-color);
        .caption {
            color: $thumbnail-color;
            font-family: $thumbnail-font;
            font-size: $thumbnail-font-size;
            padding: 4px 0;
            text-align: center;
        }

        a {
            text-decoration: none;
        }

        img {
            height: 90px;
            transition-duration: $thumbnail-transition-duration;
            width: 220px;

            &:hover {
                transform: scale(1.05);
            }
        }

        &:hover {
            @include box-shadow(0 0 3rem 0 $navlink-hover-color);
        }
    }
</style>
