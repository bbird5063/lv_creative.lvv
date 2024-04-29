import { createRouter, createWebHistory } from 'vue-router';
/** 
 * При изменений в роутерах routes\api.php, routes\web.php, router.js
 * php artisan route:cache
*/
const routes = [
	{
		path: '/people', component: () => import('./components/Person/Index.vue'),
		name: 'person.index' // "name:... " не работает в блоке js(vue), работает в '<router-link :to="{ name: 'person.index' }"'>, т.е. только в блоке <template> 
	},
	{
		path: '/people/create', component: () => import('./components/Person/Create.vue'),
		name: 'person.create'
	},
	{
		path: '/people/:id/edit', component: () => import('./components/Person/Edit.vue'),
		name: 'person.edit'
	},
	{
		path: '/people/show/:id', component: () => import('./components/Person/Show.vue'), // добавили /:id
		name: 'person.show'
	},

];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;
