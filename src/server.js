const express = require('express')
const app = express()
const port = 4005

app.get('/api/videos', (req, res) => {
  console.log('GET /api/videos')
  const resBody = {
    videos: [
      {
        id: '1',
      },
      {
        id: '2',
      },
      {
        id: '3',
      },
    ],
  }
  res.send(resBody)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
