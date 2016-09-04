var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var StationPlatform = require('StationPlatform');

describe('StationPlatform', () => {
    var mockData = { "platform": "1" };
    var mockNoPlatformData = { "platform": "" };
    var mockTrainState = "passed";
    var mockTrainStateNotPassed = "notpassed";

    it('should exist', () => {
        expect(StationPlatform).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<StationPlatform data={mockData} trainState={mockTrainState} />);
        expect(result.props.data.platform).toBe(mockData.platform);
        expect(result.props.trainState).toBe(mockTrainState);
    });

    it('should render platform number', () => {
        var result = TestUtils.renderIntoDocument(<StationPlatform data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBeA("string");
        expect(ReactDOM.findDOMNode(outputText).textContent).toInclude(mockData.platform);
    });

    it('should render "-" when there is no platform number', () => {
        var result = TestUtils.renderIntoDocument(<StationPlatform data={mockNoPlatformData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBeA("string");
        expect(ReactDOM.findDOMNode(outputText).textContent).toInclude("-");
    });

    it('should call right className when train passed', () => {
        var result = TestUtils.renderIntoDocument(<StationPlatform data={mockData} trainState={mockTrainState} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("platform-passed");
    });

    it('should call right className when train NOT passed', () => {
        var result = TestUtils.renderIntoDocument(<StationPlatform data={mockData} trainState={mockTrainStateNotPassed} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'div');
        expect(outputText).toBeA("object");
        expect(outputText.className).toInclude("platform-general");
    });

});
