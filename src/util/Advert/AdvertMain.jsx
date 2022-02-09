import React from 'react';

function AdvertMain(props){
    return(
        <div className="ad">
            <a href={props.link} target="_blank" rel="noreferrer" >
                <img className="advertmain" src={props.image} alt="ad"></img>
            </a>
        </div>
    )
}

export default AdvertMain;