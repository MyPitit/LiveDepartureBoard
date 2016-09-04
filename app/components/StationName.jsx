var React = require('react');

var StationName = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var stationName = mydata.station;
        return (
            <h6 className="text-left">{stationName}</h6>
        );
    }
});

module.exports = StationName;
