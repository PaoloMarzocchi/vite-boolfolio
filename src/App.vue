<script>
import axios from 'axios';

export default {
	name: 'App',
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

						<div class="card">
							<div class="card-img">

								<template v-if="project.preview">

									<template v-if="project.preview.startsWith('previews')">
										<img :src="base_api_url + '/storage/' + project.preview" alt="">
									</template>
									<template v-else>
										<img :src="project.preview" alt="">
									</template>

								</template>

								<template v-else>
									<img
										src="https://www.halmanera.it/wp-content/themes/vio/assets/images/no-image/No-Image-Found-400x264.png"
										alt="">
								</template>

							</div>
							<div class="card-title">
								{{ project.title }}
							</div>
						</div>
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
