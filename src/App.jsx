
import { Routes, Route } from 'react-router-dom'
import Feed from './components/Feed'
import Layout from './Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Feed />}></Route>
        <Route path='/business' element={<Feed category='business' />}></Route>
        <Route path='/sports' element={<Feed category='sports' />}></Route>
        <Route path='/entertainment' element={<Feed category='entertainment' />}></Route>
        <Route path='/general' element={<Feed category='general' />}></Route>
        <Route path='/health' element={<Feed category='health' />} ></Route>
        <Route path='/science' element={<Feed category='science' />} ></Route>
        <Route path='/technology' element={<Feed category='technology' />}></Route>
      </Route>
    </Routes>
  )
}

export default App
