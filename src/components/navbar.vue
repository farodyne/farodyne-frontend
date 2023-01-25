<script lang="ts">
    /**
     * Author: Federico Engler
     *
     * The component that implements the navigation bar in our application.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import { NavbarLinks } from '@/constants';

    @Component({ name: 'fd-navbar' })
    export default class Navbar extends Vue {
        navbarLinks = NavbarLinks;
    }
</script>

<template>
    <nav>
        <router-link v-for="link in navbarLinks" :to="`/${link}`">{{ link }}</router-link>
    </nav>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    nav {
        align-items: center;
        background-color: $body-background-color;
        border-bottom: $border-width-xs solid $carousel-border-color;
        display: flex;
        font-size: $navbar-font-size;
        height: 6rem;
        justify-content: center;
        position: fixed;
        text-transform: uppercase;
        width: 100%;
        z-index: 10;

        a {
            color: $navlink-color;
            display: flex;
            font-family: $main-font;
            padding: 0 2.4rem;
            text-decoration: none;
        }
    }
</style>
