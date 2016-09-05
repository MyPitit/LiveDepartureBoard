var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var StationTime = require('StationTime');

describe('StationTime', () => {
    var mockData = { "scheduled": "14:00" };
    var mockTrainState = "passed";
    var mockTrainStateNotPassed = "notpassed";

    it('should exist', () => {
        expect(StationTime).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<StationTime data={mockData} trainState={mockTrainState} />);
        expect(result.props.data.scheduled).toBe(mockData.scheduled);
        expect(result.props.trainState).toBe(mockTrainState);
    });

    it('should call right className when train passed', () => {
        var result = TestUtils.renderIntoDocument(<StationTime data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("time-passed");
    });

    it('should call right className when train NOT passed', () => {
        var result = TestUtils.renderIntoDocument(<StationTime data={mockData} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("time-general");
    });

});
