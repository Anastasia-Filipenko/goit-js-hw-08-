import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const STORAGE_KEY = 'videoplayer-current-time';
const videoEL = new Player('vimeo-player');
const valueStorage = localStorage.getItem(STORAGE_KEY);


if (valueStorage) {
  videoEL.setCurrentTime(valueStorage);
}


videoEL.on('timeupdate', throttle(onPlay, 1000));


function onPlay(data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};