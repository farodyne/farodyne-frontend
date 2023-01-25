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
        background: $body-background-color;
    }
</style>
