import React, {useEffect,useState} from 'react';
import './styles.css';
import Feature from '../Section/PageComponents/Feature/Feature';
import Recents from '../Section/PageComponents/Recents/Recents';
import SubFeatures from '../Section/PageComponents/SubFeatures/SubFeatures';
import ViewAllBtn from '../ViewAll/ViewAllBtn';
import Advert from '../util/Advert/Advert';
import AdvertMain from '../util/Advert/AdvertMain';
import Calendar from '../util/Calendar/Calendar';
import { sendGAPageView } from '../util/GoogleAnalytics';
import RecentArticle from '../Section/PageComponents/Recents/RecentArticle';
import RecentSurvey from '../Survey/RecentSurvey';
import ProgramLogos from '../util/ProgramLogos/ProgramLogos';
function Home (props){
    const survey = props.survey

    // const [survey,setSurvey] = useState(null);
    // useEffect(() => {
    //     sendGAPageView("/headlines");
    //     const findSurvey = (articles) => {
    //         setSurvey(articles.find(art => art.acf.isSurvey === true));
    //     }
    //     findSurvey(props.articles);
    // },[props.articles])
    
    return(
        <>
            <div className="home-grid">
                <div className="feature">
                    <Feature title={props.title} video={props.video} />
                </div>
                <div className="subfeature"><SubFeatures articles={props.articles} ids={[3422,3430,3448]} comments={props.comments}/></div>
                <div className="recent">
                    <Recents changeActiveCategory={props.changeActiveCategory} articles={props.articles} ids={[3567,3568,3570,3572,3573,3575,3576,3577,3578]} comments={props.comments}/>
                    <ViewAllBtn linkTo={"article"}/>
                </div>
            </div>
            <Advert image={props.ad} link={props.ad_link}/>
            <div className="mt-4">
                <Advert image={"https://utcoleca.sirv.com/SKYTOP/skytop_ads/image.png"} link={"https://esg.moodys.io/"}/>
            </div>
            <hr/>

            {survey &&
                <div className="mt-5 mb-5">
                    <RecentSurvey
                        id={survey.id}
                        image={survey.acf.image}
                        category={survey.acf.category}
                        title={survey.title.rendered}
                        custom_byline={survey.acf.custom_byline}
                        author={survey.acf.author}
                        date={survey.acf.date}
                        comments={props.comments}
                        excerpt={survey.acf.excerpt}
                    />
                </div> 
            }

        </>
    )
}

export default Home;