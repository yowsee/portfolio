'use strict';
{
  document.querySelector('.menu-list').addEventListener('click', function(){
    document.getElementById('hamburger-menu').checked = false;
  });

  const modalOpen = document.querySelectorAll('.modal-open');
  const modalClose = document.querySelectorAll('.close');
  const modalMask = document.querySelectorAll('.mask'); 
  const modal = document.querySelectorAll('.modal');

  for (let i = 0; i < modalOpen.length; i++){
    let thisModalOpen = modalOpen[i];
    thisModalOpen.addEventListener('click', function(){
      for (let b = 0; b < modal.length; b++){
        if (modal[b].getAttribute('data-modal') == modalOpen[i].getAttribute('data-modal-open')){
          modal[b].classList.add('active');
        }
      }
      for (let n = 0; n < modalMask.length; n++){
        if (modalMask[n].getAttribute('data-mask') == modalOpen[i].getAttribute('data-modal-open')){
          modalMask[n].classList.add('active');
        }
      }
    });
  }
  for (let j = 0; j < modalClose.length; j++){
    let thisModalClose = modalClose[j];
    thisModalClose.addEventListener('click', function(){
      for (let b = 0; b < modal.length; b++){
        if (modal[b].getAttribute('data-modal') == modalClose[j].getAttribute('data-close')){
          modal[b].classList.remove('active');
        }
      }
      for (let n = 0; n < modalMask.length; n++){
        if (modalMask[n].getAttribute('data-mask') == modalClose[j].getAttribute('data-close')){
          modalMask[n].classList.remove('active');
        }
      }
    });
  } 
  for (let n = 0; n < modalMask.length; n++){
    let thisModalMask = modalMask[n];
    thisModalMask.addEventListener('click', function(){
      for (let b = 0; b < modal.length; b++){
        if (modal[b].getAttribute('data-modal') == modalMask[n].getAttribute('data-mask')){
          modal[b].classList.remove('active');
        }
      }            
      for (let n = 0; n < modal.length; n++){
        if (mask[n].getAttribute('data-mask') == modalMask[n].getAttribute('data-mask')){
          mask[n].classList.remove('active');
        }
      }
    });
  } 
  
  function disableScroll(event){
    event.preventDefault();
  }
  for (let i = 0; i < modalOpen.length; i++){
    let thisModalOpen = modalOpen[i];
    thisModalOpen.addEventListener('click', function(){
      document.addEventListener('touchmove', disableScroll, {passive: false});
      document.addEventListener('mousewheel', disableScroll, {passive: false});
    });
  }
  for (let j = 0; j < modalClose.length; j++){
    let thisModalClose = modalClose[j];
    thisModalClose.addEventListener('click', function(){
      document.removeEventListener('touchmove', disableScroll, {passive: false});
      document.removeEventListener('mousewheel', disableScroll, {passive: false});
    });
  }
  for (let n = 0; n < modalMask.length; n++){
    let thisModalMask = modalMask[n];
    thisModalMask.addEventListener('click', function(){
      document.removeEventListener('touchmove', disableScroll, {passive: false});
      document.removeEventListener('mousewheel', disableScroll, {passive: false});
    });
  }
}