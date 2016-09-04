var React = require('react');
var StationTime = require('StationTime');
var StationTimeDelayed = require('StationTimeDelayed');
var StationName = require('StationName');
var StationPlatform = require('StationPlatform');
var StationOnTime = require('StationOnTime');
var StationImage = require('StationImage');
var StationBetweenImage = require('StationBetweenImage');

var Station = React.createClass({
    render: function () {
        // Props we get
        var callingPoint = this.props.callingpoint;
        var trainStation = this.props.trainStation;
        var trainState = this.props.trainState;

        return (
            <div>
                <div className="row">
                    <div className="columns small-6 small-centered">
                        <div className="columns small-2">
                            <StationTime data={callingPoint} trainState={trainState} />
                        </div>
                        <div className="columns small-2">
                            <StationImage trainStation={trainStation} trainState={trainState} />
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
                            <StationBetweenImage trainStation={trainStation} trainState={trainState} />
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
