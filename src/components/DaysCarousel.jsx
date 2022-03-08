import DaysCarouselItem from "./DaysCarouselItem";

function DaysCarousel(props) {

    return (
        <div>
            {props.daysWithMinPrice.map((a, i) => <DaysCarouselItem key={i} {...a} />)}
        </div>
    );
}

export default DaysCarousel;
