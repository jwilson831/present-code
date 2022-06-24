import React from 'react';
import './styles.css';
import { Markup } from 'interweave';
import { Link } from 'react-router-dom';
import CommentsBox from '../CommentsBox/CommentsBox';
import { scrollToTop } from '../scrollToTop';

function Editorial(props){
    return(
        <div className="edit-container">
            <div className="category edit-category">
                <p className="cat-text">{props.category}</p>
            </div>
            <img className="edit-img" src={props.img} alt="editorial"></img>
            <br/>
            {props.title2 ? (<h6 className="space">{props.title}<b>{props.title2}</b></h6>) : (<h6 className="space"><b>{props.title}</b></h6>)}
            {/* {props.category === "Editor's Note" ? (<><br/><b>“It’s a great huge game of chess that’s being played–all over the world–if this is the world at all, you know.”</b><br/><i>Lewis Carroll, Through the Looking Glass</i></>) : null} */}

            <p className="edit-text mt-4"><Markup content={props.excerpt}></Markup><span></span></p>
            <Link to={props.link}>
                <button onClick={() => scrollToTop()}className="btn sky-submit mb-3">Read Full Note</button>
            </Link>
            <p className="edit-name">By {props.author}</p>
            <a className="text-primary" href={`mailto:${props.email}`}>{props.email}</a>
            <div className="pl-3 recents-comments ">
                <CommentsBox comments={props.comments} id={props.id}/>
            </div>
        </div>
    )
}

export default Editorial;