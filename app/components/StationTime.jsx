var React = require('react');

var StationTime = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var trainState = this.props.trainState;

        if ( trainState == "notpassed" ) {
            var timeStyle = "text-right time-general";
        } else {
            var timeStyle = "text-right time-passed";
        }

        var scheduledTime = mydata.scheduled;
        return (
            <div className={timeStyle}>
                {scheduledTime}
            </div>
        );
    }
});

module.exports = StationTime;
