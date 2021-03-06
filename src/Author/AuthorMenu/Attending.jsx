import React from 'react';
import SideConference from '../../PrimaryMenu/components/SideConference';

function Attending(props){
    const renderConferences = (conferences) => {
        return conferences.map(conference => 
            <SideConference 
                id={conference.id}
                title={conference.title.rendered}
                tagline={conference.acf.tagline}
                imgUrl={conference.acf.location_image ? conference.acf.location_image : conference._embedded["wp:featuredmedia"][0].source_url}
                city={conference.acf.city}
                date={conference.acf.date}
            />    
        )
    }

    return(
        <div>
            <p className="edit-title">Speaking At Conferences</p>
            {renderConferences(props.conferences)}
        </div>
    )
}

export default Attending;