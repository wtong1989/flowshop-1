// Timer to measure elapsed time
function Timer() {
}

// Reset timer
Timer.prototype.reset = function() {
    Timer.prototype.time = process.hrtime();
};
exports.reset = Timer.prototype.reset;

// Measure time between last call and now
Timer.prototype.diff = function(digits) {
    if(Timer.prototype.time && Timer.prototype.time.length == 2) {
        var start = +(Timer.prototype.time.join('.'));
        var now = +(process.hrtime().join('.'));
        Timer.prototype.time = process.hrtime();
        if(digits) {
            return Math.floor((now - start) * Math.pow(10, digits)) / Math.pow(10, digits);
        } else {
            return now - start;
        }
    } else {
        Timer.prototype.start();
        return 0.0;
    }
};
exports.diff = Timer.prototype.diff;
