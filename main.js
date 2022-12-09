window.onload = function () {
    document
        .querySelector('div.header > div > div.end > div > div.nav--btn')
        .addEventListener('click', () => {
            var a = document.querySelectorAll('div.header div.end div.nav--btn img');
            if (document.querySelector('.nav-bar').classList.contains('active')) {
                document.querySelector('.nav-bar').classList.remove('active');
                a[0].style.display = 'block';
                a[1].style.display = 'none';
                document.body.style.overflow = 'auto';
            } else {
                document.querySelector('.nav-bar').classList.add('active');
                a[1].style.display = 'block';
                a[0].style.display = 'none';
                document.body.style.overflow = 'hidden';
            }
        });

    document.querySelector('.nav-bar').style.display = 'block';

    window.addEventListener('resize', function () {
        console.log(this.document.body.clientWidth);
        if (this.document.body.clientWidth > 768) {
            var a = document.querySelectorAll('div.header div.end div.nav--btn img');
            if (document.querySelector('.nav-bar').classList.contains('active')) {
                document.querySelector('.nav-bar').classList.remove('active');
                a[0].style.display = 'block';
                a[1].style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
};
