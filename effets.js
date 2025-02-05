window.onscroll = function() {
    var header = document.getElementsByTagName('header')
    var logo1 = document.getElementsByClassName('logo1_alma')
    var logo2 = document.getElementsByClassName('logo2_alma')
    var menu = document.getElementsByClassName('lien_menu')
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
         header[0].classList.add('header-scroll');
         logo1[0].classList.add('logo-alma-scroll');
         logo2[0].classList.add('logo-alma-scroll');
         menu.classList.add('lien-menu-scroll');
        //  menu.style.color = black;
     } else {
         if (header[0].classList.contains("header-scroll")) {
             header[0].classList.remove('header-scroll');
         }
         if (logo1[0].classList.contains("logo-alma-scroll")) {
            logo1[0].classList.remove('logo-alma-scroll');
        }
        if (logo2[0].classList.contains("logo-alma-scroll")) {
            logo2[0].classList.remove('logo-alma-scroll');
        }
        // if (menu.classList.contains("lien-menu-scroll")) {
        //     menu.classList.remove('lien-menu-scroll');
        // }
     }
   }

// console.log("Hello World");