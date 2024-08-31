import { config } from 'dotenv';
config();
import { createServer } from 'https';
import { parse } from 'url';
import next from 'next';
import fs from 'fs';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_FILE as string),
  cert: fs.readFileSync(process.env.SSL_CRT_FILE as string),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err?: any) => {
    if (err) throw err;
    console.log('> Ready on https://localhost:3000');
  });
});
