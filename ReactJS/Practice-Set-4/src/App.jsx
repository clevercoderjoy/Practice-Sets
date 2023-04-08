import "./App.css";
import {
    QuesFiveTodoItemsData,
    QuesFourTodoItemsData,
    QuesOneCharactersData,
    QuesSixBooksData,
    QuesThreeItemListData,
} from "./Data";
import { QuesFive } from "./QuesFive";
import { QuesFour } from "./QuesFour";
import { QuesOne } from "./QuesOne";
import { QuesSeven } from "./QuesSeven";
import { QuesSix } from "./QuesSix";
import { QuesThree } from "./QuesThree";
import { QuesTwo } from "./QuesTwo";

function App() {
    return (
        <div className="App">
            <h1>React Practice Set 4</h1>
            <hr />
            <QuesOne characters={QuesOneCharactersData} />
            <QuesTwo />
            <QuesThree listItems={QuesThreeItemListData} />
            <QuesFour todo={QuesFourTodoItemsData} />
            <QuesFive todo={QuesFiveTodoItemsData} />
            <QuesSix books={QuesSixBooksData} />
            <QuesSeven currentLives={5} />
        </div>
    );
}

export default App;
