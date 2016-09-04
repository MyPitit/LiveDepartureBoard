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
                    if ( "actual" in callingPoint && i == 0) {
                        var trainState = "passed";
                        var trainStation = "initial";
                    } else if ( "actual" in callingPoint ) {
                        var trainState = "passed";
                        var trainStation = "middle";
                    } else if ( i == (callingPoints.length - 1) ) {
                        var trainState = "notpassed";
                        var trainStation = "last";
                    } else {
                        var trainState = "notpassed";
                        var trainStation = "middle";
                    }
                    // Special case train is about to arrive
                    if ( i == (callingPoints.length - 1 ) ) {
                        var nextCallingPoint = i;
                    } else {
                        var nextCallingPoint = i + 1;
                    }
                    if ( callingPoints[nextCallingPoint].actual == undefined && trainState == "passed" ) {
                        var trainState = "justdeparted";
                    }
                    console.log("For station " + callingPoint.station + " we pass " + trainState + ":" + trainStation);
                    return <Station callingpoint={callingPoint} key={i} trainState={trainState} trainStation={trainStation} />;
                })}
            </div>
        );
    }
});

module.exports = Main;
