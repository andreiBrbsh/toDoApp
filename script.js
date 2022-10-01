'use strict';

const task = document.querySelector('#newThing');
const addTask = document.querySelector('button');
const tasks = document.querySelector('#tasks');
let idCount = 1;
task.addEventListener('keypress', function(event){
      if(event.charCode === 13 && task.value.trim() != ''){
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `newTasl + ${idCount}`;

            let label = document.createElement('label');
            label.htmlFor = `newTasl + ${idCount}`;
            idCount++;
            label.innerHTML = task.value;
            task.value = '';

            tasks.appendChild(checkbox);
            tasks.appendChild(label);

            checkbox.addEventListener('click', function(){
                  setTimeout(function(){
                        label.remove();
                        checkbox.remove();
                  }, 2000)
            })

      } else if(task.value.trim() === ''){
            task.value = '';
      }
});

addTask.addEventListener('click', function(event){
      if(task.value.trim() != ''){
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `newTasl + ${idCount}`;

            let label = document.createElement('label');
            label.htmlFor = `newTasl + ${idCount}`;
            idCount++;
            label.innerHTML = task.value;
            task.value = '';

            tasks.appendChild(checkbox);
            tasks.appendChild(label);

            checkbox.addEventListener('click', function(){
                  setTimeout(function(){
                        label.remove();
                        checkbox.remove();
                  }, 2000)
            })

      } else if(task.value.trim() === ''){
            task.value = '';
      }
});

