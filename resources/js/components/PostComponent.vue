<template>
	<div>
		<create-component></create-component>
		<IndexComponent ref="IndexComp"></IndexComponent>
	</div>
</template>

<script>
import CreateComponent from './CreateComponent.vue';
import IndexComponent from './IndexComponent.vue';
export default {
	name: 'PostComponent',
	components: {
		CreateComponent,
		IndexComponent,
	},
	data() {
		return {
			persons: null,
		}
	},

	mounted() {
	},

	methods: {
		parentLog() {
			console.log('Это post-компонент!');
		},

	},

}
</script>

<style scoped></style>
