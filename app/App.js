import CreateBook from "./Components/createBook";

var React = require ('react');
import Search from './Components/search';

//import CreateBook from './Components/createBook';





let bookList = JSON.parse(localStorage.getItem('bookList'));



console.log(bookList);

module.exports = React.createClass({
  displayName: 'App',


  render: function () {
    return (
        <div className="container-fluid">
                <div className="search-block">
               
                  <Search bookList={bookList} />
                  <CreateBook bookList = {bookList} />
                </div>
            </div>
            )
  }

});


