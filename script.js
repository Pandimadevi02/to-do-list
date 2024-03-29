let input = document.querySelector('.entered-list');
let addbtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() !== "") {
        addbtn.classList.add('active');
    } else {
        addbtn.classList.remove('active');
    }
});

addbtn.addEventListener('click', () => {
    if (input.value.trim() !== "") {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        tasks.appendChild(newItem); // Append the new item to the tasks container
        input.value = ""; // Clear the input field after adding the item
    } else {
        alert('Please enter a task');
    }
});

// Delete item from list
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
});

// Mark task as completed
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pen-to-square')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
});
