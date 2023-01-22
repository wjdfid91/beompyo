import React from "react";

function Brand(){
    return(
        <div>
            <div className="container">
                <div className='brand_img'>
                    <img src={process.env.PUBLIC_URL + "/images/brand_page.jpg"} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Brand;