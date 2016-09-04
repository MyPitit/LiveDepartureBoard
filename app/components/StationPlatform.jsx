var React = require('react');

var StationPlatform = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var platform = mydata.platform;

        if ( platform === "" ) {
            return <div>Platform -</div>;
        } else {
            return <div>Platform {platform}</div>;
        }
    }
});

module.exports = StationPlatform;
