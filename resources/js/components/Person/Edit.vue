<template>
	<div class="w-25">
		<div class="mb-3">
			<input type="text" v-model="name" placeholder="name" class="form-control">
		</div>
		<div class="mb-3">
			<input type="number" v-model="age" placeholder="age" class="form-control">
		</div>
		<div class="mb-3">
			<input type="text" v-model="job" placeholder="job" class="form-control">
		</div>
		<div class="mb-3">
			<input @click.prevent="updatePerson" type="submit" value="Add" class="btn btn-primary">
		</div>
	</div>
</template>

<script>
import router from '../../router';
export default {
	name: 'Edit',
	data() {
		return {
			name: null,
			age: null,
			job: null,
		}
	},

	mounted() {

		//console.log(this.$route.params); // получаем {id: '15'} // НЕ ПУТАТЬ С this.$router ИМЕННО this.$route // мы увидим луюбые парамтры, которые нарисум в http://127.0.0.1:8000/...

		console.log(this.$route.params.id); // получаем 15

		this.getPerson();
	},

	methods: {
		getPerson() {
			axios.get('/api/people/' + this.$route.params.id)
				.then(res => {
					console.log(res);
					this.name = res.data.name;
					this.age = res.data.age;
					this.job = res.data.job;
				})
		},
		updatePerson() {
			axios.patch('/api/people/' + this.$route.params.id, { name: this.name, age: this.age, job: this.job })
				.then(res => {
					router.push({name: 'person.show'}); // РАБОТАЕТ!
					//router.push('/people/show'); // РАБОТАЕТ!
				})
		},
	}
}
</script>

<style scoped></style>