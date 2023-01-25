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
    export default class Navbar extends Vue {
        @Prop album: Album;

        created() {
            console.log('AAAAAAAAAAAAAAAAAAAAA', this.album);
        }
    }
</script>

<template>THUMBNAIL</template>
