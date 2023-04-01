import './App.css'
import { QuesOne } from './QuesOne';
import { QuesOneDataEmployee, QuesThreeDataItems, QuesFourDataImageLink, QuesFourDataCaption, QuesFiveDataProducts, QuesSevenDataStudent, QuesEightDataEmployees } from './Data';
import { QuesTwo } from './QuesTwo';
import { QuesThree } from './QuesThree';
import { QuesFour } from './QuesFour';
import { QuesFive } from './QuesFive';
import { QuesSix } from './QuesSix';
import { QuesSeven } from './QuesSeven';
import { QuesEight } from './QuesEight';

function App() {

  return (
    <div className="App">
      <h1>React Practice Set 1</h1>
      <QuesOne person={QuesOneDataEmployee}/>
      <QuesTwo />
      <QuesThree items={QuesThreeDataItems} headerTitle={"Stationery Items"}/>
      <QuesFour imageLink={QuesFourDataImageLink} imageCaption={QuesFourDataCaption}/>
      <QuesFive products={QuesFiveDataProducts}/>
      <QuesSix products={QuesFiveDataProducts} />
      <QuesSeven student={QuesSevenDataStudent} />
      <QuesEight employees={QuesEightDataEmployees} />
    </div>
  )
}

export default App
