# Live Departure Board

This is a simple `React and Redux` application, mocking a supplied live departure board data and reproduces the mock-up image listed below:

```json
{
    "journey": {
        "origin": "London Euston",
        "destination": "Manchester Piccadilly",
        "scheduled": "14:00"
    },
    "callingPoints": [
        {
            "station": "London Euston",
            "scheduled": "14:00",
            "expected": "14:00",
            "actual": "14:00",
            "platform": ""
        },
        {
            "station": "Stoke-On-Trent",
            "scheduled": "15:25",
            "expected": "15:35",
            "actual": "15:35",
            "platform": "2"
        },
        {
            "station": "Macclesfield",
            "scheduled": "15:41",
            "expected": "15:50",
            "platform": "1"
        },
        {
            "station": "Stockport",
            "scheduled": "15:56",
            "expected": "16:03",
            "platform": "3"
        },
        {
            "station": "Manchester Piccadilly",
            "scheduled": "16:07",
            "expected": "16:11",
            "platform": "7"
        }
    ]
}
```
![appcomponents](https://cloud.githubusercontent.com/assets/2573931/18224558/68d8a200-71d1-11e6-967a-b07886808d77.png)

### How to run this application

If you wish to see this application running in live, click [here]().

#### To run this application in your local...

+ In your terminal type:
`$ git clone git@github.com:MyPitit/LiveDepartureBoard.git`

+ Install npm dependencies:
`$ npm install`

+ Run webpack:
`$ webpack` or `$ webpack -w`

+ In another tab run the server:
`$ node server.js`

#### Tests

If you wish to see the tests running, type in your terminal:
`npm test`

![screen shot 2016-09-04 at 22 42 25](https://cloud.githubusercontent.com/assets/2573931/18234077/f3f94928-72f0-11e6-986c-9dd2bcd27024.png)
