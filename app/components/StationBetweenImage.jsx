var React = require('react');

var StationBetweenImage = React.createClass({
    render: function () {
        var trainStation = this.props.trainStation;
        var trainState = this.props.trainState;
        if ( trainStation != "last" ) {
            var imageName = "images/transit-" + trainState + ".png";
            console.log(imageName);

            return (
                <img src={imageName}></img>
            );
        } else {
            return <img></img>;
        }
    }
});

module.exports = StationBetweenImage;
