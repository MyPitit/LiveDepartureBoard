var React = require('react');

var StationPlatform = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var platform = mydata.platform;
        var trainState = this.props.trainState;

        if ( trainState == "notpassed" || trainState == "arriving" ) {
            var stationPlatform = "text-left platform-general";
        } else {
            var stationPlatform = "text-left platform-passed";
        }

        if ( platform === "" ) {
            return <div className={stationPlatform}>Platform -</div>;
        } else {
            return <div className={stationPlatform}>Platform <strong>{platform}</strong></div>;
        }
    }
});

module.exports = StationPlatform;
