import { useState } from 'react'
import './index.css'
import Error from './components/Error/Error'
import Header from './components/Header/Header'
import SearchInput from './components/Search/SearchInput'
function App() {

  return (
    <>
      <Header
        notice={"Under Constraction"}
      />
      <SearchInput />
      <Error />
    </>
  )
}

export default App