const { createServer } = require('http')
const { parse } = require('url')
const express = require('express')
const next = require('next')
var WooCommerceAPI = require('woocommerce-api');
var WooCommerce = new WooCommerceAPI({
    url: 'https://incubedigital.tk',
    consumerKey: 'ck_b905ffb03ceb4064ed7e86518dcb50a70f753267',
    consumerSecret: 'cs_bcd6ba45d3a8dadf930d10a7c3b4477ff5b32fdf',
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