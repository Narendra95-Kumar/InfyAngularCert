const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('/home/user/Desktop/user_repo/Certification_Assessment/Backend/db.json');
const middlewares = jsonServer.defaults();
router.db._.id = 'assetId';
const port = process.env.PORT || 3020;
const fs = require('fs')
server.use(middlewares);
server.use(jsonServer.bodyParser)



server.patch('/assetDetails/:assetId', function (req, res, next) {
  let jsonData = JSON.parse(fs.readFileSync('/home/user/Desktop/user_repo/Certification_Assessment/Backend/db.json', 'utf-8'))
  var bool = true
  for (i = 0; i < jsonData.assetDetails.length; i++) {
    if (jsonData.assetDetails[i].assetId == req.params.assetId) {
      bool = false
    }
  }

  if (bool) {
    res.status(500)
    res.json({ "message": "Asset not found !" })
  }
  else {
    next()
  }

})


server.get('/assetDetails/:assetId', function (req, res, next) {
  let jsonData = JSON.parse(fs.readFileSync('/home/user/Desktop/user_repo/Certification_Assessment/Backend/db.json', 'utf-8'))
  var bool = true
  for (i = 0; i < jsonData.assetDetails.length; i++) {
    if (jsonData.assetDetails[i].assetId == req.params.assetId) {
      bool = false
    }
  }

  if (bool) {
    res.status(500)
    res.json({ "message": "Asset not found !" })
  }
  else {
    next()
  }

})


server.use((req, res, next) => {
  if (req.method === 'PUT') {
    req.method = 'GET';
  }
  next();
});


router.render = (req, res) => {
  if (req.method == 'POST' && req.url.includes('/assetDetails')) {
    let assetId = res.locals.data['assetId']
    res.json({ 'message': 'Asset added with assetId ' + assetId })
  }
  else if (req.method == 'GET' && req.url.includes('/assetDetails/')) {
    let data = res.locals.data
    let x = req.url.split('/')
    let id = x[2]
    if (data.assetId == null) {
      res.json({ 'message': `Details for asset Id: ${id} is not found!` })
    }
    else {
      res.json(res.locals.data)
    }
  }

  else if (req.method == 'PATCH' && req.url.includes('/assetDetails/')) {
    let x = req.url.split('/')
    let id = x[2]
    console.log(req.body)
    res.json({ 'message': `Asset with asset Id ${id} is updated successfully` })
  }

}

server.use(router);
server.listen(port);