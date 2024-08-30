import { createStore } from 'vuex';
import person from './modules/person.js';

export default createStore({ // работает с и без 'new'
	modules: {
		person,
	},
});
