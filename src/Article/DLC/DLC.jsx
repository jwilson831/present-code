import axios from 'axios';
import React, {useState} from 'react';
import DLCForm from './DLCForm';
import './styles.css';

function DLC(props){
    const [token,setToken] = useState(null);

    const generateToken = async () => {
        const {data: {token}} = await axios.post(`https://skytop-strategies.com/wp-json/jwt-auth/v1/token?username=${process.env.REACT_APP_WP_USERNAME}&password=${process.env.REACT_APP_WP_PASSWORD}`)
        setToken(token);
    }
    return (
        <div className="dlc-box poll-container mt-5 text-center">
            <p className="section-title mb-0">{props.title}</p>
            {props.title2 ? (<p style={{paddingBottom:"0px"}}className="section-title mb-0">{props.title2}</p>) : ""}
            {props.title3 ? (<p style={{fontWeight:"500"}} className="section-title mb-0">{props.title3}</p>) : ""}
            <img className="dlc-img mt-3"src={props.image} alt="dlc"></img>
            {props.registration ? 
                <button onClick={() => generateToken()} className="btn btn-primary comment-btn mt-4" data-toggle="modal" data-target="#dlcModal">Download <i className="fas fa-download"></i></button>
                :
                <a href={props.file} download>
                    <button className="btn btn-primary comment-btn mt-4">Download <i className="fas fa-download"></i></button>
                </a>
            }
            <DLCForm
                file={props.file}
                token={token}
                title={props.title}
            />
        </div>
    )
}

export default DLC;