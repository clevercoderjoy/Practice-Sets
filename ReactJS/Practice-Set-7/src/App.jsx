import React from "react";
import "./App.css";
import {
    fakeFetchMoviesSix,
    fakeFetchMoviesThree,
    fakeFetchProductNine,
    fakeFetchProductsSeven,
    fakeFetchQuoteFive,
    fakeFetchUserTwo,
    fakeFetchUsersFour,
    fakeFetchWeatherOne,
} from "./Data";
import { SolOne } from "./SolOne";
import { SolTwo } from "./SolTwo";
import { SolThree } from "./SolThree";
import { SolFour } from "./SolFour";
import { SolFive } from "./SolFive";
import { SolSix } from "./SolSix";
import { SolSeven } from "./SolSeven";
import { SolNine } from "./SolNine";

function App() {
    return (
        <React.Fragment>
            <h1>React Practice Set 7</h1>
            <hr />
            {/* <SolOne fetchOne={fakeFetchWeatherOne} />
            <SolTwo fetchTwo={fakeFetchUserTwo} />
            <SolThree fetchThree={fakeFetchMoviesThree} />
            <SolFour fetchFour={fakeFetchUsersFour} />
            <SolFive fetchFive={fakeFetchQuoteFive} />
            <SolSix fetchSix={fakeFetchMoviesSix} />
            <SolSeven fetchSeven={fakeFetchProductsSeven} /> */}
            <SolNine fetchNine={fakeFetchProductNine} />
        </React.Fragment>
    );
}

export default App;
