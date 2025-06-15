document.addEventListener('DOMContentLoaded', function () {
    // instalasi untuk intro section
    let introVisible = false;
    const intro1 = document.getElementById('intro');
    const intro2 = document.getElementById('intro2');
    const tombolIntro = document.querySelector('.btn-intro');

    // instalasi icon tecknologi
    let dislayIcon = false;
    const layer1 = document.getElementById('cover');
    const layer2 =document.getElementById('icon');
    const tombolicon = document.querySelector('.btnView');
   
    // set state awal intro
    intro1.classList.add('container-none');
    intro2.classList.remove('container-none');

    // set state awal icon
    layer1.classList.remove('teck-none');
    layer2.classList.add('teck-none');

    // Fungsi untuk toggle icon
    tombolicon.addEventListener('click', function () {
        layer1.classList.toggle('teck-none');
        layer2.classList.toggle('teck-none');

        // Update teks tombol
        if (layer1.classList.contains('teck-none')) {
            tombolicon.textContent = 'Show Technology Icons';
        } else {
            tombolicon.textContent = 'Hide Technology Icons';
        }
    });

    // Fungsi untuk toggle intro
    tombolIntro.addEventListener('click', function () {
        intro1.classList.toggle('container-none');
        intro2.classList.toggle('container-none');

        // Update teks tombol
        if (intro1.classList.contains('container-none')) {
            tombolIntro.textContent = 'Play Introduction';
        } else {
            tombolIntro.textContent = 'Hide Introduction';
        }
    });

  
   
})
