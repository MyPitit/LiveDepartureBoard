var React = require('react');

var StationTime = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var trainState = this.props.trainState;

        if ( trainState == "notpassed" || trainState == "arriving" ) {
            var timeStyle = "text-right time-general";
        } else {
            var timeStyle = "text-right time-passed";
        }

        var scheduledTime = <div>{mydata.scheduled}</div>;
        return (
            <div className={timeStyle}>
                {scheduledTime}
            </div>
        );
    }
});

module.exports = StationTime;
