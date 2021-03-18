import 'preact/debug';

import {h, render} from 'preact';
import {Provider} from 'unistore/preact';

import store from './modules/store';

import Pages from './pages';

/**
 * Define globals
 */
let wakeLockObject = null;

/**
 * Activate the wake lock api
 *
 * @returns {Promise<void>}
 */
const wakeLock = async () => {
    try {
        wakeLockObject = await navigator.wakeLock.request('screen');
        console.log('Wake-Lock Active!');
    } catch (e) {
        console.warn(e);
    }
}

/**
 * Implement wake-lock api when possible
 */
if ('wakeLock' in navigator) {
    console.log('Wake-Lock Available!');
    wakeLock();

    document.addEventListener('visibilitychange', async () => {
        if (wakeLockObject !== null && document.visibilityState === 'visible') {
            wakeLock();
        }
    });
}

/**
 * Initialize the app
 */
document.querySelector('#app').innerHTML = "";
render(<Provider store={store}><Pages/></Provider>, document.querySelector('#app'));
