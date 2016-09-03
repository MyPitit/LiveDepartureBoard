var React = require('react');
var ReactDOM = require('react-dom');
var Announcement = require('Announcement');
var Main = require('Main');

var TrainSchedule = require('TrainSchedule').configure();


ReactDOM.render(
    <div>
        <Announcement />
        <Main />
    </div>,
    document.getElementById('app')
);
