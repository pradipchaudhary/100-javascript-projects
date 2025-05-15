document.addEventListener("DOMContentLoaded", loadNotes);

function loadNotes() {
    const notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "";

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    storedNotes.forEach((note, index) => {
        const noteDiv = createNoteElement(note, index);
        notesContainer.appendChild(noteDiv);
    });
}

function createNoteElement(note, index) {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");

    const noteText = document.createElement("div");
    noteText.classList.add("note-text");
    noteText.textContent = note;

    const noteButtons = document.createElement("div");
    noteButtons.classList.add("note-buttons");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editNote(index);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteNote(index);

    noteButtons.appendChild(editButton);
    noteButtons.appendChild(deleteButton);

    noteDiv.appendChild(noteText);
    noteDiv.appendChild(noteButtons);

    return noteDiv;
}

function addNote() {
    const noteInput = document.getElementById("noteInput");
    const newNote = noteInput.value.trim();

    if (newNote !== "") {
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        storedNotes.push(newNote);
        localStorage.setItem("notes", JSON.stringify(storedNotes));

        noteInput.value = "";
        loadNotes();
    }
}

function editNote(index) {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNote = prompt("Edit your note:", storedNotes[index]);

    if (updatedNote !== null) {
        storedNotes[index] = updatedNote;
        localStorage.setItem("notes", JSON.stringify(storedNotes));
        loadNotes();
    }
}

function deleteNote(index) {
    const confirmation = confirm("Are you sure you want to delete this note?");

    if (confirmation) {
        const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        storedNotes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(storedNotes));
        loadNotes();
    }
}
