import './App.css'
import InputText from './components/form/input/input'
import Body from './components/main/body/body'
import Header from './components/main/header/header'
import Navbar from './components/main/navbar/navbar'

function App() {


  return <div className='app-main'>
    <Header></Header>
    <div className='app-main-body'>
      <Navbar mode='side'></Navbar>
      <Body>
        <InputText
          name='test'
          placeholder='Enter text here'
          maxlength={50}
          minlength={5}
          required={true}
          onChange={(value) => console.log('Input changed:', value)}
        />
      </Body>
    </div>
  </div>
}

export default App
