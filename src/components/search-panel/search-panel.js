import './search-panel.css';
import {Component} from "react";


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField : ''
        };
    }

    onSearchType = (e) => {
        const search = e.target.value;
        this.setState({ searchField: search });
        this.props.onSearchUpdate(search);
    }

    render()  {
        return (
            <input type="text"
                   onChange = {this.onSearchType}
                   className="form-control search-input"
                   value= { this.state.searchField }
                   placeholder="Enter employee Name"
            />
        )
    }
}

export default SearchPanel;