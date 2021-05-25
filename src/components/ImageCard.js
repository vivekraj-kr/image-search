import React from "react";


class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = {
            spans: 0
        }
    }

    componentDidMount() {
        this.imageRef.current.addEventListener("load", () => {
            let spans = Math.ceil(this.imageRef.current.clientHeight/10) + 1;
            this.setState({
                spans
            })
        })
    }

    render() {
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}} className="grid-item">
                <img ref={this.imageRef} src={this.props.image.urls.regular} alt={this.props.image.description}/>
            </div>
        )
    }
}

export default ImageCard;