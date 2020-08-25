const { DynamoDB } = require('aws-sdk')

class VideosAccess {
  constructor() {
    this.docClient = new DynamoDB.DocumentClient()
    this.tableName = process.env.VIDEOS_TABLE_NAME
  }

  async getAllVideos() {
    console.log('getAllVideos')

    const result = await this.docClient
      .scan(
        {
          TableName: this.tableName,
        },
        (err, data) => {
          if (err) {
            console.error(
              'Unable to query. Error:',
              JSON.stringify(err, null, 2)
            )
            throw err
          } else {
            console.log('Query succeeded.')
            data.Items.forEach(({ videoId }) => {
              console.log(' -', videoId)
            })
          }
        }
      )
      .promise()

    return result.Items
  }
}

module.exports = VideosAccess
