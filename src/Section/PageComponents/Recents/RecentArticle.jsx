import React from 'react';
import './styles.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {Markup} from "interweave";
import CommentsBox from '../../../util/CommentsBox/CommentsBox';
import { renderByLine } from '../../../util/renderByLine';

function RecentArticle(props){
    return(
        <div className="card mb-5">
                <div className={"row no-gutters " + (props.category === "Skytop Survey" ? "survey-row":"")}>
                    <div className="col-md-6 text-left">
                        <img className={"card-img-top " + (props.category === "Skytop Survey" ? "survey-img":"recent-img")} src={props.image} alt="article"></img>
                    </div>
                    <div className="col-md-6 card-body-column">
                        <div className="card-body">
                            {window.location.pathname === "/" && 
                                <div className={"category "+(props.category === "Skytop Survey" ?"survey-cat":"")}>
                                    {props.category === "Skytop Survey" ? 
                                        <div className="cat-text">
                                            <p className="m-3">Skytop Perspectives</p>
                                        </div>
                                        : <p className="cat-text">{props.category}</p>
                                    }
                                </div>
                            }
                            <Link to={`/articles/${props.id}`} >
                                <h5 className="card-title"><Markup content={props.title}></Markup></h5>
                            </Link>

                            {/* Edit Survey Card Body Below */}
                            <div className={(props.category === "Skytop Survey" ? "survey-excerpt":"")}>
                                    {props.category === "Skytop Survey" ? 
                                        <div>
                                            {/* hardcoded excerpt needs to be pulled from ACF props */}
                                            <p>Activist investors from outside of a company’s region continue to buy into companies to effectuate strategic changes, ones believed to increase performance...</p>
                                            
                                            <Link to={`/articles/${props.id}`} >
                                                <button className="btn btn-primary m-3">Click For Survey Results</button>
                                            </Link>
                                        </div>
                                        : 
                                        <div></div>
                                    }
                                </div>
                                
                            
                            <div className={"byline " + (props.category === "Skytop Survey" ? "text-dark":"")}>
                                {props.custom_byline ?
                                    <> 
                                        <p className="m-0"><Markup content={props.custom_byline}/></p>
                                        {/* <p className="mt-1">{moment(props.date).format("MMMM Do, YYYY")}</p> */}
                                    </>
                                    :
                                    <p className="m-0">By <Markup content={renderByLine(props.author)}/> / {moment(props.date).format("MMMM Do, YYYY")} </p>
                                }
                            </div>
                        </div>
                        <div className="pl-3 recents-comments mb-2 mr-2 mt-0">
                                <CommentsBox category={props.category} comments={props.comments} id={props.id}/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default RecentArticle;