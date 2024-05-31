<script>

export default {
	name: 'App',

}
</script>

<template>

	<header>

		<router-link :to="{ name: 'home' }">Home</router-link>
		<router-link :to="{ name: 'projects' }">Projects</router-link>
		<router-link :to="{ name: 'about' }">About</router-link>
		<router-link :to="{ name: 'contacts' }">Contacts</router-link>

	</header>


	<main>
		<RouterView></RouterView>

	</main>


	<footer>
		Footer
	</footer>
</template>

<style></style>
