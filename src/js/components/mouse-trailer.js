export default function mouseTrailer() {

        const trailer = document.createElement('div');
        trailer.setAttribute('class', 'mouse-trailer');

        document.body.appendChild(trailer);


    window.onmousemove = e => {


        const x = e.clientX - trailer.offsetWidth / 2;
        const y = e.clientY - trailer.offsetHeight / 2;

        const keyframes = {
            transform: `translate(${x}px, ${y}px`
        }

        trailer.animate(keyframes, {
            duration: 800,
            fill: 'forwards'
        });

    };

    // const star = document.createElement('i');
    // star.setAttribute('class', 'star');


    // document.body.appendChild(star);

    // window.onmousemove = e => {
    //     star.style.left = `${e.clientX}px`;
    //     star.style.top = `${e.clientY}px`;
    // }

};