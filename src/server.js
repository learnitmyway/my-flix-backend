const express = require('express')
const VideosAccess = require('./videosAccess')
const app = express()
const port = 4005

app.get('/api/videos', async (req, res) => {
  // eslint-disable-next-line no-console
  console.log('GET /api/videos')

  const videosAccess = new VideosAccess()

  const videos = await videosAccess.getAllVideos()

  const resBody = {
    videos,
  }

  res.send(resBody)
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})
