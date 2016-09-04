var React = require('react');

var Announcement = React.createClass({
    render: function () {
        var journey = this.props.journey;

        return (
            <div>
                <h1>
                    {journey.scheduled} {journey.origin} to {journey.destination}
                </h1>
            </div>
        );
    }
});

module.exports = Announcement;
