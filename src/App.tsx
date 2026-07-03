import './App.css'
import Body from './components/main/body/body'
import Header from './components/main/header/header'
import Navbar from './components/main/navbar/navbar'

function App() {

  return <div className='app-main'>
    <Header></Header>
    <div className='app-main-body'>
      <Navbar mode='side'></Navbar>
      <Body></Body>
    </div>
  </div>
}

export default App
