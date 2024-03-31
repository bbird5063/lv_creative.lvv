import Vue from 'vue';
import VueRouter from 'vue-router';
import PostComponent from './components/PostComponent.vue';

Vue.use(VueRouter);

export default new VueRouter({ // еспортируем зарегистрированные методы
	mode: 'history', // имитируем как в браузере историю
	
	routes: [ // массив!
		{
			path: '/posts',
			component: PostComponent,
		}
	]

});

