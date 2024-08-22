import './bootstrap.js';
import store from './store'; // добавили
import { createApp } from 'vue';
import router from './router.js';
import Index from './components/Index.vue';

//require('./bootstrap.js');

/*
const app = {
	el: '#app',
	components: { 
		Index,
	},
	//router,
	
};
*/
const app = createApp({});
app.component('Index', Index);

app.use(router).use(store).mount('#app');
//createApp(app).use(router).mount('#app');
console.log(app);
console.log(store);