var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
    name: 'Andrew',
    location: 'Philadelphia'
};

var objTwo = {
    age: 25,
    ...objOne
};

ReactDOM.render(
    <h1>Boilerplate app!</h1>,
    document.getElementById('app')
);
