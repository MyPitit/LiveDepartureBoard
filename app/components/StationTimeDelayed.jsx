var React = require('react');

var StationTimeDelayed = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var trainState = this.props.trainState;

        if ( trainState == "notpassed" ) {
            var delayedTimeStyle = "text-right delayed-time-general";
        } else {
            var delayedTimeStyle = "text-right delayed-time-passed";
        }

        if ( "actual" in mydata ) {
            var expectedTime = mydata.actual;
        } else {
            var expectedTime = mydata.expected;
        }

        if ( mydata.scheduled != expectedTime ) {
            var delayedTime = <div>{expectedTime}</div>;
        } else {
            var delayedTime = <div>&nbsp;</div>;
        }
        return (
            <div className={delayedTimeStyle}>
                {delayedTime}
            </div>
        );
    }
});

module.exports = StationTimeDelayed;
