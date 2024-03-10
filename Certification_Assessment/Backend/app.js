const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('/home/user/Desktop/user_repo/Certification_Assessment/Backend/db.json');
const middlewares = jsonServer.defaults();
router.db._.id = "id";
const port = process.env.PORT || 3020;
const fs = require('fs')
server.use(middlewares);
server.use(jsonServer.bodyParser)


router.render = (req, res) => {
  if (req.method == "POST" && req.url == "/enquiries") {
    let id = res.locals.data["id"]
    res.json({ "message": `Thanks for connecting with us. Your enquiry has been registered with enquiry id: ${6}. Please use this id during future contact.` }
    )
  }
  if (req.method == "GET" && req.url.includes('/products')) {
    res.json(res.locals.data)
  }

}
server.use(router);
server.listen(port);