import Calendar from '../util/Calendar/Calendar';

import './styles.css';

const SurveySide = (props) => {
    return(
        <div className="calendarStyle" >
        <Calendar calendar={props.calendar}/>
    </div>
    )
}

export default SurveySide;