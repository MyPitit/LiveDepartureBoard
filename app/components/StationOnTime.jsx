var React = require('react');
var ReactDOM = require('react-dom');

var StationOnTime = React.createClass({
    render: function () {
        var mydata = this.props.data;

        var scheduledTime = mydata.scheduled;

        if ( "actual" in mydata ) {
            var expectedTime = mydata.actual;
        } else {
            var expectedTime = mydata.expected;
        }

        if ( scheduledTime != expectedTime ) {
            var timeScheduled = new Date('01/01/1970 ' + scheduledTime);
            var timeExpected = new Date('01/01/1970 ' + expectedTime);

            var diff = timeExpected.getTime() - timeScheduled.getTime();

            return <p>{diff/60000} min late</p>;

        } else {
            return <p>On time</p>;
        }
    }
});

module.exports = StationOnTime;
