import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/people', component: () => import('./components/Person/Index.vue'),
		name: 'person.index' // "name:... " не работает в js, работает в '<router-link :to="{ name: 'person.index' }"'>, т.е. только в блоке <template> 
	},
	{
		path: '/people/create', component: () => import('./components/Person/Create.vue'),
		name: 'person.create'
	},

];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;
