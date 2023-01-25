<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * The component that implements the navigation bar in our application.
     */
    import { Component, Vue } from 'vue-facing-decorator';

    @Component
    export default class Navbar extends Vue {
        created() {
            console.log('In Album!');
        }
    }
</script>

<template>Album</template>
