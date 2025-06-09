let introVisible = true;

function btnIntro() {
    const intro1 = document.getElementById("intro");
    const intro2 = document.getElementById("intro2");
    const btnIntro = document.getElementById("btnIntro");
    if (introVisible) {
        intro1.classList.add('container-none');
        intro2.classList.remove('container-none');
    }else {
        intro1.classList.remove('container-none');
        intro2.classList.add('container-none');
    }
    introVisible = !introVisible;
}
window.onload =function () {
    document.getElementById("intro").classList.remove("container-none");
}