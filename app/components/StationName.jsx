var React = require('react');

var StationName = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var stationName = mydata.station;
        var trainState = this.props.trainState;

        if ( trainState == "notpassed" ) {
            var stationStyle = "text-left station-name-general";
        } else {
            var stationStyle = "text-left station-name-passed";
        }

        return (
            <h6 className={stationStyle}>{stationName}</h6>
        );
    }
});

module.exports = StationName;
