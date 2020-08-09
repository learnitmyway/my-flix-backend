const express = require('express')
const app = express()
const port = 4005

app.get('/api/videos', (req, res) => {
  const resBody = {
    videos: [
      {
        id: '1',
        src: 'assets/rock-balance.mp4',
      },
      {
        id: '2',
        src: 'assets/mare.mp4',
      },
      {
        id: '3',
        src: 'assets/waterfall.mp4',
      },
    ],
  }
  res.send(resBody)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
