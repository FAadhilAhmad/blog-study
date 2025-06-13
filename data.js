let introVisible = true;

function btnIntro() {
    const intro1 = document.getElementById("intro");
    const intro2 = document.getElementById("intro2");
    if (introVisible) {
        intro1.classList.add('container-none');
        intro2.classList.remove('container-none');
    }else {
        intro1.classList.remove('container-none');
        intro2.classList.add('container-none');
    }
    introVisible = !introVisible;
} // fuction untuk tombol play intro 
window.onload =function () {
    document.getElementById('intro').classList.add("container-none"); //untuk menyembunykan intro1
    document.getElementById("intro2").classList.remove("container-none");
}
 let viewTeck = true;

 function btnViewTeck() {
    const layer1 = document.getElementById('iconTeck');
    const layer2 = document.getElementById('layer2');

   if (viewTeck){
        layer1.classList.remove('non-view');
        layer2.classList.add('non-view');
   }else{
        layer1.classList.add('non-view');
        layer2.classList.remove('non-view');
   }
   viewTeck = !viewTeck;
 }
 window.onload = function () {
    document.getElementById('iconTeck').classList.remove('non-view'); //untuk menyembunyikan iconTeck
    document.getElementById('layer2').classList.add('non-view');
 }

