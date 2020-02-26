# IFTTT-Webhooks
Simple Interface for IFTTT Webhooks in NodeJS with no dependencies

## Getting Started
### Install:
`npm install ifttt-webhooks`

### Usage:
```node
// require
const iftt_webhooks = require('ifttt-webhooks')

// create an instance
const ifttt = new iftt_webhooks.IFTTT('your_key')

// trigger an event
ifttt.trigger('event_name')

// trigger an event and catch errors
ifttt.trigger('event_name').catch(function(err){console.log(err)})

// trigger an event with parameters
ifttt.trigger('event_name', {"value1": "data"})

```

### Require:
 Add this to your `package.json`
 ```json
 "dependencies": {
    "ifttt-webhooks": "latest"
  }
 ```
# Further Reading:
### IFTTT webhooks docs https://ifttt.com/maker_webhooks
