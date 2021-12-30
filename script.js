const notesElement = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesElement.querySelector(".main");
const textArea = notesElement.querySelector("textarea");

editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});

textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    
    main.innerHTML = marked(value);
});