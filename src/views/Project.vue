<script>
import axios from 'axios';

export default {
    name: 'Project',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects/',
            project: {},
        }
    },
    methods: {
        callAPI() {
            const url = this.base_api_url + this.base_projects_url + this.$route.params.slug;
            console.log(url);
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.project = response.data.response;
                }).catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        this.callAPI();
    }
}
</script>


<template>
    <h1>Project {{ project.title }}</h1>
</template>


<style></style>