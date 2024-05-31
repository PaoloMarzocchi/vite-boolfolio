<script>
import AppHeader from './components/AppHeader.vue';

export default {
	name: 'App',
	components: {
		AppHeader
	}

}
</script>

<template>

	<AppHeader></AppHeader>


	<main>
		<RouterView></RouterView>

	</main>


	<footer>
		Footer
	</footer>
</template>

<style></style>
