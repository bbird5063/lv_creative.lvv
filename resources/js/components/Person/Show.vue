<template>
	<!-- НЕ ЗАБЫВАТЬ v-if (это вылазит раньше) -->
	<div v-if="person">
		Show (id={{ $route.params.id }}):
		<div>
			Name: {{ person.name }}
		</div>
		<div>
			<!-- для проверки: -->
			Name2: {{$store.state.person.person.name}}
		</div>
		
		<div>
			Age: {{ person.age }}
		</div>
		<div>
			Job: {{ person.job }}
		</div>
		<router-link :to="{ name: 'person.edit', params: { id: person.id } }">Edit</router-link>
	</div>
</template>

<script>
export default {
	name: 'Show',
	/*data() { // Убираем!
		return {
			person: null,
		}
	},*/
	mounted() {
		//this.getPerson(); // Убираем!
		this.$store.dispatch('getPerson', this.$route.params.id)
	},

	methods: {
		/*getPerson() { // Убираем!
			axios.get(`/api/people/${this.$route.params.id}`)
				.then(res => {
					console.log('--------res-------');
					console.log(res);
					this.person = res.data.data; // добавили .data
				})
		},*/

	},

	computed: {
		person() {
			//return this.$store.getters.person // все равно 'getters' или 'state'
			return this.$store.state.person.person
		}
	}
}
</script>

<style scoped></style>