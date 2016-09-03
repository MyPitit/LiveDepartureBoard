var React = require('react');
var ReactDOM = require('react-dom');

var TrainSchedule = require('TrainSchedule').configure();

var Announcement = React.createClass({
    render: function () {
        var TS = TrainSchedule.getState();
        var scheduled = TS.journey.scheduled;
        var origin = TS.journey.origin;
        var destination = TS.journey.destination;

        return (
            <div>
                <h1>
                    {scheduled} {origin} to {destination}
                </h1>
            </div>
        );
    }
});

module.exports = Announcement;
