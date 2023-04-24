import React, { useEffect, useState } from "react";
import "./App.css";

export const SolFive = ({ fetchFive }) => {
    const [quote, setQuote] = useState({ loading: true, quoteToDisplay: {} });
    const getQuotes = async () => {
        try {
            const response = await fetchFive();
            setQuote((quote) => ({ loading: false, quoteToDisplay: response }));
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        // getQuotes();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 5</h2>
            <h3>{quote.loading && "Loading..."}</h3>
            <div style={{ display: quote.loading ? "none" : "block" }}>
                <p>"{quote.quoteToDisplay.content}"</p>
                <p>"{quote.quoteToDisplay.author}"</p>
                <button onClick={() => getQuotes()}>New Quote</button>
            </div>
            <hr />
        </React.Fragment>
    );
};
