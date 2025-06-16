window.onload = function () {
    const intro1 = document.getElementById('intro');
    const intro2 = document.getElementById('intro2');
    const tombolIntro = document.getElementById('btnToggle');

    const cover = document.getElementById('cover1');
    const icon = document.getElementById('icon1');
    const tombolView = document.getElementById('btnView');

    // Set kondisi awal
    intro1.classList.add('container-none');
    intro2.classList.remove('container-none');

    cover.classList.remove('teck-none');
    icon.classList.add('teck-none'); 
   
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
    tombolView.addEventListener('click', function(){
        cover.classList.toggle('teck-none');
        icon.classList.toggle('teck-none');

        if (cover.classList.contains('teck-none')) {
            tombolView.textContent = 'Show Cover';
        } else {
            tombolView.textContent = 'Hide Cover';
        }
    })
};
