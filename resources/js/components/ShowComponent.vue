<template>
	<tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
		<th scope="row">{{ person.id }}</th>
		<td>{{ person.name }}</td>
		<td>{{ person.age }}</td>
		<td>{{ person.job }}</td>
		<td><a @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" href="#"
				class="btn btn-success">Edit</a></td>
		<td><a @click.prevent="deletePerson(person.id)" href="#" class="btn btn-danger">Delete</a></td>
	</tr>
</template>

<script>
export default {
	name: 'ShowComponent',

	props: [
		'person'
	],

	data() {
		return {
			
		}
	},

	mounted() {
	},

	methods: {

		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
				.then(res => {
					this.$parent.getPeople(); // для обновления таблицы
				})
		},

		changeEditPersonId(id, name, age, job) {
			this.$parent.editPersonId = id;
			let editName = `edit_${id}`; // получаем динамичное название элемента массива
			let fulleditName = this.$parent.$refs[editName][0]; // [0] обязательно, т.к. это первый эл. массива
			fulleditName.name = name;
			fulleditName.age = age;
			fulleditName.job = job;
		},
	},
}
</script>

<style scoped></style>
