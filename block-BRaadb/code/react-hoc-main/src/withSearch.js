import React  from 'react'

let HOC = (Component, data) => {
    return class withSearch extends React.Component {
        state = {
            searchTerm: ""
          };
          handleChange = ({ target: { value } }) => {
            this.setState({ searchTerm: value });
          };
        render() {
            return (
                <div>
                    <input
                    placeholder="Search"
                    className="search"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    />
                    <Component searchTerm = {this.state.searchTerm} handleChange = {this.handleChange} />
                </div>
            )
        }
    }
}

export default HOC;
