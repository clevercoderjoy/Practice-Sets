import "./App.css";
import {
    fakeFetchFivePost,
    fakeFetchFourVideo,
    fakeFetchOneProduct,
    fakeFetchProfileEight,
    fakeFetchProfileTen,
    fakeFetchSevenProject,
    fakeFetchSixHabit,
    fakeFetchThreeHabit,
    fakeFetchToDoTwo,
    fakeFetchVideoNine,
} from "./Data";
import { SolEight } from "./SolEight";
import { SolFive } from "./SolFive";
import { SolFour } from "./SolFour";
import { SolNine } from "./SolNine";
import { SolOne } from "./SolOne";
import { SolSeven } from "./SolSeven";
import { SolSix } from "./SolSix";
import { SolTen } from "./SolTen";
import { SolThree } from "./SolThree";
import { SolTwo } from "./SolTwo";

function App() {
    return (
        <div className="App">
            <h1>React Practice Set 6</h1>
            <hr />
            <SolOne fetchOne={fakeFetchOneProduct} />
            <SolTwo fetchTwo={fakeFetchToDoTwo} />
            <SolThree fetchThree={fakeFetchThreeHabit} />
            <SolFour fetchFour={fakeFetchFourVideo} />
            <SolFive fetchFive={fakeFetchFivePost} />
            <SolSix fetchSix={fakeFetchSixHabit} />
            <SolSeven fetchSeven={fakeFetchSevenProject} />
            <SolEight fetchEight={fakeFetchProfileEight} />
            <SolNine fetchNine={fakeFetchVideoNine} />
            <SolTen fetchTen={fakeFetchProfileTen} /> 
        </div>
    );
}

export default App;
