<template>
	<div class="w-25">
		<div class="mb-3">
			<input v-model="name" type="text" class="form-control" id="name" placeholder="name">
		</div>
		<div class="mb-3">
			<input v-model="age" type="number" class="form-control" id="age" placeholder="age">
		</div>
		<div class="mb-3">
			<input v-model="job" type="text" class="form-control" id="job" placeholder="job">
		</div>
		<div class="mb-3">
			<input @click.prevent="addPerson" class="btn btn-primary" value="Добавить">
		</div>
		<SomeComponent :obj="obj"></SomeComponent>
	</div>
</template>

<script>
import SomeComponent from './SomeComponent.vue';
export default {
	name: 'CreateComponent',
	components: {
		SomeComponent
	},
	data() {
		return {
			name: null,
			age: null,
			job: null,
			obj: {
				color: 'blue',
				number: 10,
				isPublished: false,
			},
		}
	},

	methods: {
		addPerson() {
			console.log(this.name, this.age, this.job);
			axios.post('/api/people', { name: this.name, age: this.age, job: this.job })
			.then(res => {
				this.name = this.age = this.job = null;
				console.log(res.data);
			})
		},
	},
	mounted() {
		this.$parent.$refs.IndexComp.indexLog();
	},
}
</script>

<style scoped></style>
