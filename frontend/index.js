import 'preact/debug';

import {h, render} from 'preact';
import {Provider} from 'unistore/preact';

import store from './modules/store';

/**
 * Initialize the app
 */
document.querySelector('#app').innerHTML = "";
render(<Provider store={store}><div>Hello</div></Provider>, document.querySelector('#app'));
