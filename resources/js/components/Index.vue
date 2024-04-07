<template>
	<div>
		<!--
			Входная точка:
			В этой точке будет подключаться вся механика роутера.
			Все компоненты указанные в "resources\js\router.js" будут отображаться в этой точке!
			Все что будет до и после этой точке будет на всех страницах.

			<router-link> - тег от vue-router
		-->
		<router-link to="/posts">Posts</router-link>
		<router-link to="/tags">Tags</router-link>
		<router-view></router-view> 
		<br>
		К примеру какой-то футер
	</div>
</template>

<script>
export default {
	name: 'Index',
	data() {
		return {
		}
	},

	methods: {
	}
}
</script>

<style scoped></style>