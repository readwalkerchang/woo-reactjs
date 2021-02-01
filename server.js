const { createServer } = require('http')
const { parse } = require('url')
const express = require('express')
const next = require('next')
const wooConfig = require('../woo-reactjs/wooConfig')
var WooCommerceAPI = require('woocommerce-api');
var WooCommerce = new WooCommerceAPI({
    url: wooConfig.url,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    wpAPI: true,
    version: 'wc/v1'
  });

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const server = express();
    server.get('/getProducts',(req,res) => {
        WooCommerce.get("products")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
      
    });

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})