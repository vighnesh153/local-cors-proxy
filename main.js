const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const cors = require('cors');
const morgan = require('morgan');

const TARGET_URL = process.argv[2] || 'https://github.com';
const PROXY_PORT = process.argv[3] || 8080;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(createProxyMiddleware({ target: TARGET_URL, changeOrigin: true }));

app.listen(PROXY_PORT, () => {
  console.log(`Proxy started for ${TARGET_URL} at http://localhost:${PROXY_PORT}`);
});
