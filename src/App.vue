<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
	name: 'App',
	components: {
		ProjectCard
	},
	data() {
		return {
			projects: [],
			base_api_url: 'http://127.0.0.1:8000',
			base_projects_url: '/api/projects',
		}
	},
	methods: {
		callAPI(url) {
			axios.get(url)
				.then(response => {
					console.log(response);
					this.projects = response.data.projects;
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

	<header>
		Header
	</header>


	<main>
		<section class="projects">

			<div class="container">
				<div class="row">
					<div class="col" v-for="project in projects.data">

						<ProjectCard :project="project" :baseUrl="base_api_url"></ProjectCard>

					</div>
				</div>
			</div>
		</section>
	</main>


	<footer>
		Footer
	</footer>
</template>

<style></style>
