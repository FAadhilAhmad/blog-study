window.onload = function () {
    const intro1 = document.getElementById('intro');
    const intro2 = document.getElementById('intro2');
    const tombolIntro = document.getElementById('btnToggle');

   const viewCover = document.getElementById('layer1');
   const viewCover2 = document.getElementById('layer2');
   const btnContent = document.getElementById('btnTeck');

    // Set kondisi awal
    intro1.classList.add('container-none');
    intro2.classList.remove('container-none');

    // Set kondisi awal teck
    viewCover.classList.add('hide-layer');
    viewCover2.classList.remove('hide-layer');
   
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
