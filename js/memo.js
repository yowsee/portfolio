'use strict';
{
  document.querySelector('.menu-content').addEventListener('click', function(){
    document.getElementById('hamburger-menu').checked = false;
  });

  const modalOpen = document.getElementById('create_memo');
  const modalClose = document.getElementById('cancel_memo');
  const modalMask = document.getElementById('mask'); 
  const modal = document.getElementById('modal');
  const textarea = document.getElementById('textarea');
  const addMemo = document.getElementById('add_memo');
  const memoList = document.getElementById('memo_list');
  let items = []; 

  modalOpen.addEventListener('click', function(){
    modal.classList.add('active');
    modalMask.classList.add('active');
  });
  modalClose.addEventListener('click', function(){
    modal.classList.remove('active');
    modalMask.classList.remove('active');
    textarea.value = '';
  });
  modalMask.addEventListener('click', function(){
    modal.classList.remove('active');
    mask.classList.remove('active');
    textarea.value = '';
  });

  function disableScroll(event){
    event.preventDefault();
  }
  modalOpen.addEventListener('click', function(){
    document.addEventListener('touchmove', disableScroll, {passive: false});
    document.addEventListener('mousewheel', disableScroll, {passive: false});
  });
  addMemo.addEventListener('click', function(){
    document.removeEventListener('touchmove', disableScroll, {passive: false});
    document.removeEventListener('mousewheel', disableScroll, {passive: false});
  });
  modalClose.addEventListener('click', function(){
    document.removeEventListener('touchmove', disableScroll, {passive: false});
    document.removeEventListener('mousewheel', disableScroll, {passive: false});
  });
  modalMask.addEventListener('click', function(){
    document.removeEventListener('touchmove', disableScroll, {passive: false});
    document.removeEventListener('mousewheel', disableScroll, {passive: false});
  });
 
  window.onload = function(){ 
    if(localStorage.getItem('memoStorage') == undefined){
      return;
    } else {
      items = JSON.parse(localStorage.getItem('memoStorage'));
    }
    for (const item of items){
      const memoItem = document.createElement('li');
      memoItem.textContent = item;
      memoList.appendChild(memoItem);

      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
      memoItem.appendChild(deleteButton);
      deleteButton.classList.add('deleteButton');

      deleteButton.addEventListener('click', function(){
        deleteMemo(deleteButton);
      });
    }
  }

  function storage(item){
    const memoItem = document.createElement('li');
    const showItem = memoList.appendChild(memoItem);
    showItem.innerHTML = item;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    memoItem.appendChild(deleteButton);
    deleteButton.classList.add('deleteButton');
    
    deleteButton.addEventListener('click', function(){
      deleteMemo(deleteButton);
    });  
  }

  addMemo.addEventListener('click', function(){
    const item = textarea.value;
    storage(item);
    textarea.value = '';
    items.push(item);
    localStorage.setItem('memoStorage', JSON.stringify(items));
    modal.classList.remove('active');
    modalMask.classList.remove('active'); 
  });
 
  function deleteMemo(deleteButton){
    const chosenMemo = deleteButton.closest('li');
    memoList.removeChild(chosenMemo); 
    items = [];
    localStorage.removeItem('memoStorage');
    const memoItem = memoList.getElementsByTagName('li');
    for (let a = 0; a < memoItem.length; a++){
      const item = memoItem[a].innerText;
      items.push(item);
    }
    localStorage.setItem('memoStorage', JSON.stringify(items));
  }
}
