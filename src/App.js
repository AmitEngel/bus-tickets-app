import { useEffect, useState } from "react";
import ResultsContainer from "./components/ResultsContainer";
import SearchForm from "./components/SearchForm";


function App() {

    const [ticketsArr, setTicketsArr] = useState([]);

    function ApiCall({source, destination, date}) {
        console.log({ source, destination, date })
        fetch('http://localhost:3031/tickets')
            .then(res => res.json())
            .then(jRes => jRes.filter(obj => new Date(obj.date).toDateString() === date))
            .then(jRes => setTicketsArr(jRes.filter(obj => obj.source === source.slice(-2))))
            ;
    }

    return (
        <>
            <SearchForm onSearchClick={ApiCall}/>
            <ResultsContainer ticketsArr={ticketsArr} />
        </>
    );
}

export default App;
