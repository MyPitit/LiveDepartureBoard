var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var StationBetweenImage = require('StationBetweenImage');

describe('StationBetweenImage', () => {
    var mockTrainStation = "middle";
    var mockTrainStationLast = "last";
    var mockTrainStatePassed = "passed";
    var mockTrainStateNotPassed = "notpassed";

    it('should exist', () => {
        expect(StationBetweenImage).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<StationBetweenImage trainStation={mockTrainStation} trainState={mockTrainStatePassed} />);
        expect(result.props.trainStation).toBe(mockTrainStation);
        expect(result.props.trainState).toBe(mockTrainStatePassed);
    });

    it('should render StationBetweenImage transit-passed', () => {
        var result = TestUtils.renderIntoDocument(<StationBetweenImage trainStation={mockTrainStation} trainState={mockTrainStatePassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("transit-passed");
    });

    it('should render StationBetweenImage transit-notpassed', () => {
        var result = TestUtils.renderIntoDocument(<StationBetweenImage trainStation={mockTrainStation} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("transit-notpassed");
    });

    it('should render StationBetweenImage empty transit-last', () => {
        var result = TestUtils.renderIntoDocument(<StationBetweenImage trainStation={mockTrainStationLast} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toBe("");
    });


});
