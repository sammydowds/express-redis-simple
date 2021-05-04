module.exports = function (options) {
    return function (req, res, next) {
        // Implement some middlware fn based on the options! 
        console.log('Some middleware ran:', options)
        next() 
    }
}