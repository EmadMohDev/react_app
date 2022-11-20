import React from "react";
import SocialItem from "./SocialItem";
import './social.css'


function Social() {
    return (

        <ul className="form-check">

            <SocialItem info={
                {
                    media: "Facebook",
                    id: "facebook",
                    img: "people/1.jpg"

                }
            }
            />

            <SocialItem
                info={
                    {
                        media: "Youtube",
                        id: "youtube",
                        img: "people/2.jpg"

                    }
                }
            />

            <SocialItem
                info={
                    {
                        media: "Instagram",
                        id: "instagram",
                        img: "people/3.jpg"

                    }
                }
            />

        </ul>


    );
}

export default Social;


