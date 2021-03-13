import 'preact/debug';

import {h, render} from 'preact';
import {Provider} from 'unistore/preact';

import store from './modules/store';

import Pages from './pages';

/**
 * Initialize the app
 */
document.querySelector('#app').innerHTML = "";
render(<Provider store={store}><Pages/></Provider>, document.querySelector('#app'));
