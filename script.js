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

            let br = document.createElement('br');

            tasks.appendChild(checkbox);
            tasks.appendChild(label);
            tasks.appendChild(br);
      } else if(task.value.trim() === ''){
            task.value = '';
      }
});