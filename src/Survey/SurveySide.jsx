import Calendar from '../util/Calendar/Calendar';
import Editorial from "../util/Editorial/Editorial";


import './styles.css';

const SurveySide = (props) => {
    return(
        <>
        <div className="calendarStyle" >
            <br/>
        <Calendar calendar={props.calendar}/>
    </div>
    <div className="side-menu-container text-left">
    <Editorial
              id={props.editorial.id}
              category={"Editor's Note"}
              // title={"Editor’s Note #7: The Death of Discourse"}
              title={"Editor’s Note #7:"}
              title2={" The Death of Discourse"}
              img={props.editorial.acf.image}
              author={props.editorial.acf.author}
              excerpt={props.editorial.excerpt.rendered}
              link={"/editorial"}
              comments={props.comments}
              email={"cskroupa@skytopstrategies.com"}
            />
            </div>
            </>
    )
}

export default SurveySide;