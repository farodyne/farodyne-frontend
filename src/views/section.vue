<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * The component that implements the navigation bar in our application.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import { Album } from '@/types';
    import { BackendApi, settings } from '@/utils';

    @Component
    export default class Navbar extends Vue {
        section: Array<Album> = [];

        async created() {
            const type = this.$route.path.substring(1);

            try {
                this.section = await new BackendApi().getSection(type);
            } catch (error) {
                console.error(`Failed to get section "${type}" from server.`);
            }
        }

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
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .backdrop {
        opacity: 0.35;
        position: fixed;
        width: 100%;
        z-index: -1;
        top: $navbar-height;

        //@media @mobile {
        //    top: 5rem;
        //}

        .gradient {
            background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), $body-background-color);
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
</style>
