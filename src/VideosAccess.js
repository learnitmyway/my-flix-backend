const { DynamoDB } = require('aws-sdk')

class VideosAccess {
  constructor() {
    this.docClient = new DynamoDB.DocumentClient()
    this.tableName = process.env.VIDEOS_TABLE_NAME
  }

  async getAllVideos() {
    // eslint-disable-next-line no-console
    console.log('getAllVideos')

    const result = await this.docClient
      .scan({
        TableName: this.tableName,
      })
      .promise()

    return result.Items
  }
}

module.exports = VideosAccess
