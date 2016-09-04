var React = require('react');

var StationTime = React.createClass({
    render: function () {
        var mydata = this.props.data;

        var scheduledTime = <div>{mydata.scheduled}</div>;
        return (
            <div>
                {scheduledTime}
            </div>
        );
    }
});

module.exports = StationTime;
