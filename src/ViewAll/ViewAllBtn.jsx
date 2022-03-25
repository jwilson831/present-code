import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../util/scrollToTop';

function ViewAllBtn(props){
    return(
        <div className="view-all-container">
            <div className="view-all comments-box">
                {props.linkTo === "article" ?
                    <Link to="/index/articles"><p onClick={() => scrollToTop()} className="com-text text-light">View All</p></Link>
                    :
                    <Link to="/index/conferences"><p onClick={() => scrollToTop()} className="com-text text-light">Conference Calendar</p></Link>
                }
            </div>
        </div>
    )
}

export default ViewAllBtn;