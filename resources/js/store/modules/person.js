const state = {
	person: null,
}

const getters = {
	person: state => state.person // непонятно зачем это нужно, можно обращаться напрямую к state, если ничего вычислять не надо
}

const mutations = {
	setPerson(state, person) {
		state.person = person
	}
};

const actions = {
	getPerson({ state, commit, dispatch }, id) { // все(загестрированные имена), которые можно использовать: { state, commit, dispatch }, если одно, то {} не надо
		axios.get(`/api/people/${id}`)
			.then(res => {
				console.log('--------res2-------');
				console.log(res);
				commit('setPerson', res.data.data)
			})
	}
}

export default {
	state, getters, mutations, actions
}