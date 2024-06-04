<script>
export default {
    name: 'NotFound',
    data() {
        return {}
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <h1>404 | NOT FOUND</h1>
            <router-link class="btn-lg" to="/"> Return to Home</router-link>
        </div>
    </div>
</template>



<style scoped>
.row {
    height: 100vh;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &>a {
        text-decoration: none;
        color: inherit;
    }
}
</style>