<template>
	<div>
		<div>Color: {{ color }}</div>
		<div>Number: {{ number > 10 ? 'more 10' : 'less 10' }}</div>
		<div>Is published: {{ isPublished ? 'Published' : 'No Published' }}</div>
	</div>
</template>

<script>
export default {
	name: 'SomeComponent',
	data() {
		return {
		}
	},

	props: [
		'color', 'number', 'isPublished'
	],

	methods: {
	},
	mounted() {
		this.$parent.$parent.parentLog();
	},
}
</script>

<style scoped></style>
