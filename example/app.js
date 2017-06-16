const express = require('express')
const app = express()
const path = require('path')

app.use('/', express.static(__dirname))
// serve the lib
app.use('/angular-legacy-sortable.js', express.static(path.join(__dirname, '../angular-legacy-sortable.js')))

app.listen(8080, () => {
  console.log('Example app listening on port 8080!')
})
