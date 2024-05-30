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
		selectedPage(page) {
			const url = this.base_api_url + this.base_projects_url + `?page=${page}`;

			this.callAPI(url);
		},
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
				<nav class="pagination" aria-label="Page navigation">
					<ul>
						<li class="page-item arrow" v-show="projects.prev_page_url" @click="callAPI(projects.prev_page_url)">
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

						<li class="page-item arrow" v-show="projects.next_page_url" @click="callAPI(projects.next_page_url)">
							<a class="page-link" href="#" aria-label="Next">
								<span aria-hidden="true">
									<i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
								</span>
							</a>
						</li>
					</ul>
				</nav>

			</div>
		</section>
	</main>


	<footer>
		Footer
	</footer>
</template>

<style></style>
