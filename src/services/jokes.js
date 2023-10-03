import { ref } from 'vue'

export function useJokes() {
  const jokes = ref([])

  async function searchJokes(query) {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    const json = await response.json()
    jokes.value = json.result
  }

  return { jokes, searchJokes }
}
