import './index.css';
import App from './modules/app';
import {mockDonates} from './modules/app';

let app = new App(mockDonates);
app.run();


