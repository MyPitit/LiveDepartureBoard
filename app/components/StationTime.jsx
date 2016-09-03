var React = require('react');
var ReactDOM = require('react-dom');

var StationTime = React.createClass({
    render: function () {
        var mydata = this.props.data;

        var scheduledTime = <div>{mydata.scheduled}</div>;
        if (mydata.scheduled != mydata.expected) {
            var expectedTime = <div>{mydata.expected}</div>;
        } else {
            var expectedTime = null;
        }
        return (
            <div>
                <h3>{scheduledTime}</h3>
                <h5>{expectedTime}</h5>
            </div>
        );
    }
});

module.exports = StationTime;
