<template>
    <div>
        <fd-navbar />
        <router-view :key="$route.path" />
    </div>
</template>

<style lang="scss">
    @import '@/styles/vars.scss';

    html,
    body {
        border: 0;
        margin: 0;
        padding: 0;

        // As we are using rem as unit for font sizes, set the base font size to default size
        // 10px to make out rem calculations easier.
        font-size: 62.5%;
    }

    body {
        color: $primary-foreground-color;
        background: $primary-background-color;
        font-family: $primary-font;
    }

    h1 {
        font-family: $logo-font;
        font-size: 5rem;
        font-weight: 100;
        margin: $content-top-margin 0 0.6rem 0;
        text-align: center;
    }
</style>
