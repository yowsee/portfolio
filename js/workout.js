'use strict';
{
  document.querySelector('.menu-content').addEventListener('click', function(){
    document.getElementById('hamburger-menu').checked = false;
  });

  const selectbox = document.querySelectorAll('.selectbox');
  const checkPoint =  document.querySelectorAll('.check-point');
  
  var url = location.href;	
  var urlParam = location.search.substring(1);
  if(urlParam){
    var parameters = urlParam.split('&');
    var paramArray = [];
    for (let p = 0; p < parameters.length; p++){
      var paramItem = parameters[p].split('=');
      var paramName = decodeURIComponent(paramItem[0]);
      var paramValue = decodeURIComponent(paramItem[1]);
      paramArray[paramName] = paramValue;
    }
    for (let l = 0; l < selectbox.length; l++){
      if(selectbox[l].getAttribute('data-select') == paramArray.id){
        selectbox[l].style.display='flex';
        // if(window.matchMedia("screen and (max-width:768px)").matches){
        //   selectbox[l].style.display='block';
        // }
        selectbox[l].parentElement.style.order = '-1';
      }
    }
  }

  for (let x = 0; x < checkPoint.length; x++){
    if (checkPoint[x].name == location.hash.slice(1)){
      checkPoint[x].checked = true;
    } else {
      checkPoint[x].checked = false;
    }
  }

  const entry = document.querySelectorAll('.entry');
  const reps = document.querySelectorAll('.reps');
  const set = document.querySelectorAll('.set');
  const spanReps = document.querySelectorAll('.span-reps');
  const spanSet = document.querySelectorAll('.span-set');
  const cancel = document.querySelectorAll('.cancel');
  const done = document.querySelectorAll('.done');
  const reset = document.querySelectorAll('.reset');
  const todoLine = document.querySelectorAll('.todo-line');
  const delet = document.querySelectorAll('.delete');
  const check = document.querySelectorAll('.check');
  let todoItems = [];
  let doneLines = [];
  
  window.onload = function(){ 
    if(localStorage.getItem("todoStorage") == undefined){
      return;
    } else {
    todoItems = JSON.parse(localStorage.getItem("todoStorage"));
    }
    for (const todoItem of todoItems){
      if(todoItem.checked = true){
        for (let z = 0; z < check.length; z++){
          if(todoItem.id == check[z].id){
            check[z].checked = true;
          }
        }
        for (let r = 0; r < spanReps.length; r++){
          if(todoItem.id == spanReps[r].id){
            spanReps[r].textContent = todoItem.reps;
          }
        }
        for (let t = 0; t < spanSet.length; t++){
          if(todoItem.id == spanSet[t].id){
            spanSet[t].textContent = todoItem.set;
          }
        }
      }
    }  
    if(localStorage.getItem("doneStorage") == undefined){
      return;
    } else {
      doneLines = JSON.parse(localStorage.getItem("doneStorage"));
    }
    for (const doneLine of doneLines){
      if(doneLine.classList[1] = 'line'){
        for (let h = 0; h < todoLine.length; h++){
          if(doneLine.id == todoLine[h].id){
            todoLine[h].classList.add('line');
          }
        }
      }
    }  
  }
  
  for (let m = 0; m < entry.length; m++){
    let thisEntry = entry[m];
    thisEntry.addEventListener('click', function(){
      for (let s = 0; s < reps.length; s++){
        if(reps[s].getAttribute('data-reps') == entry[m].getAttribute('data-entry')){
          var reps_str = reps[s].value;
        }
      }
      for (let r = 0; r < spanReps.length; r++){
        if(spanReps[r].getAttribute('data-span-reps') == entry[m].getAttribute('data-entry')){
          spanReps[r].textContent = reps_str;
        }
      }
      for (let k = 0; k < set.length; k++){
        if(set[k].getAttribute('data-set') == entry[m].getAttribute('data-entry')){
          var set_str = set[k].value;
        }
      }
      for (let t = 0; t < spanSet.length; t++){
        if(spanSet[t].getAttribute('data-span-set') == entry[m].getAttribute('data-entry')){
          spanSet[t].textContent = set_str;
        }
      }
      for (let z = 0; z < check.length; z++){
        if(check[z].getAttribute('data-check') == entry[m].getAttribute('data-entry')){
          check[z].checked = true;
          const todoItem = ({id:check[z].id, checked:check[z].checked, reps:reps_str, set:set_str});
          todoItems.push(todoItem);
          localStorage.setItem("todoStorage", JSON.stringify(todoItems));
        }
      }         
    });
  }
  for (let c = 0; c < cancel.length; c++){
    let thisCancel = cancel[c];
    thisCancel.addEventListener('click', function(){
      for (let l = 0; l < selectbox.length; l++){
        if(selectbox[l].getAttribute('data-select') == cancel[c].getAttribute('data-cancel')){
          selectbox[l].style.display='none';
          const url = new URL(window.location.href);
          const params = url.searchParams;
          params.delete('id');
          history.replaceState('', '', url.pathname);
        }
      }
    });
  }
  for (let d = 0; d < done.length; d++){
    let thisDone = done[d];
    thisDone.addEventListener('click', function(){
      for (let h = 0; h < todoLine.length; h++){
        if(todoLine[h].getAttribute('data-todo') == done[d].getAttribute('data-done')){
          todoLine[h].classList.add('line');
          let doneLine = ({id:todoLine[h].id, classList:todoLine[h].classList});
          doneLines.push(doneLine);
          localStorage.setItem("doneStorage", JSON.stringify(doneLines));
        }
      }
    });
  }
  for (let f = 0; f < reset.length; f++){
    let thisReset = reset[f];
    thisReset.addEventListener('click', function(){
      for (let h = 0; h < todoLine.length; h++){
        if(todoLine[h].getAttribute('data-todo') == reset[f].getAttribute('data-reset')){
          todoLine[h].classList.remove('line');
          let deleteLine = ({id:todoLine[h].id, classList:todoLine[h].classList});
          doneLines = doneLines.filter(doneLine => doneLine.id !== deleteLine.id);
        }
        localStorage.setItem("doneStorage", JSON.stringify(doneLines));
      }
    });
  }
  for (let e = 0; e < delet.length; e++){
    let thisDelet = delet[e];
    thisDelet.addEventListener('click', function(){
      for (let z = 0; z < check.length; z++){
        if(check[z].getAttribute('data-check') == delet[e].getAttribute('data-delete')){
          check[z].checked = false;
          let deleteItem = ({id:check[z].id, checked:check[z].checked});
          todoItems = todoItems.filter(todoItem => todoItem.id !== deleteItem.id);
        }
        localStorage.setItem("todoStorage", JSON.stringify(todoItems));
      }
      for (let h = 0; h < todoLine.length; h++){
        if(todoLine[h].getAttribute('data-todo') == delet[e].getAttribute('data-delete')){
          todoLine[h].classList.remove('line');
          let deleteLine = ({id:todoLine[h].id, classList:todoLine[h].classList});
          doneLines = doneLines.filter(doneLine => doneLine.id !== deleteLine.id);
        }
        localStorage.setItem("doneStorage", JSON.stringify(doneLines));
      }
      for (let l = 0; l < selectbox.length; l++){
        if(selectbox[l].getAttribute('data-select') == delet[e].getAttribute('data-delete')){
          selectbox[l].style.display='none';
          const url = new URL(window.location.href);
          const params = url.searchParams;
          params.delete('id');
          history.replaceState('', '', url.pathname);
        }
      }
    });
  }
}
