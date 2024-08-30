import { createApp } from 'vue';
import './bootstrap'; // в bootstrap 'import axios' и заголовки(.js не обязательно)
import { createRouter, createWebHistory } from 'vue-router';
import Index from './components/Index.vue'; // .vue ОБЯЗАТЕЛЬНО!
import { createStore } from 'vuex';
import person from './store/modules/person.js';

const app = createApp({}); // работает только без 'new'
app.component('Index', Index);

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

const router = new createRouter({ // работает с и без 'new'
	routes,
	history: createWebHistory(),
});



const store = createStore({ // работает с и без 'new'
	modules: {
		person,
	},
});


app.use(router).use(store).mount('#app');

console.log(app);
console.log(store);