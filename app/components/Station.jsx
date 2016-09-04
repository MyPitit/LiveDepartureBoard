var React = require('react');
var StationTime = require('StationTime');
var StationTimeDelayed = require('StationTimeDelayed');
var StationName = require('StationName');
var StationPlatform = require('StationPlatform');
var StationOnTime = require('StationOnTime');

var Station = React.createClass({
    render: function () {
        // Props we get
        var callingPoint = this.props.callingpoint;
        var stationPosition = this.props.stationPosition;
        var stationLength = this.props.stationLength;
        var trainStation = this.props.trainStation;
        var trainState = this.props.trainState;

        // Check if train has passed or not and where it is
        var initialState = trainState;
        if ( "actual" in callingPoint && stationPosition == 0 ) {
            trainState = "passed";
            trainStation = "initial";
        } else if ( "actual" in callingPoint ) {
            trainState = "passed";
            trainStation = "middle";
        } else if ( stationPosition == (stationLength - 1) ) {
            trainState = "notpassed";
            trainStation = "last";
        } else {
            trainState = "notpassed";
            trainStation = "middle";
        }
        // Special case train is about to arrive
        // if ( initialState != trainState ) {
        //     trainState = "arriving";
        // }

        return (
            <div>
                <div className="row">
                    <div className="columns small-6 small-centered">
                        <div className="columns small-2">
                            <StationTime data={callingPoint} trainState={trainState} />
                        </div>
                        <div className="columns small-2">
                            &nbsp;
                        </div>
                        <div className="columns small-8">
                            <StationName data={callingPoint} trainState={trainState} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="columns small-6 small-centered">
                        <div className="columns small-2">
                            <StationTimeDelayed data={callingPoint} trainState={trainState} />
                        </div>
                        <div className="columns small-2">
                            &nbsp;
                        </div>
                        <div className="columns small-5">
                            <StationOnTime data={callingPoint} trainState={trainState} />
                        </div>
                        <div className="columns small-3">
                            <StationPlatform data={callingPoint} trainState={trainState} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Station;
