const express = require('express')
const app = express()
const port = 4005

app.get('/api/videos', (req, res) => {
  // eslint-disable-next-line no-console
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
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})
