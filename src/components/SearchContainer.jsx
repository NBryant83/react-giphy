import { useState } from 'react'
import Search from "./Search"

const SearchContainer = () => {
  const [query, setQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const API_KEY = "8O329RP8MqxVpfV6vQKgHSEHOL5kxUNN"
    const url = "api.giphy.com/v1/gifs/trending"
    // console.log('submitted', query)
    const response = await axios.get(`${url}?api_key=${api_key}&q={query}`)
    // console.log(response.data)
    // console.log('submitted!', query)
    setHasSearched(true)
    setSearchResults(response.data.data)
    // setSearchResults(prev =>[...prev, ...response.data.data])
  }

  const handleChange = e => {
    setQuery(e.target.value)
  let resultsContent = searchResults.map((result, idx) => {
    return <Results key={idx} data={result} />
  })
    return(
    <div>
      {searchFormContent}
      /* ternary operators - if/else statement that happens in one line*/
      {hasSearched ? resultsContent: <></>}
    </div>
  )
    }
}

export default SearchContainer