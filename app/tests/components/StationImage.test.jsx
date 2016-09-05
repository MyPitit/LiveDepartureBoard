var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var StationImage = require('StationImage');

describe('StationImage', () => {
    var mockTrainStationInitial = "initial";
    var mockTrainStationMiddle = "middle";
    var mockTrainStationLast = "last";
    var mockTrainStatePassed = "passed";
    var mockTrainStateNotPassed = "notpassed";

    it('should exist', () => {
        expect(StationImage).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<StationImage trainStation={mockTrainStationInitial} trainState={mockTrainStatePassed} />);
        expect(result.props.trainStation).toBe(mockTrainStationInitial);
        expect(result.props.trainState).toBe(mockTrainStatePassed);
    });

    it('should render StationImage initial-passed', () => {
        var result = TestUtils.renderIntoDocument(<StationImage trainStation={mockTrainStationInitial} trainState={mockTrainStatePassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("initial-passed");
    });

    it('should render StationImage initial-notpassed', () => {
        var result = TestUtils.renderIntoDocument(<StationImage trainStation={mockTrainStationInitial} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("initial-notpassed");
    });

    it('should render StationImage middle-passed', () => {
        var result = TestUtils.renderIntoDocument(<StationImage trainStation={mockTrainStationMiddle} trainState={mockTrainStatePassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("middle-passed");
    });

    it('should render StationImage middle-notpassed', () => {
        var result = TestUtils.renderIntoDocument(<StationImage trainStation={mockTrainStationMiddle} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("middle-notpassed");
    });

    it('should render StationImage last-passed', () => {
        var result = TestUtils.renderIntoDocument(<StationImage trainStation={mockTrainStationLast} trainState={mockTrainStatePassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("last-passed");
    });

    it('should render StationImage last-notpassed', () => {
        var result = TestUtils.renderIntoDocument(<StationImage trainStation={mockTrainStationLast} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'img');
        expect(outputText).toBeA("object");
        expect(outputText.src).toInclude("last-notpassed");
    });



});
