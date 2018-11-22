import Floatbox from './floatbox.js';

const shareLink = document.getElementById('share_link');
const shareBox = new Floatbox('share');

window.box = shareBox;

shareLink.addEventListener('click', () =>
    shareBox.toggle());