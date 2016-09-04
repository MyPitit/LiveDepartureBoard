var React = require('react');
var ReactDOM = require('react-dom');
var Announcement = require('Announcement');
var Main = require('Main');
var TrainSchedule = require('TrainSchedule').configure();

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
    <div>
        <Announcement />
        <Main />
    </div>,
    document.getElementById('app')
);
