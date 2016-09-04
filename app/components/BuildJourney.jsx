// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var TrainSchedule = require('TrainSchedule').configure();
//
// var BuildJourney = React.createClass({
//     render: function () {
//         var TS = TrainSchedule.getState();
//         console.log(TS.callingPoints);
//
//         var rows = [];
//         var trainStation = "initial";
//         var trainState = "notpassed";
//         for ( var i = 0; i < TS.callingPoints.length ; i++ ) {
//             // Check if train has passed or not and where it is
//             var initialState = trainState;
//             if ( "actual" in TS.callingPoints[i] && i == 0 ) {
//                 trainState = "passed";
//                 trainStation = "initial";
//             } else if ( "actual" in TS.callingPoints[i] ) {
//                 trainState = "passed";
//                 trainStation = "middle";
//             } else if ( i == (TS.callingPoints.length - 1) ) {
//                 trainState = "notpassed";
//                 trainStation = "last";
//             } else {
//                 trainState = "notpassed";
//                 trainStation = "middle";
//             }
//             // Special case train is about to arrive
//             if ( initialState != trainState ) {
//                 trainState = "arriving";
//             }
//
//             rows.push(<StationTime data={TS.callingPoints[i]} trainState={trainState} />);
//
//             rows.push(<Station data={TS.callingPoints[i]} trainState={trainState} />);
//
//             rows.push(<StationPlatform data={TS.callingPoints[i]} trainState={trainState} />);
//
//             rows.push(<StationOnTime data={TS.callingPoints[i]} trainState={trainState} />);
//         }
//         return rows;
//     }
// });
//
// module.exports = BuildJourney;
