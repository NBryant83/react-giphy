// presentational component - no state, no functions
const Search = props => {
  
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={query}
      onChange={handleChange}
      />
      <input type="submit"
      />
    </form>
  )
}

export default Search

// 2 kinds of components - aka w/hooks like useEffect
// a) class based components - aka w/constructor
