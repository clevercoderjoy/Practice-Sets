import "./App.css";
import {
  QuesEightProductsData,
    QuesFiveProductsData,
    QuesFourProductsData,
    QuesSevenHeadingData,
    QuesSevenLearningData,
    QuesSevenNameData,
    QuesSixContentData,
    QuesSixTitleData,
    QuesTenTodoItemsData,
    QuesThreeUserData,
} from "./Data";
import { QuesOne } from "./QuesOne";
import { QuesTwo } from "./QuesTwo";
import { QuesThree } from "./QuesThree";
import { QuesFour } from "./QuesFour";
import { QuesFive } from "./QuesFive";
import { QuesSix } from "./QuesSix";
import { QuesSeven } from "./QuesSeven";
import { QuesEight } from "./QuesEight";
import { QuesNine } from "./QuesNine";
import { QuesTen } from "./QuesTen";

function App() {
    return (
        <div className="App">
            <h1>Practice Set 2</h1>
            <hr />
            <QuesOne name={"clevercoderjoy"} />
            <QuesTwo product={{ name: "phone", price: 5000 }} />
            <QuesThree user={QuesThreeUserData} />
            <QuesFour products={QuesFourProductsData} />
            <QuesFive products={QuesFiveProductsData} />
            <QuesSix title={QuesSixTitleData} content={QuesSixContentData} />
            <QuesSeven
                heading={QuesSevenHeadingData}
                name={QuesSevenNameData}
                learning={QuesSevenLearningData}
            />
            <QuesEight products={QuesEightProductsData} />
            <QuesNine red={"#EE4B2B"} green={"#7FFFD4"} blue={"#89CFF0"} />
            <QuesTen todoItems={QuesTenTodoItemsData} />
        </div>
    );
}

export default App;
