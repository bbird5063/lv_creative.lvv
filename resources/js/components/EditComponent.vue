<template>
	<!-- добавил this.$parent. -->
	<tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
		<!--tr :class="{ 'd-none': person.id !== editPersonId }"-->
		<th scope="row">{{ person.id }}</th>
		<td><input v-model="name" type="text" class="form-control"></td>
		<td><input v-model="age" type="number" class="form-control"></td>
		<td><input v-model="job" type="text" class="form-control"></td>
		<td><a @click.prevent="updatePerson(person.id)" href="#" class="btn btn-success">Update</a></td>
	</tr>
</template>

<script>
export default {
	name: 'EditComponent',

	props: [
		'person'
	],

	data() {
		return {
			name: null,
			age: null,
			job: null,
		}
	},

	mounted() {
	},

	methods: {
		updatePerson(id) {
			this.$parent.editPersonId = null; // добавил $parent
			console.log(this.name, this.age, this.job);
			axios.patch(`/api/people/${id}`, { name: this.name, age: this.age, job: this.job })
				.then(res => {
					this.$parent.getPeople(); // добавил $parent
				})
		},

	},

}
</script>

<style scoped></style>
