var React = require('react');

var StationImage = React.createClass({
    render: function () {
        var trainStation = this.props.trainStation;
        var trainState = this.props.trainState;
        if ( trainState == "train" ) {
            // With current json we don't know if the train is in the station or not
            var myTrainState = "passed";
        } else {
            var myTrainState = trainState;
        }
        var imageName = "images/" + trainStation + "-" + myTrainState + ".png";
        console.log(imageName);
        return (
            <img src={imageName}></img>
        );
    }
});

module.exports = StationImage;
