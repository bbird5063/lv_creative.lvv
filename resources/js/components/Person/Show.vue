<template>
	<!-- НЕ ЗАБЫВАТЬ v-if (это вылазит раньше) -->
	<div v-if="person">
		Show (id={{ $route.params.id }}):
		<div>
			Name: {{ this.person.name }}
		</div>
		<div>
			Age: {{ this.person.age }}
		</div>
		<div>
			Job: {{ this.person.job }}
		</div>
		<router-link :to="{ name: 'person.edit', params: { id: this.person.id } }">Edit</router-link>
	</div>
</template>

<script>
export default {
	name: 'Show',
	data() {
		return {
			person: null,
		}
	},
	mounted() {
		this.getPerson();
	},

	methods: {
		getPerson() {
			axios.get(`/api/people/${this.$route.params.id}`)
				.then(res => {
					console.log('----res----');
					console.log(res);
					this.person = res.data.data; // добавили .data
				})
		},

	}
}
</script>

<style scoped></style>