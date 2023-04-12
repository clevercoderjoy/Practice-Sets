import './App.css'
import { QuesOne } from './QuesOne'
import { QuesTwo } from './QuesTwo'
import { fakeFetchProductsTwo, fakeFetchUsersOne } from './data'

function App() {

  return (
    <div className="App">
      <h1>React Practice Set 5</h1>
      <hr />
      <QuesOne fetchUsersOne={fakeFetchUsersOne}/>
      <QuesTwo fetchProductsTwo={fakeFetchProductsTwo} />
    </div>
  )
}

export default App
