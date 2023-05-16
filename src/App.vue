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
    @apply text-sm capitalize rounded-3xl bg-primary border-2 border-primary text-white px-8 py-2.5 font-semibold;
    background-image: linear-gradient(30deg, #47aaa9 50%, transparent 0);
    background-repeat: no-repeat;
    background-size: 850px;
    background-position: 0;
    transition: background 300ms ease-in-out;
}

.button:hover {
    background-position: 100%;
    background-color: white;
    @apply text-primary font-semibold;
}

@media screen and (min-width: 1320px) {
    .container {
        max-width: 1320px !important;
    }
}
</style>
