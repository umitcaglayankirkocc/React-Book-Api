import React, { Component } from "react";

//import BookData from '../data/BookData'

function BookSearching (content){
    return function(x){
        return x.title.toLowerCase().includes(content.toLowerCase()) ;
    }

}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //bookList : bookList,
            content: "",
        };
        this.BookSearch = this.BookSearch.bind(this);
    }

    BookSearch(e) {
        this.setState({ content: e.target.value });
    }

    render() {
        const { content } = this.state;
        const bookList  = this.props.bookList;
        return (
            <div className="row">
                <div className="col-md-12 custom-search-block">
                    <form className="search-form">
                        <input type="text" onChange={this.BookSearch} value={content} className="search-input" placeholder={"Kitap Adı Yazınız."}/>

                    </form>
                </div>
                {
                    bookList.filter(BookSearching(content)).map(bookList =>
                        <div className="col-md-3">
                            <div className="card" key={bookList.id}>
                                <img className="card-img-top" src={bookList.website} alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">{bookList.title}</h4>
                                    <h6 className="card-title">{bookList.author}</h6>
                                    <a href="#" className="btn btn-primary disabled">Detay</a>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Search;
