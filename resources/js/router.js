import { createRouter, createWebHistory } from 'vue-router';
import PostComponent from './components/PostComponent.vue';

const routes = [
	{
		path: '/PostComponent',
		component: PostComponent,
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL), // console: ...Uncaught ReferenceError: process is not defined
});

export default router;
