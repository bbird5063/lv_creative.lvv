import { createApp } from 'vue';
import './bootstrap'; // в bootstrap 'import axios' и заголовки(.js не обязательно)
import Index from './components/Index.vue'; // .vue ОБЯЗАТЕЛЬНО!
import router from './router'; // .js не обязательно
import store from './store'; // папка, index.js

const app = createApp({}); // работает только без 'new'
app.component('Index', Index);

app.use(router).use(store).mount('#app');

console.log(app);
console.log(store);