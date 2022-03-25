import Calendar from '../util/Calendar/Calendar';


const SurveySide = (props) => {
    return(
        <div >
        <Calendar calendar={props.calendar}/>
    </div>
    )
}

export default SurveySide;