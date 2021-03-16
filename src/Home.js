import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


import SearchContainer from './components/SearchContainer'
import Results from './components/Results'
import { Component } from 'react'
import { render } from '@testing-library/react'


const Home = () => {
  
    return(
      <div>
        <h1> Welcome from Home!</h1>
        <h3> <SearchContainer /></h3>
      </div>
    )
  
}

export default Home