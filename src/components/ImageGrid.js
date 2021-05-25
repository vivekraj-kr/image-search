import React from "react";
import ImageCard from "./ImageCard"

const ImageGrid = ({images}) => {
    return (
        <div className="grid-container">
            {images.map((image) => {
                return <ImageCard key={image.id} image={image}/>
            })}
        </div>
    )
}

export default ImageGrid;