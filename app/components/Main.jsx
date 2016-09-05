var React = require('react');

var TrainSchedule = require('TrainSchedule').configure();
var Announcement = require('Announcement');
var Station = require('Station');

var Main = React.createClass({
    render: function () {
        // Get from Redux
        var TS = TrainSchedule.getState();
        var journey = TS.journey;
        var callingPoints = TS.callingPoints;
        var stationLength = callingPoints.length;
        return (
            <div>
                <div className="announcement">
                    <Announcement journey={journey} />
                </div>
                {callingPoints.map(function(callingPoint, i){
                    if ( "actual" in callingPoint ) {
                        // Train has passed the station
                        var trainState = "passed";
                    } else {
                        // Train has not passed the station
                        var trainState = "notpassed";
                    }
                    if ( i == 0 ) {
                        // Initial train station
                        var trainStation = "initial";
                    } else if ( i == (callingPoints.length - 1) ) {
                        // Last train station
                        var trainStation = "last";
                    } else {
                        // Station somewhere in the middle
                        var trainStation = "middle";
                    }

                    // Special case train state changes state to keep track of train
                    if ( i == (callingPoints.length - 1 ) ) {
                        var nextCallingPoint = i;
                    } else {
                        var nextCallingPoint = i + 1;
                    }
                    if ( callingPoints[nextCallingPoint].actual == undefined && trainState == "passed" ) {
                        // Train is somewhere around here
                        var trainState = "train";
                    }
                    // console.log("For station " + callingPoint.station + " we pass " + trainState + ":" + trainStation);
                    return <Station callingpoint={callingPoint} key={i} trainState={trainState} trainStation={trainStation} />;
                })}
            </div>
        );
    }
});

module.exports = Main;
