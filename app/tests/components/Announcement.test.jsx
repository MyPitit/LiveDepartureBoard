var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');

var Announcement = require('Announcement');

describe('Announcement', () => {
    var mockJourney = { "scheduled": "14:00", "origin": "Mocktown", "destination": "Mockville"};

    it('should exist', () => {
        expect(Announcement).toExist();
    });

    it('should pass props values', () => {
        var result = TestUtils.renderIntoDocument(<Announcement journey={mockJourney} />);
        expect(result.props.journey.scheduled).toBe(mockJourney.scheduled);
        expect(result.props.journey.origin).toBe(mockJourney.origin);
        expect(result.props.journey.destination).toBe(mockJourney.destination);
    });

    it('should render announcement', () => {
        var result = TestUtils.renderIntoDocument(<Announcement journey={mockJourney} />);
        var outputText = TestUtils.findRenderedDOMComponentWithTag(result, 'h6');
        expect(outputText).toBeA("object");
        expect(ReactDOM.findDOMNode(outputText).textContent).toBeA("string");
        expect(ReactDOM.findDOMNode(outputText).textContent).toInclude(mockJourney.scheduled);
        expect(ReactDOM.findDOMNode(outputText).textContent).toInclude(mockJourney.origin);
        expect(ReactDOM.findDOMNode(outputText).textContent).toInclude(mockJourney.destination);
    });


});
