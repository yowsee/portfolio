'use strict';
{
  document.querySelector('.menu-content').addEventListener('click', function(){
    document.getElementById('hamburger-menu').checked = false;
  });
  
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const modal = document.getElementById('modal');
  const cancel = document.getElementById('cancel');
  const save = document.getElementById('save');
  const modalMask = document.getElementById('mask');
  const radio = document.getElementsByName('radio');
  const delet = document.getElementById('delete');
  const mission = document.getElementsByClassName('mission');
  const checkMissionOpen = document.getElementsByClassName('check-missionOpen');
  let missionItems = [];
  let checkItems = [];
  
  window.onload = function(){
    showProcess(today, calendar);
    if(localStorage.getItem('missionStorage') == undefined){
      return;
    } else {
      missionItems = JSON.parse(localStorage.getItem('missionStorage'));
    }
    for (const missionItem of missionItems){
      for (let y = 0; y < mission.length; y++){
        if(missionItem.id == mission[y].id){
          mission[y].style.display = 'flex';
        }
      }
    }
    if(localStorage.getItem('checkStorage') == undefined){
      return;
    } else {
      checkItems = JSON.parse(localStorage.getItem('checkStorage'));
    }
    for (const checkItem of checkItems){
      for (let q = 0; q < checkMissionOpen.length; q++){
        if(checkItem.id == checkMissionOpen[q].id){
          checkMissionOpen[q].checked = true;
          const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
          if(checkboxes.length !== 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = 'rgb(187, 188, 198)';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = 'rgb(160, 164, 195)';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = 'rgb(187, 188, 198)';
            });
            if(missionFile.classList.contains('today')){
              missionFile.style.background = '#D65E72';
              missionFile.addEventListener('mouseover', function(){
                missionFile.style.background = 'rgb(160, 164, 195)';
              });
              missionFile.addEventListener('mouseleave', function(){
                missionFile.style.background = '#D65E72';
              });
            }
          }
          if(checkboxes.length === 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = '';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = '';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = '';
            });
          }
        }
      }
    }
  }

  document.getElementById('prev').addEventListener('click', function(){
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
    if(localStorage.getItem('missionStorage') == undefined){
      return;
    } else {
      missionItems = JSON.parse(localStorage.getItem('missionStorage'));
    }
    for (const missionItem of missionItems){
      for (let y = 0; y < mission.length; y++){
        if(missionItem.id == mission[y].id){
          mission[y].style.display = 'flex';
        }
      }
    }
    if(localStorage.getItem('checkStorage') == undefined){
      return;
    } else {
      checkItems = JSON.parse(localStorage.getItem('checkStorage'));
    }
    for (const checkItem of checkItems){
      for (let q = 0; q < checkMissionOpen.length; q++){
        if(checkItem.id == checkMissionOpen[q].id){
          checkMissionOpen[q].checked = true;
          const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
          if(checkboxes.length !== 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = 'rgb(187, 188, 198)';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = 'rgb(160, 164, 195)';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = 'rgb(187, 188, 198)';
            });
            if(missionFile.classList.contains('today')){
              missionFile.style.background = '#D65E72';
              missionFile.addEventListener('mouseover', function(){
                missionFile.style.background = 'rgb(160, 164, 195)';
              });
              missionFile.addEventListener('mouseleave', function(){
                missionFile.style.background = '#D65E72';
              });
            }
          }
          if(checkboxes.length === 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = '';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = '';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = '';
            });
          }
        }
      }
    }
  });

  document.getElementById('today').addEventListener('click', function(){
    window.location.reload();
    if(localStorage.getItem('missionStorage') == undefined){
      return;
    } else {
      missionItems = JSON.parse(localStorage.getItem('missionStorage'));
    }
    for (const missionItem of missionItems){
      for (let y = 0; y < mission.length; y++){
        if(missionItem.id == mission[y].id){
          mission[y].style.display = 'flex';
        }
      }
    }
    if(localStorage.getItem('checkStorage') == undefined){
      return;
    } else {
      checkItems = JSON.parse(localStorage.getItem('checkStorage'));
    }
    for (const checkItem of checkItems){
      for (let q = 0; q < checkMissionOpen.length; q++){
        if(checkItem.id == checkMissionOpen[q].id){
          checkMissionOpen[q].checked = true;
          const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
          if(checkboxes.length !== 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = 'rgb(187, 188, 198)';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = 'rgb(160, 164, 195)';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = 'rgb(187, 188, 198)';
            });
            if(missionFile.classList.contains('today')){
              missionFile.style.background = '#D65E72';
              missionFile.addEventListener('mouseover', function(){
                missionFile.style.background = 'rgb(160, 160, 160)';
              });
              missionFile.addEventListener('mouseleave', function(){
                missionFile.style.background = '#D65E72';
              });
            }
          }
          if(checkboxes.length === 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = '';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = '';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = '';
            });
          }
        }
      }
    }
  });

  document.getElementById('next').addEventListener('click', function(){
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
    if(localStorage.getItem('missionStorage') == undefined){
      return;
    } else {
      missionItems = JSON.parse(localStorage.getItem('missionStorage'));
    }
    for (const missionItem of missionItems){
      for (let y = 0; y < mission.length; y++){
        if(missionItem.id == mission[y].id){
          mission[y].style.display = 'flex';
        }
      }
    }
    if(localStorage.getItem('checkStorage') == undefined){
      return;
    } else {
      checkItems = JSON.parse(localStorage.getItem('checkStorage'));
    }
    for (const checkItem of checkItems){
      for (let q = 0; q < checkMissionOpen.length; q++){
        if(checkItem.id == checkMissionOpen[q].id){
          checkMissionOpen[q].checked = true;
          const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
          if(checkboxes.length !== 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = 'rgb(187, 188, 198)';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = 'rgb(160, 164, 195)';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = 'rgb(187, 188, 198)';
            });
            if(missionFile.classList.contains('today')){
              missionFile.style.background = '#D65E72';
              missionFile.addEventListener('mouseover', function(){
                missionFile.style.background = 'rgb(160, 164, 195)';
              });
              missionFile.addEventListener('mouseleave', function(){
                missionFile.style.background = '#D65E72';
              });
            }
          }
          if(checkboxes.length === 0){
            const missionFile = checkMissionOpen[q].parentNode;
            missionFile.style.background = '';
            missionFile.addEventListener('mouseover', function(){
              missionFile.style.background = '';
            });
            missionFile.addEventListener('mouseleave', function(){
              missionFile.style.background = '';
            });
          }
        }
      }
    }
  });

  function showProcess(date){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    var month = date.getMonth();
    var month_english = months[month]
    var year = date.getFullYear();
    document.querySelector('#main-header').innerHTML = (month_english) + " " + year;
    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;
  }

  function createProcess(year, month){
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var w = 0; w < week.length; w++){
      calendar += "<th>" + week[w] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    for (var w = 0; w < row; w++){
      calendar += "<tr>";
      for (var q = 0; q < week.length; q++){
        if(w == 0 && q < startDayOfWeek){
          calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + q + 1) + "</td>";
        } else if (count >= endDate){
          count++;
          calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
        } else {
          count++;
          if (year == today.getFullYear()
          && month == (today.getMonth())
          && count == today.getDate()){
            calendar += `<td id='missionOpen${year}${month}${count}' class='today missionOpen'>${count}
              <input id='chest-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='chest'/>
                <p id='chest${year}${month}${count}' class='mission' data-mission='chest'><a href="workout.html#chest">CHEST</a></p>
              <input id='back-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='back'/>
                <p id='back${year}${month}${count}' class='mission' data-mission='back'><a href="workout.html#back">BACK</a></p>
              <input id='leg-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='leg'/>
                <p id='leg${year}${month}${count}' class='mission' data-mission='leg'><a href="workout.html#leg">LEG</a></p>
              <input id='abs-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='abs'/>
                <p id='abs${year}${month}${count}' class='mission' data-mission='abs'><a href="workout.html#abs">ABS</a></p>
              <input id='shoulder-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='shoulder'/>
                <p id='shoulder${year}${month}${count}' class='mission' data-mission='shoulder'><a href="workout.html#shoulder">SHOULDER</a></p>
              <input id='arm-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='arm'/>
                <p id='arm${year}${month}${count}' class='mission' data-mission='arm'><a href="workout.html#arm">ARM</a></p>
            </td>`;
          } else {
            calendar +=
            `<td id='missionOpen${year}${month}${count}' class='missionOpen'>${count}
              <input id='chest-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='chest'/>
                <p id='chest${year}${month}${count}' class='mission' data-mission='chest'><a href="workout.html#chest">CHEST</a></p>
              <input id='back-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='back'/>
                <p id='back${year}${month}${count}' class='mission' data-mission='back'><a href="workout.html#back">BACK</a></p>
              <input id='leg-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='leg'/>
                <p id='leg${year}${month}${count}' class='mission' data-mission='leg'><a href="workout.html#leg">LEG</a></p>
              <input id='abs-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='abs'/>
                <p id='abs${year}${month}${count}' class='mission' data-mission='abs'><a href="workout.html#abs">ABS</a></p>
              <input id='shoulder-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='shoulder'/>
                <p id='shoulder${year}${month}${count}' class='mission' data-mission='shoulder'><a href="workout.html#shoulder">SHOULDER</a></p>
              <input id='arm-missionOpen${year}${month}${count}' type='checkbox' class='check-missionOpen' data-check='arm'/>
                <p id='arm${year}${month}${count}' class='mission' data-mission='arm'><a href="workout.html#arm">ARM</a></p>
            </td>`;
          }
        } 
      }
      calendar += "</tr>";
    }
    return calendar;
  }

  document.addEventListener('click', function(event){
    if(event.target.classList.contains('missionOpen')){
      modal.classList.add('active');
      modalMask.classList.add('active');
    } else {
      return
    }
    save.addEventListener('click', function(){
      for (let v = 0; v < radio.length; v++){
        if(radio[v].checked){
          const workoutItem = event.target.getElementsByTagName('p');
          for (let u = 0; u < workoutItem.length; u++){
            if(workoutItem[u].getAttribute('data-mission') == radio[v].getAttribute('data-radio')){
              workoutItem[u].style.display ='flex';
              let missionItem = ({id: workoutItem[u].id, classList: workoutItem[u].style.display});
              missionItems.push(missionItem);
              localStorage.setItem("missionStorage", JSON.stringify(missionItems));
              const check = event.target.querySelectorAll('.check-missionOpen');
              for (let o = 0; o < check.length; o++){
                if(check[o].getAttribute('data-check') == workoutItem[u].getAttribute('data-mission')){
                  check[o].checked = true;
                  const checkboxes = event.target.querySelectorAll('input[type="checkbox"]:checked');
                  if(checkboxes.length !== 0){
                    const missionFile = check[o].parentNode;
                    missionFile.style.background = 'rgb(187, 188, 198)';
                    missionFile.addEventListener('mouseover', function(){
                      missionFile.style.background = 'rgb(160, 164, 195)';
                    });
                    missionFile.addEventListener('mouseleave', function(){
                      missionFile.style.background = 'rgb(187, 188, 198)';
                    });  
                    if(missionFile.classList.contains('today')){
                      missionFile.style.background = '#D65E72';
                      missionFile.addEventListener('mouseover', function(){
                        missionFile.style.background = 'rgb(160, 164, 195)';
                      });
                      missionFile.addEventListener('mouseleave', function(){
                        missionFile.style.background = '#D65E72';
                      });
                    }
                  }
                  let checkItem = ({id: check[o].id, checked: check[o].checked});
                  checkItems.push(checkItem);
                  localStorage.setItem("checkStorage", JSON.stringify(checkItems));
                }
              }
              radio[v].checked = false;
            }
          }
        } 
      }
      delet.dispatchEvent(event);
      cancel.dispatchEvent(event);
      modalMask.dispatchEvent(event);
      modal.classList.remove('active');
      modalMask.classList.remove('active');
    }, {once: true});
     
    delet.addEventListener('click', function(){
      for (let v = 0; v < radio.length; v++){
        if(radio[v].checked){
          const workoutItem = event.target.getElementsByTagName('p');
          for (let u = 0; u < workoutItem.length; u++){
            if(workoutItem[u].getAttribute('data-mission') == radio[v].getAttribute('data-radio')){
              workoutItem[u].style.display ='none';
              let deleteItem = ({id: workoutItem[u].id, classList: workoutItem[u].style.display});
              missionItems = missionItems.filter(missionItem => missionItem.id !== deleteItem.id);
              localStorage.setItem("missionStorage", JSON.stringify(missionItems));
              const check = event.target.querySelectorAll('.check-missionOpen');
              for (let o = 0; o < check.length; o++){
                if(check[o].getAttribute('data-check') == workoutItem[u].getAttribute('data-mission')){
                  check[o].checked = false;
                  const checkboxes = event.target.querySelectorAll('input[type="checkbox"]:checked');
                  if(checkboxes.length === 0){
                    const missionFile = check[o].parentNode;
                    missionFile.style.background = '';
                    missionFile.addEventListener('mouseover', function(){
                      missionFile.style.background = '';
                    });
                    missionFile.addEventListener('mouseleave', function(){
                      missionFile.style.background = '';
                    });
                  }
                  let deleteCheckItem = ({id: check[o].id, checked: check[o].checked});
                  checkItems = checkItems.filter(checkItem => checkItem.id !== deleteCheckItem.id);
                  localStorage.setItem("checkStorage", JSON.stringify(checkItems));
                }
              }
              radio[v].checked = false;
            }
          }
        } 
      }
      save.dispatchEvent(event);
      cancel.dispatchEvent(event);
      modalMask.dispatchEvent(event);
      modal.classList.remove('active');
      modalMask.classList.remove('active');
    }, {once: true});

    cancel.addEventListener('click', function(){
      for (let v = 0; v < radio.length; v++){
        radio[v].checked = false;
      }
      save.dispatchEvent(event);
      delet.dispatchEvent(event);
      modalMask.dispatchEvent(event);
      modal.classList.remove('active');
      modalMask.classList.remove('active');
    }, {once: true});
    
    modalMask.addEventListener('click', function(){
      for (let v = 0; v < radio.length; v++){
        radio[v].checked = false;
      }
      save.dispatchEvent(event);
      delet.dispatchEvent(event);
      cancel.dispatchEvent(event);
      modal.classList.remove('active');
      mask.classList.remove('active');
    }, {once: true}); 
  });

  function disableScroll(event){
    event.preventDefault();
  }
  document.addEventListener('click', function(event){
    if(event.target.classList.contains('missionOpen')){
      document.addEventListener('touchmove', disableScroll, { passive: false });
      document.addEventListener('mousewheel', disableScroll, { passive: false });
    }
  });
  save.addEventListener('click', function(){
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
  });
  cancel.addEventListener('click', function(){
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
  });
  modalMask.addEventListener('click', function(){
    document.removeEventListener('touchmove', disableScroll, { passive: false });
    document.removeEventListener('mousewheel', disableScroll, { passive: false });
  });
}
