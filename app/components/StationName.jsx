var React = require('react');

var StationName = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var stationName = mydata.station;
        return (
            <h1>{stationName}</h1>
        );
    }
});

module.exports = StationName;
