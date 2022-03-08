import TicketsTable from "./TicketsTable";
import DaysCarousel from "./DaysCarousel";


function ResultsContainer(props) {


    const ticketArrMapped = props.ticketsArr.map(t => ({
        date: t.date.split('T')[0],
        price: +t.price.replace('$', '')
    }));
    const daysWithMinPrice = Array.from(new Set(ticketArrMapped.map(t => t.date)))
        .map(d => ({
            date: d,
            minPrice: Math.min(...ticketArrMapped.filter(t => t.date === d).map(t => t.price))
        }));



    return (
        <>
            <DaysCarousel daysWithMinPrice={daysWithMinPrice} />
            <TicketsTable ticketsArr={props.ticketsArr} />
        </>
    );
}

export default ResultsContainer;
