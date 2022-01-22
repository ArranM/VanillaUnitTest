const runMe = (function () {
    let myTarget: HTMLElement = document.querySelector('#hello-test')!;
    return myTarget.innerHTML = `Hello test`;
}());

const listenForButtonClick = (function () {
    let myButton: HTMLElement = document.querySelector('#click-me')!;
    myButton.addEventListener('click', function () {
        alert('You clicked me!');
    });
}());