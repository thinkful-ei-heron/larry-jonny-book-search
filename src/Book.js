import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.img}/>>
                </div>
                <div>
                    <h2>{this.props.title}</h2>
                    <div>Author: {this.props.author}</div>
                    <div>Price: {this.props.amount}</div>
                    <p>{this.props.description}</p>
                </div>
            </div>)
    }
}

export default Book;