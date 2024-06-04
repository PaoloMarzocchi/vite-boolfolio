<script>
import axios from 'axios';
import { state } from '../state.js';

export default {
    name: 'Project',
    data() {
        return {
            state,
            project: {},
        }
    },
    methods: {
        callAPI(url) {

            /* console.log(url); */
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    if (response.data.success) {
                        this.project = response.data.response;
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }
                }).catch(err => {
                    console.error(err);
                })
        }
    },
    mounted() {
        const url = state.base_api_url + state.base_projects_url + `/${this.$route.params.slug}`;
        this.callAPI(url);
    }
}
</script>


<template>
    <section class="show-project">
        <h2>Project: {{ project.title }}</h2>

        <div class="container">
            <div class="row">
                <div class="col">
                    <template v-if="project.preview">

                        <template v-if="project.preview.startsWith('previews')">
                            <img :src="state.base_api_url + '/storage/' + project.preview" :alt="project.title">
                        </template>
                        <template v-else>
                            <img :src="project.preview" :alt="project.title">
                        </template>

                    </template>
                    <template v-else>

                        <img src="https://www.halmanera.it/wp-content/themes/vio/assets/images/no-image/No-Image-Found-400x264.png"
                            alt="No image found">

                    </template>
                </div>
                <div class="col">
                    <ul>
                        <li>
                            <strong>Description: </strong><br>
                            {{ project.description }}
                        </li>
                        <li>
                            <strong>Type: </strong><br>
                            {{ project.type ? project.type.name : 'No type' }}
                        </li>
                        <li>
                            <strong>Project link: </strong><br>
                            <a :href="project.project_url">Go to project</a>
                        </li>
                        <li>
                            <strong>Repository link: </strong><br>
                            <a :href="project.repo_url">Check project code</a>
                        </li>
                        <li>
                            <strong>Start Date: </strong><br>
                            {{ project.start_date }}
                        </li>
                        <li>
                            <strong>End Date: </strong><br>
                            {{ project.end_date }}
                        </li>
                        <li>
                            <strong>Technologies: </strong>
                            <div class="d-flex flex-wrap gap-2 mt-1" v-if="project.technologies">

                                <span class="badge text-bg-primary" v-for="tech in project.technologies">{{ tech.name
                                    }}</span>
                            </div>
                            <div class="d-flex flex-wrap gap-2 mt-1" v-else>
                                <span class="badge text-bg-secondary">Nothing found</span>

                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
.show-project {

    & h2 {
        text-align: center;
    }

    .col {
        width: 50%;
        padding: 0 1rem;

        & ul {
            list-style: none;
        }
    }


}
</style>