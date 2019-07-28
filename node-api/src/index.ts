import 'reflect-metadata';
import {createConnection} from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as  compression from 'compression';
import helmet = require('helmet');
import routes from './routes';
import * as cors from 'cors';
import * as config from './ormconfig';

require('dotenv').config();


createConnection(config).then(async connection => {
    const port = process.env.APP_PORT;
    // create express app
    const app = express();
    app.use(cors());
    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.json());
    app.use('/', routes);


    // start express server
    app.listen(port, () => {
        console.log(`Express server has started on port ${port}. Open http://localhost:${port}/api to see results`);
    });


}).catch(error => console.log(error));
