import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import SideContainer from '../../PrimaryMenu/components/SideContainer';
import PageLoader from '../../util/Loader/Loader';
import NewsFeed from '../../util/News/NewsFeed';
import Attending from './Attending';
import './styles.css';


function AuthorMenu(props){
    const [conferences, setConferences] = useState("");
    const [loaded,setLoaded] = useState(false);
    const {id} = useParams();

    useEffect(()=> {
        const filterByAuthor = (conferences) => {
            return conferences.filter(conf => 
                conf.acf.speakers && conf.acf.speakers.includes(parseInt(id))
            )
        }
        setConferences(filterByAuthor(props.conferences));
        setLoaded(true);
    },[id,props.conferences])
    return(
        <div className="pl-3 text-left">
            {loaded ? 
            <>
                {id && conferences.length > 0 ? <Attending conferences={conferences}/> : <SideContainer conferences={props.conferences}/>}
                <NewsFeed/>
            </>
            
            : <PageLoader/>}
        </div>

    )
}

export default AuthorMenu;