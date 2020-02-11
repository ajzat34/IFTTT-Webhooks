const https = require('https')

class IFTTT {
  #key
  constructor (key) {
    this.#key = key
  }

  async trigger (event, json) {
    var self = this
    var str
    var headers
    const p = new Promise(function(resolve, reject) {

      // if json is given, stringify it, and set up the headers
      if (json) {
        try {
          str = JSON.stringify(json)
          headers = {
            'Content-Type': 'application/json',
            'Content-Length': str.length
          }
        } catch (err) {
          reject(err)
        }
      } else {
        headers = {}
      }

      // create an https request
      const req = https.request({
        hostname: 'maker.ifttt.com',
        port: 443,
        method: 'POST',
        path: `/trigger/${event}/with/key/${self.#key}`,
        headers: headers,

      }, (req) => {
        // look at the status code
        if (req.statusCode < 200 || req.statusCode >= 300) {
          reject(new Error('statusCode = ' + req.statusCode))
        }
      })

      // error handling
      req.on('error', (error) => { reject(error) })

      // resolve on end
      req.on('end', function() {
        resolve('ended')
      })

      // write json data if needed
      if (json) { req.write(str) }

      // end the request
      req.end()
    })

    return p
  }
}

module.exports.IFTTT = IFTTT
