export default function mouseTrailer() {

    const colors = ["#fd2ea3", "#fe6fc5", "#fcadd8", "#05eeff", "#03c6e3", "white"];

    const rotate_1 = [
        {transform: "translate(0px, 0px) rotateX(45deg) rotateY(30deg) rotateZ(0deg) scale(0.25)", opacity: "0"},
        {transform: "translate(25px, 200px) rotateX(180deg) rotateY(270deg) rotateZ(90deg) scale(0.5)", opacity: "1"},
    ];

    const rotate_2 = [
        {transform: "translate(0px, 0px) rotateX(-20deg) rotateY(10deg) scale(1)", opacity: "1"},
        {transform: "translate(-10px, 160px) rotateX(-90deg) rotateY(45deg) scale(0.25)", opacity: "0"},
    ];

    const rotate_3 = [
        {transform: "translate(0px, 0px) rotateX(0deg) rotateY(45deg) scale(0.5)", opacity: "0"},
        {transform: "translate(20px, 120px) rotateX(-180deg) rotateY(-90deg) scale(1)", opacity: "1"},
    ];

    const animations = [rotate_1, rotate_2, rotate_3];

    function selectRandom(arr) {
        const randomColor = Math.floor(Math.random() * arr.length);

        const item = arr[randomColor];

        return item;
    }

    window.onmousemove = e => {
        const trailer = document.createElement('div');
        trailer.setAttribute('class', 'mouse-trailer');

        const star = document.createElement('div');
        star.setAttribute('class', 'material-icons');
        star.innerHTML = 'star';
        star.style.color = selectRandom(colors);
        const keyframes = selectRandom(animations);
        star.animate(keyframes, {
            duration: 1000,
            fill: 'forwards'
        });

        trailer.appendChild(star);
        document.body.appendChild(trailer);

        const mouseX = e.clientX - trailer.offsetWidth / 2;
        const mouseY = e.clientY - trailer.offsetHeight / 2;

        trailer.style.left = `${mouseX}px`;
        trailer.style.top = `${mouseY}px`;

        setTimeout(() => document.body.removeChild(trailer), 1500)
    };
};