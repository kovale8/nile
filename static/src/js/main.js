import Floatbox from './floatbox';

const shareLink = document.getElementById('share_link');
const shareBox = new Floatbox('share');

shareLink.addEventListener('click', event => {
    shareBox.toggle();
    shareBox.setPosition(
        event.clientX - shareBox.element.offsetWidth,
        event.clientY
    );
});