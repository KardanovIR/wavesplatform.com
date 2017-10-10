import Router from 'koa-router';


import { render } from 'src/server/middleware/render';

// page components
import WavesNG from 'src/common/containers/WavesNG';



const subdomains = new Router();


subdomains
    .get('/waves-ng', render({ script: 'wavesNG', component: WavesNG, description: 'Waves NG'  }))


export default subdomains;