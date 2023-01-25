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
