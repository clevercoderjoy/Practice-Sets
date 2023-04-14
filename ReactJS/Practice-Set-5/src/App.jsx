import './App.css'
import { QuesFive } from './QuesFive'
import { QuesFour } from './QuesFour'
import { QuesOne } from './QuesOne'
import { QuesSeven } from './QuesSeven'
import { QuesSix } from './QuesSix'
import { QuesTwo } from './QuesTwo'
import { fakeFetchChatsSix, fakeFetchCommentsSeven, fakeFetchProductsTwo, fakeFetchUserFour, fakeFetchUsersFive, fakeFetchUsersOne } from './data'

function App() {

  return (
    <div className="App">
      <h1>React Practice Set 5</h1>
      <hr />
      <QuesOne fetchUsersOne={fakeFetchUsersOne}/>
      <QuesTwo fetchProductsTwo={fakeFetchProductsTwo} />
      <QuesFour fetchUserFour={fakeFetchUserFour} />
      <QuesFive fetchUsersFive={fakeFetchUsersFive} />
      <QuesSix fetchChatsSix={fakeFetchChatsSix} />
      <QuesSeven fetchCommentsSeven={fakeFetchCommentsSeven} />
    </div>
  )
}

export default App
