var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var StationOnTime = require('StationOnTime');

describe('StationOnTime', () => {
    var mockData = { "scheduled": "14:00", "expected": "14:30" };
    var mockDataOnTime = { "scheduled": "15:00", "expected": "15:00" };
    var mockDataActual = { "scheduled": "14:00", "expected": "14:30", "actual": "14:32" };
    var mockTrainState = "passed";
    var mockTrainStateNotPassed = "notpassed";

    it('should exist', () => {
        expect(StationOnTime).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<StationOnTime data={mockData} trainState={mockTrainState} />);
        expect(result.props.data.scheduled).toBe(mockData.scheduled);
        expect(result.props.data.expected).toBe(mockData.expected);
        expect(result.props.trainState).toBe(mockTrainState);
    });

    it('should render station delayed', () => {
        var result = TestUtils.renderIntoDocument(<StationOnTime data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBeA("string");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBe("30 min late");
    });

    it('should render station on time', () => {
        var result = TestUtils.renderIntoDocument(<StationOnTime data={mockDataOnTime} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBeA("string");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBe("On time");
    });

    it('should call right className when train passed', () => {
        var result = TestUtils.renderIntoDocument(<StationOnTime data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("delayed-time-passed");
    });

    it('should call right className when train NOT passed', () => {
        var result = TestUtils.renderIntoDocument(<StationOnTime data={mockData} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("delayed-time-general");
    });

});
