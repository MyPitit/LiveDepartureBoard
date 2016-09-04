var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var StationName = require('StationName');

describe('StationName', () => {
    var mockData = { "station": "Camden Town" };
    var mockTrainState = "passed";
    var mockTrainStateNotPassed = "notpassed";

    it('should exist', () => {
        expect(StationName).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<StationName data={mockData} trainState={mockTrainState} />);
        expect(result.props.data.station).toBe(mockData.station);
        expect(result.props.trainState).toBe(mockTrainState);
    });

    it('should render station name', () => {
        var result = TestUtils.renderIntoDocument(<StationName data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'h6');
        expect(outputText).toBeA("object");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBeA("string");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBe(mockData.station);
    });

    it('should call right className when train passed', () => {
        var result = TestUtils.renderIntoDocument(<StationName data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'h6');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("station-name-passed");
    });

    it('should call right className when train NOT passed', () => {
        var result = TestUtils.renderIntoDocument(<StationName data={mockData} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'h6');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("station-name-general");
    });

});
