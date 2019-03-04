import React, { Component } from "react";
//import { BookModel } from '../models/bookModel';

class CreateBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookList: this.props.bookList,
            title: "",
            author: "",
            description: "",
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleWebSiteChange = this.handleWebSiteChange.bind(this);
        this.createBook = this.createBook.bind(this);
    }

    handleTitleChange(e) {
        this.setState({
            title: e.target.value
        });
    }
    handleAuthorChange(e) {
        this.setState({
            author: e.target.value
        });
    }
    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }
    handleWebSiteChange(e) {
        this.setState({
            website: e.target.value
        });
    }
    createBook() {
        console.log("aaaa");

        console.log(this.state);
        let bookModel = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            website: this.state.website
        };

        console.log(bookModel);
        console.log(this.state);
        console.log(this.props);

        this.props.bookList.push(bookModel);

        localStorage.setItem("bookList", JSON.stringify(this.props.bookList));
    }

    render() {
        return (
            <div>
                <h1>Create Book</h1>
                <form>
                    <hr />

                    <input
                        type="text"
                        id="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        placeholder={"Kitap Adı Giriniz."}
                    />
                    <input
                        type="text"
                        id="author"
                        type="text"
                        value={this.state.author}
                        onChange={this.handleAuthorChange}
                        placeholder={"Yazar Adı Giriniz."}
                    />
                    <input
                        type="text"
                        id="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        placeholder={"Kitap Özeti Giriniz."}
                    />
                    <input
                        type="text"
                        id="website"
                        type="text"
                        value={this.state.website}
                        onChange={this.handleWebSiteChange}
                        placeholder={"Kitap Resim URL giriniz."}
                    />
                    <button type="submit" onClick={this.createBook}>
                        Gönder
                    </button>
                </form>
            </div>
        );
    }
}

export default CreateBook;
