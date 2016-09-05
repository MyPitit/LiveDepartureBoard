var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Station = require('Station');

describe('Station', () => {
    var mockCallingPoint = { "actual": "14.20", "expected": "14:20", "scheduled": "14:00", "origin": "Mocktown", "destination": "Mockville"};
    var mockKey = 1;
    var mockTrainState = "passed";
    var mockTrainStation = "middle";

    it('should exist', () => {
        expect(Station).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<Station callingpoint={mockCallingPoint} trainState={mockTrainState} trainStation={mockTrainStation} />);
        expect(result.props.callingpoint).toBe(mockCallingPoint);
        expect(result.props.trainState).toBe(mockTrainState);
        expect(result.props.trainStation).toBe(mockTrainStation);
    });

    it('should render', () => {
        var result = TestUtils.renderIntoDocument(<Station callingpoint={mockCallingPoint} key={mockKey} trainState={mockTrainState} trainStation={mockTrainStation} />);
        expect(result).toBeA("object");
    });


});
