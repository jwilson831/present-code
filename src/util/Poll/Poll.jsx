import React, {useState,useEffect} from 'react';
import './styles.css';


function Poll(){
    const [closeModal,setCloseModal] = useState(false);
    const [visible,setVisible] = useState(false);
    
    useEffect(() => {
        if(sessionStorage.getItem('pollClosed') === 'true'){
            setCloseModal(true);
        }
    },[])
    
    setTimeout(() => {
        setVisible(true);
    }, 10500);

    const modalClickHandler = () => {
        setCloseModal(true);
        sessionStorage.setItem('pollClosed','true');
    }
    
    return(
        <div 
            style={visible ? {visibility:"visible"} : {visibility: "hidden"}} 
            className={closeModal ? "modal" : "reveal modal"} 
            id="exampleModalLong" tabindex="-1" role="dialog" 
            aria-labelledby="exampleModalLongTitle" 
            aria-hidden="true"
        >
            <div className="modal-dialog poll-dialog" role="document">
                <div className="modal-content">
                <div className="poll-header">
                    <div className="text-center w-100">
                        <div className="m-auto"><p className="poll-header-txt mb-1 p-1"><b>Skytop Perspectives</b></p></div>
                        {/* <div className="m-auto"><p className="poll-header-txt mb-1 p-1">Share Your Insights!</p></div> */}
                        <a href="https://www.goodwinlaw.com/"><div className="m-auto"><p className="poll-header-txt m-0 p-1">Sponsored By</p><img className="pollLogo" alt="" src="https://skytop-strategies.com/wp-content/uploads/2022/07/transparent-goodwin.png"/></div></a>
                    </div>
                    <button type="button" className="m-0 p-0 close" data-dismiss="modal" aria-label="Close">
                        <span onClick={() => modalClickHandler()} aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body poll-body text-center">
                    <iframe title="poll" id="totalpoll-iframe-2645" src="https://skytop-strategies.com/?post_type=poll&p=4428&embed=1" frameborder="0" allowtransparency="true" width="100%" height="400"></iframe>
                </div>
                <div className="modal-footer">
                    <button onClick={() => modalClickHandler()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Poll;


