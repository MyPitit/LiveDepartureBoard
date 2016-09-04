var React = require('react');

var StationOnTime = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var scheduledTime = mydata.scheduled;
        var trainState = this.props.trainState;

        if ( trainState == "notpassed" || trainState == "arriving" ) {
            var stationOnTimeStyle = "text-left delayed-time-general";
        } else {
            var stationOnTimeStyle = "text-left delayed-time-passed";
        }

        if ( "actual" in mydata ) {
            var expectedTime = mydata.actual;
        } else {
            var expectedTime = mydata.expected;
        }

        if ( scheduledTime != expectedTime ) {
            var timeScheduled = new Date('01/01/1970 ' + scheduledTime);
            var timeExpected = new Date('01/01/1970 ' + expectedTime);

            var diff = timeExpected.getTime() - timeScheduled.getTime();

            return <div className={stationOnTimeStyle}>{diff/60000} min late</div>;

        } else {
            return <div className={stationOnTimeStyle}>On time</div>;
        }
    }
});

module.exports = StationOnTime;
