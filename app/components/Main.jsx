var React = require('react');
var ReactDOM = require('react-dom');
var StationTime = require('StationTime');
var Station = require('Station');
var StationPlatform = require('StationPlatform');
var StationOnTime = require('StationOnTime');

var TrainSchedule = require('TrainSchedule').configure();

var Main = React.createClass({

    buildJourney: function () {
        var TS = TrainSchedule.getState();
        //console.log(TS.callingPoints);

        var rows = [];
        var trainStation = "initial";
        var trainState = "notpassed";
        for ( var i = 0; i < TS.callingPoints.length ; i++ ) {
            // Check if train has passed or not and where it is
            var initialState = trainState;
            if ( "actual" in TS.callingPoints[i] && i == 0 ) {
                trainState = "passed";
                trainStation = "initial";
            } else if ( "actual" in TS.callingPoints[i] ) {
                trainState = "passed";
                trainStation = "middle";
            } else if ( i == (TS.callingPoints.length - 1) ) {
                trainState = "notpassed";
                trainStation = "last";
            } else {
                trainState = "notpassed";
                trainStation = "middle";
            }
            // Special case train is about to arrive
            if ( initialState != trainState ) {
                trainState = "arriving";
            }

            rows.push(<StationTime data={TS.callingPoints[i]} />);

            rows.push(<Station data={TS.callingPoints[i]} />);

            rows.push(<StationPlatform data={TS.callingPoints[i]} />);

            rows.push(<StationOnTime data={TS.callingPoints[i]} />);
        }
        return rows;
    },

    currentTime: function () {
        // This function will return the current time (fake time 15:40)
        return null;
    },

    render: function () {
        return (
            <div>
                {this.buildJourney()}
            </div>
        );
    }
});

module.exports = Main;
