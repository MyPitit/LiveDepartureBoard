var React = require('react');
var ReactDOM = require('react-dom');

var StationPlatform = React.createClass({
    render: function () {
        var mydata = this.props.data;
        var platform = mydata.platform;

        if ( platform === "" ) {
            return <p>Platform -</p>;
        } else {
            return <p>Platform {platform}</p>;
        }
    }
});

module.exports = StationPlatform;
