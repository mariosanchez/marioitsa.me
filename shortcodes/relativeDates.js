const { DateTime } = require("luxon");

function relativeYear(date) {
    const dateTime = DateTime.fromISO(date);
    const duration = DateTime.now().diff(dateTime, ['years', 'months', 'days']);
    return duration.toFormat('y');
}

module.exports = {
    relativeYear
}