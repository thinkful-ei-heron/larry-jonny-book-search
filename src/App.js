import React, {Component} from 'react';
import './App.css';
import Book from "./Book";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            books: [],
            search: 'henry',
        }
    }

    handleSubmit = () => {
        let tempBooks = [];

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}`).then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return res.json();
        }).then(data => data.items.forEach(book => {
            tempBooks.push({
                title: book.volumeInfo.title,
                img: (book.volumeInfo.imageLinks.thumbnail),
                description: book.volumeInfo.description,
                authors: book.volumeInfo.authors,
                price: (book.saleInfo.saleability === 'FOR_SALE') ? book.saleInfo.listPrice.amount : 'Not for Sale'
            });
        })).then(()=>this.setState({books: tempBooks}));

    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Google Book Search</h1>
                </header>
                {this.state.books.map(book => (<Book title={book.title} img={book.img} description={book.description} price={book.price} authors={book.authors} />))}
                <button onClick={this.handleSubmit}>Yeah baby</button>
            </div>
        );
    }
}

export default App;
