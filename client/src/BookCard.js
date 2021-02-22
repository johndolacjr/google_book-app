import React from 'react';


const BookCard = (props) => {
    const { volumeInfo } = props.info;
    const { title, authors, description, link } = props.info.volumeInfo;
    const card = volumeInfo.hasOwnProperty('imageLinks') === false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const bookDescription = volumeInfo.hasOwnProperty('description') === false ? volumeInfo['description'] = "0000" : volumeInfo.description;

    return (

        <div className="card-container">
            <img src={card} alt="" />
            <div className="desc">
                <h2>{title}</h2>
                <h3>Author: {authors}</h3>
                <p>Description: {description}</p>
                <p>Link: {link}</p>
                <p>Published: {bookDescription === "0000" ? "Not available" : bookDescription.substring(0, 4)}</p>
            </div>
        </div>


    );
}

export default BookCard;