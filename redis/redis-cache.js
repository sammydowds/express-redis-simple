const Redis = require("ioredis"); 
const redis = new Redis(); //connects to 127.0.0.1:6379



module.exports = async function(options) {
    return async function (req, res, next) {
       const cacheSuccess = await redis.set(req, res)
       if (cacheSuccess) {
           console.log('Cached the request and response for', req)
       } else {
           console.log('Something went wrong. Is the Redis server running?')
       }
       
    }

}