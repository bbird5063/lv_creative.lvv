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
			<input @click.prevent="store" type="submit" value="Add" class="btn btn-primary">
		</div>
	</div>
</template>

<script>

import router from '../../router'; // .js(?) в router прийдет, то что "export default router"
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
			//axios.post('/api/people/', 'name=' + this.name + '&age=' + this.age + '&job=' + this.job) // РАБОТАЕТ
				.then(res => { // в function() не будет работать 'this.'! Только в стрелочной!
					/* В БД все появилось. Можно очистить поля, но обычно делают редирект */
					console.log('--router--');
					console.log(this.name);
					console.log(router);
					//router.push('person.index'); // (push тоже, что redirect) НЕ РАБОТАЕТ
					router.push('/people'); // РАБОТАЕТ
				})
		},
	}
}
</script>

<style scoped></style>