import { useEffect, useState } from 'react'
import './App.css'
import init from '../wasm/pkg'
import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './components/Main'

function App() {

  useEffect(() => {
    init()
  }, [])

  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  )
}

export default App
