import express, { Express, Request, Response } from 'express';
import request from 'request';
import cheerio, { Element } from 'cheerio';

const app: Express = express();
const port = 3000;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Pass to next layer of middleware
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('This is steam API bridge, to use it go to https://localhost:3000/game/{appId}');
});

app.get('/top_sellers', async (req: Request, res: Response) => {
  request.get(
    { url: 'https://store.steampowered.com/search/?filter=topsellers', json: true },
    (error, response, body) => {
      if (error) {
        res.send(error);
      } else {
        const $ = cheerio.load(body);
        const someData: unknown[] = [];
        $('.search_result_row').each((i, el) => {
          someData.push($(el).data('ds-appid'));
        });
        res.send(someData);
      }
    }
  );
});

app.get('/game/:id', (req: Request, res: Response) => {
  request.get(
    { url: 'https://store.steampowered.com/api/appdetails?appids=' + req.params.id, json: true },
    (error, response, body) => {
      console.log('Got request with params:', req.params);
      if (error) {
        res.send(error);
      } else {
        console.log(body[req.params.id].data);
        res.send(body[req.params.id].data);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
