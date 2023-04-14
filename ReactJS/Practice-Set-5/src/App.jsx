import './App.css'
import { QuesFive } from './QuesFive'
import { QuesFour } from './QuesFour'
import { QuesOne } from './QuesOne'
import { QuesTwo } from './QuesTwo'
import { fakeFetchProductsTwo, fakeFetchUserFour, fakeFetchUsersFive, fakeFetchUsersOne } from './data'

function App() {

  return (
    <div className="App">
      <h1>React Practice Set 5</h1>
      <hr />
      <QuesOne fetchUsersOne={fakeFetchUsersOne}/>
      <QuesTwo fetchProductsTwo={fakeFetchProductsTwo} />
      <QuesFour fetchUserFour={fakeFetchUserFour} />
      <QuesFive fetchUsersFive={fakeFetchUsersFive} />
    </div>
  )
}

export default App
