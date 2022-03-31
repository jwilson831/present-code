import React from 'react';
import './styles.css';
import Advert from '../../../util/Advert/Advert';

function Feature (props){
    return(
        <div className="feature-container text-center">
            <iframe height="600" width="800" className="video" src={props.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="sub-article-title">{props.title ? props.title : ""}</div>
           <hr/>
            {/* <Advert image={"https://swerthmi.sirv.com/SKYTOP/skytop_ads/figbyte.jpg"} link={"https://figbytes.com/speak-to-figbytes-expert/?utm_campaign=Content%20Syndication&utm_source=third-party%20&utm_medium=Ad&utm_content=Skytop%20"}/> */}
            <Advert image={"https://skytop-strategies.com/wp-content/uploads/2022/03/esg.jpg"} link={"https://practicalesg.com/"}/>
    
                   

        </div>
    )
}

export default Feature;