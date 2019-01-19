import React from 'react';
import { Link } from 'react-router-dom'
import './Subpage.scss';

const Subpage = (props) => {
    return(
        <div>
            <div className="subpage-wrapper">
                <div className="subpage-image-wrapper">
                    <img className="subpage-image" src={props.imgPath} alt=""/>
                </div>
                <div className="subpage-text-wrapper">
                    <span className="subpage-text"><Link to={props.link}>{props.title}</Link></span>
                    <Link to="/scales"></Link>
                </div>
            </div>
        </div>
    );
}

export default Subpage;