var AWS = require('aws-sdk')

var docClient = new AWS.DynamoDB.DocumentClient()

console.log('Importing urls into DynamoDB. Please wait.')

var allVideos = [
  {
    videoId: '1',
  },
  {
    videoId: '2',
  },
  {
    videoId: '3',
  },
]
allVideos.forEach(({ videoId }) => {
  var params = {
    TableName: process.env.VIDEOS_TABLE_NAME,
    Item: { videoId },
  }

  docClient.put(params, (err) => {
    if (err) {
      console.error(
        'Unable to add video',
        videoId,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      )
    } else {
      console.log('PutItem succeeded:', videoId)
    }
  })
})
