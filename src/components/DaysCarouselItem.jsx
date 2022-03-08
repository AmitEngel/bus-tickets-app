
function DaysCarouselItem(props) {
    const arr = [];
    return (
        <div>
            <p>{props.date}</p>
            <p>{props.minPrice}</p>
        </div>
    );
}

export default DaysCarouselItem;
