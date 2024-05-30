<script>
export default {
	name: 'ProjectCard',
	props: {
		project: Object,
		baseUrl: String
	}
}
</script>
<template>
	<div class="card">
		<div class="card-img">

			<template v-if="project.preview">

				<template v-if="project.preview.startsWith('previews')">
					<img :src="baseUrl + '/storage/' + project.preview" :alt="project.title">
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
		<div class="card-title">
			{{ project.title }}
		</div>
	</div>

</template>
<style>
.card {
	height: 100%;
	padding: 0.5rem;
	background-color: #ffffff25;
	border: 1px solid #ad3737;
	border-radius: 10px;

	& img {
		aspect-ratio: 16/9;
		object-fit: cover;
	}
}
</style>