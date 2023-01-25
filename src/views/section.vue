<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * The component that implements the navigation bar in our application.
     */
    import { Component, Vue } from 'vue-facing-decorator';

    @Component({ name: 'fd-section' })
    export default class Navbar extends Vue {
        created() {
            console.log('In Section!');
        }
    }
</script>

<template>Section</template>
