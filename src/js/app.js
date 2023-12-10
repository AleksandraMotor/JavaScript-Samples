import '../sass/style.scss';
import Scroller from '../js/components/scroller';
import Swiper from '../js/helpers/swiper';
import slider from '../js/helpers/slider';
import startTime from '../js/helpers/clock';
import calendar from './helpers/calendar';
import mouseTrailer from './components/mouse-trailer';

document.addEventListener("DOMContentLoaded", function() {
    const scroller = new Scroller('#root');

    document.addEventListener('wheel', (event) => scroller.listenScroll(event));

    document.addEventListener('swipeUp', () => scroller.scroll(1));
    document.addEventListener('swipeDown', () => scroller.scroll(-1));

    document.addEventListener('keydown', (event) => {

        if(event.key === 'ArrowDown') {
            return scroller.scroll(1);
        } else if (event.key === 'ArrowUp') {
            return scroller.scroll(-1)
        } else {
            return;
        }
    });
    
    new Swiper();

    mouseTrailer();

    startTime();
    calendar();
    slider();

})
