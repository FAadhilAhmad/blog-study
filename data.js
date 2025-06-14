document.addEventListener('DOMContentLoaded', function() {
    // instalasi untuk intro section
    let introVisible = false;
    const intro1 = document.getElementById('intro');
    const intro2 = document.getElementById('intro2');
    const tombolIntro = document.querySelector('.btn-intro');
    // instalasi untuk section view
    let viewVisible = false;
    const layer1 = document.getElementById('iconTeck');
    const layer2 = document.getElementById ('layer2');

    // set state awal
    intro1.classList.add('container-none');
    intro2.classList.remove('container-none');

    layer1.classList.add('non-view');
    layer2.classList.remove('non-view');

  // Fungsi untuk toggle intro
    tombolIntro.addEventListener('click', function() {
        intro1.classList.toggle('container-none');
        intro2.classList.toggle('container-none');
        
        // Update teks tombol
        if(intro1.classList.contains('container-none')) {
            tombolIntro.textContent = 'Play Introduction';
        } else {
            tombolIntro.textContent = 'Hide Introduction';
        }
    });
   
})
