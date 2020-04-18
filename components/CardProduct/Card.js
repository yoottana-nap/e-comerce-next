import React from 'react';

const Card = (props) => {
    return (
        <React.Fragment>

            <style jsx>{`
            .card-container{
                width: 100%;
                margin-bottom: 25px;
            }
            .image-card{
                background-image: url('https://www.navycapthai.com/wp-content/uploads/2016/11/%E0%B8%81%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%81%E0%B8%87%E0%B8%A7%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%B2%E0%B8%A7%E0%B8%B5.jpg');
                background-size:cover;
                background-repeat:no-repeat;
                width:100%;
                padding:55.25% 0px;
            }
        `}
            </style>

            <div className="card-container">
                <div className="image-card">
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card;