import React from "react";

function SocialItem(props) {
    return (
        <div>
            
             <li className="list-group-item mb-5">
             <img src={props.info.img}  alt={`icon of ${props.info.media}`} style={{width: '60px',height: '60px'}}   />
            <input  type="checkbox" id={props.info.id} />
            <label  htmlFor={props.info.id} >{props.info.media}</label>
        </li>
        </div>

    )
}


export default SocialItem 