var React = require('react');

var TrainSchedule = require('TrainSchedule').configure();
var Announcement = require('Announcement');
var Station = require('Station');

var Main = React.createClass({
    render: function () {
        var TS = TrainSchedule.getState();
        var journey = TS.journey;
        var callingPoints = TS.callingPoints;
        var trainStation = "initial";
        var trainState = "notpassed";
        var stationLength = callingPoints.length;
        return (
            <div>
                <div className="announcement">
                    <Announcement journey={journey} />
                </div>
                {callingPoints.map(function(callingPoint, i, trainStation, trainState, stationLength){
                    return <Station callingpoint={callingPoint} key={i} trainStation={trainStation} trainState={trainState} stationPosition={i} stationLength={stationLength} />;
                })}
            </div>
        );
    }
});

module.exports = Main;
