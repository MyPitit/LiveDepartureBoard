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
        var trainStation = "initial";
        if ( "actual" in callingPoints[0] ) {
            var trainState = "passed";
        } else {
            var trainState = "notpassed";
        }
        return (
            <div>
                <div className="announcement">
                    <Announcement journey={journey} />
                </div>
                {callingPoints.map(function(callingPoint, i){
                    if ( trainState == "arriving" ) {
                        var initialState = "notpassed";
                    } else {
                        var initialState = trainState;
                    }
                    if ( "actual" in callingPoint && i == 0) {
                        trainState = "passed";
                        trainStation = "initial";
                    } else if ( "actual" in callingPoint ) {
                        trainState = "passed";
                        trainStation = "middle";
                    } else if ( i == (callingPoints.length - 1) ) {
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
                    // console.log("For station " + callingPoint.station + " we pass " + trainState + ":" + trainStation);
                    return <Station callingpoint={callingPoint} key={i} trainState={trainState} trainStation={trainStation} />;
                })}
            </div>
        );
    }
});

module.exports = Main;
