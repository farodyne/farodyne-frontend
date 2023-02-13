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

    $navbar-link-padding: 2.4rem;

    nav {
        align-items: center;
        background-color: $primary-background-color;
        border-bottom: $border-width-xs solid $primary-border-color;
        display: flex;
        font-size: $font-size-md;
        font-weight: 500;
        height: $navbar-height;
        justify-content: center;
        position: fixed;
        text-transform: uppercase;
        top: 0;
        width: 100%;
        z-index: 10;

        filter: brightness(0.86);
        @include box-shadow(0 0 1rem 0 $shadow-color);

        a {
            color: $navlink-color;
            padding: 0 $navbar-link-padding;
            text-decoration: none;
            transition-duration: $transition-duration;

            &:hover {
                color: $navlink-hover-color;
                @include blurry-text-shadow($navlink-color);
            }

            &:active {
                color: $navlink-active-color;
            }
        }

        .router-link-active {
            color: $navlink-active-color;
            @include blurry-text-shadow($navlink-color);
        }
    }
</style>
