(() => {
  // header burger
  const initBurgerTrigger = (showBurger) => {
    const body = document.body;
    const internalClassList = {
      openButtonBurger: 'close',
      showClassMenu: 'show'
    }

    const btn = document.querySelector('.header-burger > button'),
      mobileMenu = document.querySelector('.burger-menu-mobile');

      const openBurger = () => {
        btn.classList.add(internalClassList.openButtonBurger);
        mobileMenu.classList.add(internalClassList.showClassMenu);
        body.style.overflow = 'hidden'
      }

      const closeBurger = () => {
        btn.classList.remove(internalClassList.openButtonBurger);
        mobileMenu.classList.remove(internalClassList.showClassMenu);
        body.style.overflow = 'visible'
      }
    
    if(showBurger !== undefined) {
      closeBurger();
    } else {
      btn.addEventListener('click', () => {
      if(btn.classList.contains(internalClassList.openButtonBurger)) {
        closeBurger();
      } else {
        openBurger()
      }
    })
    }
  }

  // Objects slider home page
  const initObjectsSliderHome = () => {
    new Swiper(".objects-inner-slider", {
      slidesPerView:3,
      spaceBetween: 28,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        996: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      }
    });
  }

   // Licenses slider home page
  const initLicensesSliderHome = () => {
    new Swiper(".licenses-inner-slider", {
      slidesPerView: 4,
      spaceBetween: 32,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        996: {
          slidesPerView: 3,
          spaceBetween: 28
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 32,
        }
      }
    });
  }
  
  // Show|hide popup
  const initPopup = () => {
    const triggerButtonPopupShow = document.querySelectorAll('.toggle-popup'),
      popupContact = document.querySelector('.popup-contact'),
      triggerButtonPopupHide = document.querySelector('.popup-contact__close button');

    const body = document.body;

    const showPopup = e => {
      e.preventDefault()
      popupContact.classList.add('show');
      body.style.overflow = 'hidden'
    }

    const hidePopup = () => {
      popupContact.classList.remove('show');
      body.style.overflow = 'visible'
    }

    triggerButtonPopupShow.forEach(el => {
      el.addEventListener('click', showPopup)
    })

    triggerButtonPopupHide.addEventListener('click', hidePopup);

    document.addEventListener('click', e => {
      if(!e.target.closest('.popup-contact') && !e.target.closest('.toggle-popup') && !e.target.closest('.header-burger')) {
        hidePopup();
      }
    })
  }

  // Copyright date
  const initDate = () => {
    const dateInner = document.getElementById('date');

    const currentDate = new Date().getFullYear();

    dateInner.innerHTML = currentDate;
  }

  // Show|hide images
  const initImagesButton = () => {
    const buttons = document.querySelectorAll('.show-images');

    buttons.forEach(el => {
      el.addEventListener('click', () => {
        const images = el.closest('.portfolio-inner-wrapper').querySelectorAll('.image');

        images.forEach(image => image.classList.add('show'));

        el.classList.add('hide')
      })
    })
  }

  // Anchor logic
  const initAnchorClick = () => {
    const anchors = document.querySelectorAll('.anchor');

    anchors.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        initBurgerTrigger(true);
        const scrollBlock = document.querySelector(link.getAttribute('href'));
        scrollBlock.scrollIntoView({ behavior: 'smooth' });
      })
    })
  }

  // Init
  initBurgerTrigger();
  initObjectsSliderHome();
  initLicensesSliderHome();
  initPopup();
  initDate();
  initImagesButton();
  initAnchorClick();
})();