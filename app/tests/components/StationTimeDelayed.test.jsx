var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var StationTimeDelayed = require('StationTimeDelayed');

describe('StationTimeDelayed', () => {
    var mockData = { "scheduled": "14:00", "expected": "14:30", "actual": "14:32" };
    var mockTrainState = "passed";
    var mockTrainStateNotPassed = "notpassed";

    it('should exist', () => {
        expect(StationTimeDelayed).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<StationTimeDelayed data={mockData} trainState={mockTrainState} />);
        expect(result.props.data.expected).toBe(mockData.expected);
        expect(result.props.data.scheduled).toBe(mockData.scheduled);
        expect(result.props.data.actual).toBe(mockData.actual);
        expect(result.props.trainState).toBe(mockTrainState);
    });

    it('should call right className when train passed', () => {
        var result = TestUtils.renderIntoDocument(<StationTimeDelayed data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("delayed-time-passed");
    });

    it('should call right className when train NOT passed', () => {
        var result = TestUtils.renderIntoDocument(<StationTimeDelayed data={mockData} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("delayed-time-general");
    });

});
