<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * The view used to display a particular section of the homepage. A section is for
     * example the section of landscape photography, or the one for fantasy images.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import { Section } from '@/types';
    import { BackendApi, settings } from '@/utils';

    @Component
    export default class PageSection extends Vue {
        section!: Section;

        // The "created" hook for this view.
        async created() {
            const type = this.$route.path.substring(1);

            try {
                this.section = await new BackendApi().getSection(type);
            } catch (error) {
                console.error(`Failed to get section "${type}" from server.`);
            }
        }

        // Computed for the backdrop image use in this section.
        get backdropUrl() {
            const type = this.$route.path.substring(1);
            return `${settings.contentBase}/backdrops/${type}.jpg`;
        }
    }
</script>

<template>
    <div>
        <!-- Render the section backdrop. -->
        <div class="backdrop">
            <img :src="backdropUrl" />
            <div class="gradient"></div>
        </div>

        <!-- Render the section thumbnails. -->
        <div v-if="section" class="section">
            <div v-for="album in section.albums" :key="album.id">
                <fd-album-thumbnail :album="album" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .backdrop {
        opacity: 0.35;
        position: fixed;
        top: $navbar-height;
        width: 100%;
        z-index: -1;

        .gradient {
            background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), $primary-background-color);
            position: absolute;
            height: 50%;
            bottom: 0;
            width: 100%;
        }

        img {
            filter: grayscale(0.35);
            width: 100%;
        }
    }

    .section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: calc($content-top-margin + 1rem) auto 0 auto;
        max-width: $desktop-width;
    }
</style>
