window.onload = function () {
    const intro1 = document.getElementById('intro');
    const intro2 = document.getElementById('intro2');
    const tombolIntro = document.getElementById('btnToggle');

   const viewCover = document.getElementById('layer1');
   const viewCover2 = document.getElementById('layer2');
   const btnContent = document.getElementById('btnTeck');


   const slide1 = document.getElementById('slide1');
   const slide2 = document.getElementById('slide2');
   const btnJurnal = document.getElementById('btnJurnal');

    //set kondisi awal jurnal
    slide1.classList.add('slideNone');
    slide2.classList.remove('slideNone');

    // Set kondisi awal
    intro1.classList.add('container-none');
    intro2.classList.remove('container-none');

    // Set kondisi awal teck
    viewCover.classList.add('hide-layer');
    viewCover2.classList.remove('hide-layer');

    //function tombol btnJurnal
    btnJurnal.addEventListener('click', function (){
        slide1.classList.toggle('slideNone');
        slide2.classList.toggle('slideNone');

        if(slide1.classList.contains('slideNone')){
            btnJurnal.textContent = 'halaman1';
        }else{
            btnJurnal.textContent = 'halaman2';
        }
    })
   
    // Tombol Intro: toggle dua bagian intro
    tombolIntro.addEventListener('click', function () {
        intro1.classList.toggle('container-none');
        intro2.classList.toggle('container-none');

        if (intro1.classList.contains('container-none')) {
            tombolIntro.textContent = 'Play Introduction';
        } else {
            tombolIntro.textContent = 'Hide Introduction';
        }
    });
    // Tombol view: toggle cover dan icon
    btnContent.addEventListener('click', function () {
        viewCover.classList.toggle('hide-layer');
        viewCover2.classList.toggle('hide-layer');

        if (viewCover.classList.contains('hide-layer')) {
            btnContent.textContent = 'View Cover';
        } else {
            btnContent.textContent = 'Hide Cover';
        }
    });
}

const btn = document.getElementById('playMusic');
const audio = document.getElementById('mp3');

btn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
// tombol chatbox
document.addEventListener('DOMContentLoaded', function () {
    const outputbox1 = document.getElementById('output');
    const btnBox1 = document.getElementById('chatBox1');

    btnBox1.addEventListener('click', function () {
        outputbox1.classList.toggle('non-chat');

        if (outputbox1.classList.contains('non-chat')) {
            btnBox1.textContent = 'Open Chat';
        } else {
            btnBox1.textContent = 'Close Chat';
        }
    });
});
