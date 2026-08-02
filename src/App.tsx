import './App.css'
import SelectMultiple from './components/form/select/select_multiple_options'
import Body from './components/main/body/body'
import Header from './components/main/header/header'
import Navbar from './components/main/navbar/navbar'

function App() {


  return <div className='app-main'>
    <Header></Header>
    <div className='app-main-body'>
      <Navbar mode='side'></Navbar>
      <Body>
        <form
          style={{
            marginTop: 100
          }}
        >
          <SelectMultiple
          name='ad'
          dataList={{
            key: 'key',
            value: 'value',
            list: [{
              key: 'kakakakakakaka',
              value: 'kakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakakaka'
            },
            {
              key: 'kb',
              value: 'vb'
            },
            {
              key: 'kc',
              value: 'vc'
            }]
          }}
        />
        </form>
      </Body>
    </div>
  </div>
}

export default App
