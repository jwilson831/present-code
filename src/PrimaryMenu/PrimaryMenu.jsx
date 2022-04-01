import React, {useState, useEffect} from 'react';
import SideContainer from './components/SideContainer';
import NewsFeed from '../util/News/NewsFeed';
import Editorial from '../util/Editorial/Editorial';
import Calendar from '../util/Calendar/Calendar';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../util/scrollToTop';
import { Markup } from 'interweave';


function PrimaryMenu (props){
    // eslint-disable-next-line
    const [currentWindow, setCurrentWindow] = useState(window.location.pathname);
    useEffect(() => {
        setCurrentWindow(window.location.pathname)
    },[])
    return(
        <>
            <div className="side-menu-container text-left">
                <SideContainer conferences={props.conferences}/>
                {window.location.pathname === "/" ?
                <div>
                    <a href={"https://www.spglobal.com/en/"} target="_blank" rel="noreferrer">
                        <img style={{width:"80%", boxShadow:"none"}} className="menu-advert" alt="ad" src={"https://utcoleca.sirv.com/SKYTOP/S_P%20Global%20S1%20Climate%20Week-Event%20Collaterals-01_Climate%20Week%20Event%20Page-800x800%202.png"}></img>
                    </a>
                    <Editorial
                        id={props.editorial.id}
                        category={"Editor's Note"}
                        title={"Editor’s Note #6: Hostile Nation States, Terrorists and Cyber Criminals"}
                        img={props.editorial.acf.image}
                        author={props.editorial.acf.author}
                        excerpt={props.editorial.excerpt.rendered}
                        link={"/editorial"}
                        comments={props.comments}
                        email={"cskroupa@skytopstrategies.com"}
                    />
                    <Editorial
                        id={props.publisher.id}
                        category={"Publisher's Note"}
                        title={"Publisher’s Note #6: Hostile Nation States, Terrorists and Cyber Criminals"}
                        img={props.publisher.acf.image}
                        author={props.publisher.acf.author}
                        excerpt={props.publisher.excerpt.rendered}
                        link={"/publisher"}
                        comments={props.comments}
                        email={"asullivan@skytopstrategies.com"}
                    />
                    </div>
                :""}
                <a href={props.ad_link} target="_blank" rel="noreferrer">
                    <img style={{boxShadow:"none"}} className="menu-advert" alt="ad" src={props.ad}></img>
                </a>
    {/* <hr style={{marginTop:"75px"}} />  */}
                <NewsFeed />

            </div>
        </>
    )
}

export default PrimaryMenu;