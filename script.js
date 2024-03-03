function addNote() {
    const noteContent = document.getElementById('note-content').value.trim();
    if (noteContent !== '') {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <p>${noteContent}</p>
            <button onclick="editNote(this)">Edit</button>
            <button onclick="deleteNote(this)">Delete</button>
        `;
        document.getElementById('notes-container').appendChild(noteElement);
        document.getElementById('note-content').value = '';
    } else {
        alert('Please enter a note before adding.');
    }
}

function editNote(button) {
    const noteElement = button.parentNode;
    const noteContent = noteElement.querySelector('p').textContent;
    const updatedContent = prompt('Edit your note:', noteContent);
    if (updatedContent !== null) {
        noteElement.querySelector('p').textContent = updatedContent;
    }
}
function deleteNote(button) {
    const noteElement = button.parentNode;
    noteElement.remove();
}
function setReminder() {
    const reminderTime = document.getElementById('reminder-input').value;
    if (reminderTime !== '') {
        alert('Reminder set for: ' + reminderTime);
    } else {
        alert('Please select a reminder time.');
    }
}
function searchNotes() {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const notes = document.querySelectorAll('.note');
    notes.forEach(note => {
        const noteText = note.querySelector('p').textContent.toLowerCase();
        if (noteText.includes(searchTerm)) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
}
