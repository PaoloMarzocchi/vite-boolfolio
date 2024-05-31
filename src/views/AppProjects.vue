<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            loading: true,
            projects: [],
            base_api_url: 'http://127.0.0.1:8000',
            base_projects_url: '/api/projects',
        }
    },
    methods: {
        selectedPage(page) {
            const url = this.base_api_url + this.base_projects_url + `?page=${page}`;

            this.callAPI(url);
        },
        callAPI(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.projects;
                    this.loading = false;

                })
                .catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        const url = this.base_api_url + this.base_projects_url;
        this.callAPI(url);
    }
}
</script>

<template>
    <section class="projects py-5">
        {{ console.log(loading) }}
        <div class="container">
            <template v-if="!loading">
                <div class="row">
                    <div class="col" v-for="project in projects.data">

                        <ProjectCard :project="project" :baseUrl="base_api_url"></ProjectCard>

                    </div>
                </div>
                <nav class="pagination" aria-label="Page navigation">
                    <ul>
                        <li class="page-item arrow" v-show="projects.prev_page_url"
                            @click="callAPI(projects.prev_page_url)">
                            <a class="page-link " href="#" aria-label="Previous">
                                <span aria-hidden="true">
                                    <i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i>
                                </span>
                            </a>
                        </li>

                        <li class="page-item" :class="{ 'active': page == projects.current_page }"
                            v-for="page in projects.last_page" @click='selectedPage(page)'>
                            <a class="page-link" href="#">{{ page }}</a>
                        </li>

                        <li class="page-item arrow" v-show="projects.next_page_url"
                            @click="callAPI(projects.next_page_url)">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">
                                    <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </template>
            <template v-else>
                <div class="loading row">
                    <h2>Loading...</h2>
                    <div class="loading-stick d-flex">
                        <div class="loading-bar">
                        </div>
                    </div>

                </div>
            </template>
        </div>
    </section>
</template>



<style>
.loading.row {
    height: 100vh;
    gap: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--lightest);

    .loading-stick {
        align-items: center;
        height: 1rem;
        width: 50%;
        border: 5px solid var(--lightest);
        border-radius: 10px;

        .loading-bar {
            background-color: var(--primary);
            width: 0px;
            height: 0.5rem;
            border-radius: 10px;
            animation: loading 4s infinite linear;
        }
    }
}

@keyframes loading {
    0% {
        width: 0%;
    }

    50% {
        width: 75%;
    }

    100% {
        width: 100%;
    }
}
</style>
