<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
}

.button {
    @apply text-sm capitalize rounded-3xl bg-primary text-white px-8 py-2.5 font-semibold;
}

@media screen and (min-width: 1536px) {
    .container {
        max-width: 1320px !important;
    }
}
</style>
