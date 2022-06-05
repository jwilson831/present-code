import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './styles.css'
import PageLoader from '../../../util/Loader/Loader';

function Speakers(props){
    const [speakers,setSpeakers] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(props.speakers) {
            const ids = props.speakers.toString();
            // console.log(props.speakers)
            const fetch = async () => {
                try{
                    const people1= await axios(`https://skytop-strategies.com/wp-json/wp/v2/people?include=${ids}&per_page=100`);
                    const people2 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people2?include=${ids}&per_page=100`);
                    const people3 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people3?include=${ids}&per_page=100`);
                    const people4 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people4?include=${ids}&per_page=100`);
                    const people5 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people5?include=${ids}&per_page=100`);
                    const allData = people1.data.concat(people2.data).concat(people3.data).concat(people4.data).concat(people5.data)
                    // console.log(allData)
                    setSpeakers(allData);
                    setLoaded(true);
                }catch(err){
                    console.error(err);
                }
            }
            fetch()
        }
    },[props.speakers])

        // console.log(speakers)

    const renderSpeakers = (speakers) => {
        return speakers.map(speaker => 
            <div className="speaker">
                <img alt="speaker" className="speaker-img" src={speaker.acf.image}></img>
                <h5><u>{speaker.acf.name}</u></h5>
                <p>{speaker.acf.job_title}</p>
                <p>{speaker.acf.company}</p>
                <p>{speaker.acf.location}</p>
            </div>
        )
    }
    return(
        <div>
            <div className="speakers mt-5 mb-5">
                {loaded ? renderSpeakers(speakers) : <PageLoader/>}
            </div>
        </div>
    )
}

export default Speakers;