const ul = document.querySelector('ul');
const newTask = document.querySelector('.new-task');
const input = document.querySelector('.task');
// console.log(input);

ul.addEventListener('click',(e) => {
    e.target.remove();
});

newTask.addEventListener('submit', e => {
    e.preventDefault();
    let task = input.value;
    let li = document.createElement('li');
    li.textContent = task;
    ul.append(li);
});
