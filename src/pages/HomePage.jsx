import React from 'react';
import Img from "../assets/star.svg";

const HomePage = (props) => {
    return ( 
        <div id="body">
            <div id="stars1"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>

            <div className="title-wrapper">
                <h1>Faites décoller votre business !</h1>
            </div>

            <div className="starship-container">
                <img src={Img} className="starship" id="starship" alt=""/>
            </div>
        </div>
     );
}
 
export default HomePage;