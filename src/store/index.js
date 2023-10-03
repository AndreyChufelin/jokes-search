import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      search: ''
    }
  },
  mutations: {
    setSearch(state, query) {
      state.count = query
    }
  }
})
