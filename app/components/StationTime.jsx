var React = require('react');
var ReactDOM = require('react-dom');

var StationTime = React.createClass({
    render: function () {
        var mydata = this.props.data;

        if ( "actual" in mydata ) {
            var expectedTime = mydata.actual;
        } else {
            var expectedTime = mydata.expected;
        }

        var scheduledTime = <div>{mydata.scheduled}</div>;
        if ( mydata.scheduled != expectedTime ) {
            var delayedTime = <div>{expectedTime}</div>;
        } else {
            var delayedTime = null;
        }
        return (
            <div>
                <h3>{scheduledTime}</h3>
                <h5>{delayedTime}</h5>
            </div>
        );
    }
});

module.exports = StationTime;
