import { createRouter, createWebHistory } from 'vue-router';
import PostComponent from './components/PostComponent.vue';
import TagComponent from './components/TagComponent.vue';

const routes = [
	{
		path: '/posts',
		component: PostComponent,
	},
	{
		path: '/tags',
		component: TagComponent,
	},

];

const router = createRouter({
	routes,
	//history: createWebHistory(process.env.BASE_URL), // console: ...Uncaught ReferenceError: process is not defined(Неперехваченная ошибка ссылки: процесс не определен)
	history: createWebHistory(),
});

export default router;
