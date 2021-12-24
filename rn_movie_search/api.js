// takes a query string, an api key, and the number of pages received thus far (starting at 0 for initial call)
export const searchMovies = async (query, apiKey, page) => {
  try {
    // console.log("getting movie data: ", query, apiKey, page)

    const queryUrl = `https://www.omdbapi.com/?apikey=${apiKey}&type=movie&s=${query}&page=${page + 1}`
    // console.log('fetching:', queryUrl)

    const response = await fetch(queryUrl)
    const responseJson = await response.json()

    // console.log("returning from api fetch", Object.keys(responseJson))
    return { searchResult: responseJson, cachedMovies: [...responseJson.Search], page: page + 1 }
    }
    catch (error) {
      console.error("Something went wrong with fetching: "+error)
        return new Error(error.message)
    }
}
