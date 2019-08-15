// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import {SW_UPDATE_EVENT} from './service-worker-constants';
import "./src/styles/global.css"

export function onServiceWorkerUpdateReady(){
  window.dispatchEvent(new Event(SW_UPDATE_EVENT));
}
