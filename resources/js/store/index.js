import { createStore } from 'vuex';
import { person } from './modules/person.js';

export default createStore({
	modules: {
		person,
	},
});
