import "./App.css";
import {
    QuesEightDonationData,
    QuesFiveVegetablesData,
    QuesNineCarsData,
    QuesSixBouquetData,
    QuesTenStudentData,
    QuesTwoCartoonsData,
} from "./Data";
import { QuesFive } from "./QuesFive";
import { QuesOne } from "./QuesOne";
import { QuesTwo } from "./QuesTwo";
import { QuesSix } from "./QuesSix";
import { QuesEight } from "./QuesEight";
import { QuesNine } from "./QuesNine";
import { QuesTen } from "./QuesTen";

function App() {
    return (
        <div className="App">
            <h1>React Practice Set 3</h1>
            <hr />
            <QuesOne
                imageLink={"https://picsum.photos/200"}
                imageHeight={"300px"}
                imageWidth={"300px"}
            />
            <QuesTwo
                cartoons={QuesTwoCartoonsData}
                requiredSuperpower={"Intelligence"}
            />
            <QuesFive vegetables={QuesFiveVegetablesData} />
            <QuesSix bouquet={QuesSixBouquetData} />
            <QuesEight donations={QuesEightDonationData} />
            <QuesNine cars={QuesNineCarsData} />
            <QuesTen students={QuesTenStudentData} />
        </div>
    );
}

export default App;
