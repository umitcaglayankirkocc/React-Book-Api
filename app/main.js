require("./Assets/style.scss")

var React = require('react');

var App = require('./App.js');


export const bookList = [
    {
        "id": "1",
        "title": "Eloquent JavaScript, Second Edition",
        "author": "Marijn Haverbeke",
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "website": "http://eloquentjavascript.net/2nd_edition/img/cover.png"
    },
    {
        "id": "2",
        "title": "Learning JavaScript Design Patterns",
        "author": "Addy Osmani",
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        "website": "https://images-na.ssl-images-amazon.com/images/I/51jEMnP6UGL._SX385_BO1,204,203,200_.jpg"
    },
    {
        "id": "3",
        "title": "Speaking JavaScript - Like it or not",
        "author": "Axel Rauschmayer",
        "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "website": "http://speakingjs.com/es5/orm_front_cover.jpg"
    },
    {
        "id": "4",
        "title": "Programming JavaScript Applications",
        "author": "Eric Elliott",
        "description": "Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows.",
        "website": "https://covers.oreillystatic.com/images/0636920033141/lrg.jpg"
    },
    {
        "id": "5",
        "title": "Understanding ECMAScript 6",
        "author": "Nicholas C. Zakas",
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
        "website": "https://images-na.ssl-images-amazon.com/images/I/817f4ZWXjhL.jpg"
    },
    {
        "id": "6",
        "title": "You Don't Know JS - No matter",
        "author": "Kyle Simpson",
        "description": "No matter how much experience you have with JavaScript, odds are",
        "website": "https://covers.oreillystatic.com/images/0636920039303/lrg.jpg"
    },
    {
        "id": "7",
        "title": "Git Pocket Guide - pocket guide",
        "author": "Richard E. Silverman",
        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.",
        "website": "https://covers.oreillystatic.com/images/0636920024972/lrg.jpg"
    }
]

if(JSON.parse(localStorage.getItem('bookList')) === null || JSON.parse(localStorage.getItem('bookList')) === undefined)
{
    localStorage.setItem('bookList', JSON.stringify(bookList));
}



React.render(<App/>, document.getElementById('body'))
