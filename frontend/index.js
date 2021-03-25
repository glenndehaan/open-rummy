// Must be the first import
if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at top-level.
    require("preact/debug");
}

import {h, render} from 'preact';
import {Provider} from 'unistore/preact';

import store from './modules/store';
import {validateServiceWorkerInstance} from './utils/sw';

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
} else {
    console.warn('Wake-Lock Not Available!');
}

/**
 * Log intro
 */
console.log(`-----\n|o o|\n| o | Open Rummy\n|o o|\n-----\n\nVersion: ${window.appVer}\nCreated by: Glenn de Haan (https://github.com/glenndehaan)`);

/**
 * Validate service worker
 */
validateServiceWorkerInstance("/kill-switch.txt");

/**
 * Initialize the app
 */
document.querySelector('#app').innerHTML = "";
render(<Provider store={store}><Pages/></Provider>, document.querySelector('#app'));
