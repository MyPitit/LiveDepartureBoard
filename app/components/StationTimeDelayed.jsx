var React = require('react');

var StationTimeDelayed = React.createClass({
    render: function () {
        var mydata = this.props.data;

        if ( "actual" in mydata ) {
            var expectedTime = mydata.actual;
        } else {
            var expectedTime = mydata.expected;
        }

        if ( mydata.scheduled != expectedTime ) {
            var delayedTime = <div>{expectedTime}</div>;
        } else {
            var delayedTime = null;
        }
        return (
            <div>
                <h5>{delayedTime}</h5>
            </div>
        );
    }
});

module.exports = StationTimeDelayed;
