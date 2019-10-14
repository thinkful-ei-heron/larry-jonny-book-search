import React, {Component} from 'react';

class Book extends Component {
    render() {
        return (
            <div onClick={()=> window.open(this.props.link)}>
                <div>
                    <img src={this.props.img}/>>
                </div>
                <div>
                    <h2>{this.props.title}</h2>
                    <div>Author: {this.props.authors}</div>
                    <div>Price: {this.props.price}</div>
                    <p>{this.props.description}</p>
                </div>
            </div>)
    }
}

export default Book;