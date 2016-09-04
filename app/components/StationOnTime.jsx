var React = require('react');

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

            return <div>{diff/60000} min late</div>;

        } else {
            return <div>On time</div>;
        }
    }
});

module.exports = StationOnTime;
