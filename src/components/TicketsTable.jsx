import TicketsTableItem from "./TicketsTableItem";

function TicketsTable(props) {

    return (
        <table>
            <thead></thead>
            <tbody>
                {props.ticketsArr.map((a, i) => <TicketsTableItem key={i} {...a} />)}
            </tbody>
        </table>
    );
}

export default TicketsTable;
