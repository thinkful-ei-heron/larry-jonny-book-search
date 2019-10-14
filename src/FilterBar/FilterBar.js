import React, {Component} from 'react';
import './FilterBar.css'

class FilterBar extends Component {
    render() {
        return (
            <div class="FilterBar">
                Print Type: <select name="printType" onChange={this.props.handlePrintType}>
                    <option value="all" selected>all</option>
                    <option value="books">books</option>
                    <option value="magazines">magazines</option>
                </select>
                Book Type:
                <select name="filtering" onChange={this.props.handleBookType}>
                    <option value="No Filter" selected>No Filter</option>
                    <option value="partial">partial</option>
                    <option value="full">full</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="ebooks">ebooks</option>
                </select>

            </div>
        );
    }
}

export default FilterBar;
