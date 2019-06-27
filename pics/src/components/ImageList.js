import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

export default (props) => {

    console.log(props.images);

    const photos = props.images.map(image => {
        return <ImageCard image={image} key={image.id} />
    });

    return (
        <div className="image-list">
            {photos}
        </div>
    );
}
