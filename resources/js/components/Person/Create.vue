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
			<input :disabled="!isDisabled" @click.prevent="store" type="submit" value="Add" class="btn btn-primary">
			<!--<input :disabled="!name || !age || !job" @click.prevent="store" type="submit" value="Add" class="btn btn-primary">-->
		</div>
	</div>
</template>

<script>

export default {
	name: 'Create',
	data() {
		return {
			name: null,
			age: null,
			job: null,
		}
	},

	methods: {
		store() {
			// 'api/people/' из routes\api.php: 'prefix' => 'people'
			axios.post('/api/people/', { name: this.name, age: this.age, job: this.job }) // РАБОТАЕТ
				.then(res => { // в function() не будет работать 'this.'! Только в стрелочной!
				this.$router.push({ name: 'person.index' }); // (push тоже, что redirect) РАБОТАЕТ
					//router.push('/people'); // РАБОТАЕТ
				})
		},
	},

	computed: {
		isDisabled() {
			return this.name && this.age && this.job;
			//return !this.name || !this.age || !this.job; // BBird - работает (:disabled="isDisabled")
		}
	}
}
</script>

<style scoped></style>