/**
 * Binds an external element click handler to a
 * chart event.
 *
 * Prevents the default event action, so for instance
 * attaching to an <a href> element will not change URLs.
 *
 * @class EventBind
 */
d3.chart("EventBind", {

    /**
     * Initializes the chart
     *
     * @constructor
     * @method initialize
     * @param {Function} [options.trigger] the chart event that will be triggered on the
     * element event
     * @param {d3.chart} chart the target chart to trigger the event on
     * @param {HTMLElement} element the external element which will generate the event
     * @param {String} on the target `event` on the given `element`
     * @param {Function} trigger the target function to execute.
     */
    initialize: function(options) {
        options = options || {};

        //select the element and bind the event handler to trigger
        //the internal chart event
        d3.select(options.element).on(options.on, function() {
            options.chart.trigger(options.trigger);

            d3.event.preventDefault();
        });
    }
});