import React from "react";

class SearchBar extends React.Component {
    state = {
        term: ""
    }

    setTerm = (event) => {
        event.preventDefault();
        this.setState({
            term:  event.target.value
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="ui fluid action input">
                    <input type="text" value={this.state.term} placeholder="Search..." onChange={this.setTerm}/>
                    <button className="ui primary button">Search</button>
                </div>
            </form>
        )
    }
}

export default SearchBar;