var React = require('react');
var ReactDOM = require('react-dom');

var Station = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var stationName = mydata.station;
        return (
            <h1>{stationName}</h1>
        );
    }
});

module.exports = Station;
