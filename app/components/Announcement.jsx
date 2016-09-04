var React = require('react');

var Announcement = React.createClass({
    render: function () {
        var journey = this.props.journey;

        return (
            <div className="row">
                <div className="columns small-6 small-centered">
                    <h6 className="text-center">{journey.scheduled} {journey.origin} to {journey.destination}</h6>
                </div>
            </div>
        );
    }
});

module.exports = Announcement;
