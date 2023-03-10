<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * This component implements the functionality to fetch and display the thumbnails
     * for the latest and newest albums on the server.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import { BackendApi, settings } from '@/utils';
    import type { Album } from '@/types';

    @Component({ name: 'fd-news' })
    export default class News extends Vue {
        // The array of albums to work on.
        news!: Array<Album>;

        // Component creation hook.
        async created() {
            try {
                this.news = await new BackendApi().getNews(settings.numberOfNewsAlbums);
            } catch (error) {
                console.error(`Failed to get album news from the server.`);
            }
        }
    }
</script>

<template>
    <div class="news-container">
        <h2>Latest albums</h2>
        <div class="thumbnails">
            <div v-for="album in news" :key="album.id">
                <fd-album-thumbnail :album="album" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .news-container {
        margin: 2rem auto 0 auto;
        max-width: $max-news-width;
        text-align: center;

        h2 {
            color: $secondary-foreground-color;
            font-family: $logo-font;
            font-size: $font-size-lg;
            font-weight: 100;
            margin: 0;
        }

        .thumbnails {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
</style>
