import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		//path: '/people', component: function () { return import('./components/Person/Index.vue') },
		path: '/people', component: () => import('./components/Person/Index.vue'), // стрелочна функция
		name: 'person.index'
	},

];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;
