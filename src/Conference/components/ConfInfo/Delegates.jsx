import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PageLoader from '../../../util/Loader/Loader';

function Delegates(props){
    const [delegates,setDelegates] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if(props.delegates){
            const ids = props.delegates.toString();
            // console.log(props.delegates)
            const fetch = async () => {
                try{
                    const people1= await axios(`https://skytop-strategies.com/wp-json/wp/v2/people?include=${ids}&per_page=100`);
                    const people2 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people2?include=${ids}&per_page=100`);
                    const people3 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people3?include=${ids}&per_page=100`);
                    const people4 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people4?include=${ids}&per_page=100`);
                    const people5 = await axios(`https://skytop-strategies.com/wp-json/wp/v2/people5?include=${ids}&per_page=100`);
                    const allData = people1.data.concat(people2.data).concat(people3.data).concat(people4.data).concat(people5.data)
                    // console.log(allData)
                    setDelegates(allData);
                    setLoaded(true);
                }catch(err){
                    console.error(err);
                }
            }
            fetch()
        }
    },[props.delegates])

    // console.log(delegates)

    const renderDelegates = (delegates) => {
        return delegates.map(del => 
            <div className="delegate">
                <h5><u>{del.acf.name}</u></h5>
                <p>{del.acf.job_title}</p>
                <p>{del.acf.company}</p>
                <p>{del.acf.location}</p>
            </div>
        )
    }
    return(
        <div>
            <div className="delegates mt-1 mb-2">
                {loaded ? renderDelegates(delegates) : <PageLoader/>}
            </div>
        </div>
    )
}

export default Delegates;