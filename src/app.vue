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
    }

    body {
        background: $body-background-color;
    }
</style>
