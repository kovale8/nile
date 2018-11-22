import Floatbox from './floatbox';
import Route from 'route-parser';

const shareLink = document.getElementById('share_link');
const shareBox = new Floatbox('share');

shareLink.addEventListener('click', event => {
    shareBox.toggle();
    shareBox.setPosition(
        event.clientX - shareBox.element.offsetWidth,
        event.clientY
    );
});

const sendButton = shareBox.select('.share__send_button');
sendButton.addEventListener('click', () => {
    const email = shareBox.select('.share__input').value;

    const productId = new Route('/product/:productId')
        .match(window.location.pathname).productId;

    const shareRoute = new Route('/share/:email-:productId');
    fetch(shareRoute.reverse({email, productId}))
    .then(() => shareBox.select('.content').innerHTML = 'Share email sent!');
});