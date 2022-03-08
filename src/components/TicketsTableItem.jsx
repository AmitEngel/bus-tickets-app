
function TicketsTableItem(props) {
    return (
        <tr>
            <td>{props.date} - {props.source}</td>
            <td>{props.due}</td>
            <td>{props.date} - {props.due} - {props.dest}</td>
            <td>{props.operator}</td>
            <td>{props.busId}</td>
            <td>{props.price}</td>
            <td><a href='#'>order</a></td>
        </tr>
    );
}

export default TicketsTableItem;
