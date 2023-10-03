import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      searchQuery: '',
      searchCount: null
    }
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query
    },
    setSearchCount(state, count) {
      state.searchCount = count
    }
  }
})
