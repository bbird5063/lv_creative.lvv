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
					<tr :class="{ 'd-none': person.id !== editPersonId }">
						<!--tr :class="isEdit(person.id) ? '' : 'd-none'"-->
						<th scope="row">{{ person.id }}</th>
						<td><input v-model="name" type="text" class="form-control"></td>
						<td><input v-model="age" type="number" class="form-control"></td>
						<td><input v-model="job" type="text" class="form-control"></td>
						<td><a @click.prevent="updatePerson(person.id)" href="#" class="btn btn-success">Update</a></td>
					</tr>
				</template>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'IndexComponent',
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
			this.name = name;
			this.age = age;
			this.job = job;

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
