import React from "react";
import SearchBar from "./SearchBar";
import ImageGrid from "./ImageGrid";
import "./App.css";
import apiClient from "../apiClient";

class App extends React.Component {

    state = {
        images: []
    }

    onSearchSubmit = (term) => {  
        apiClient("/search/photos", { query: term })
        .then(data => {
            this.setState({
                images: data.results
            })
        });
    }

    render() {
        return (
            <div className="ui container mt-15">
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageGrid images={this.state.images} />
            </div>
        )
    }
}

export default App;