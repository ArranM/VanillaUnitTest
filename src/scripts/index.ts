const runMe = (function () {
    let myTarget: HTMLElement = document.querySelector('#hello-test')!;
    return myTarget.innerHTML = `Hello test`;
}());
