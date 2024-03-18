<template>
	<div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Name</th>
					<th scope="col">Age</th>
					<th scope="col">Job</th>
					<th scope="col">Edit</th>
					<th scope="col">Delete</th>
				</tr>
			</thead>
			<tbody>
				<template v-for="person in people">
					<tr :class="{ 'd-none': person.id === editPersonId }">
						<th scope="row">{{ person.id }}</th>
						<td>{{ person.name }}</td>
						<td>{{ person.age }}</td>
						<td>{{ person.job }}</td>
						<td><a @click.prevent="changePersonId(person.id, person.name, person.age, person.job)" href="#"
								class="btn btn-success">Edit</a></td>
						<td><a @click.prevent="deletePerson(person.id)" href="#" class="btn btn-danger">Delete</a></td>
					</tr>
					<!--EditComponent :person="person" ref="edit"></EditComponent - НЕ БУДЕТ РАБОТАТЬ-->
					<!-- Для каждого элемента свой ref со своим именем -->
					<EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
				</template>
			</tbody>
		</table>
	</div>
</template>

<script>
import EditComponent from './EditComponent.vue';
export default {
	name: 'IndexComponent',
	components: {
		EditComponent,
	},
	data() {
		return {
			people: null,
			editPersonId: null,
			name: null,
			age: null,
			job: null,
		}
	},

	mounted() {
		this.getPeople();
	},

	methods: {
		getPeople() {
			axios.get('/api/people')
				.then(res => {
					console.table(res.data);
					this.people = res.data;
				})
		},

		updatePerson(id) {
			this.editPersonId = null;
			console.log(this.name, this.age, this.job);
			axios.patch(`/api/people/${id}`, { name: this.name, age: this.age, job: this.job })
				.then(res => {
					this.getPeople(); // для обновления таблицы
				})
		},

		deletePerson(id) {
			axios.delete(`/api/people/${id}`)
				.then(res => {
					this.getPeople(); // для обновления таблицы
				})
		},


		changePersonId(id, name, age, job) {
			this.editPersonId = id;
			let editName = `edit_${id}`; // получаем динамичное название элемента массива
			let fulleditName = this.$refs[editName][0]; // [0] обязательно, т.к. это первый эл. массива
			console.log(this.$refs[editName]);
			fulleditName.name = name;
			fulleditName.age = age;
			fulleditName.job = job;
		},

		isEdit(id) {
			return this.editPersonId === id;
		},

		indexLog() {
			console.log('Это индекс-компонент(из брата)!');
		},

	},

}
</script>

<style scoped></style>
