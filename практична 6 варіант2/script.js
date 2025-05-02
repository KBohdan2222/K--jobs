const apiUrl = 'api.php';

document.addEventListener('DOMContentLoaded', loadNotes);

document.getElementById('note-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
    });

    if (response.ok) {
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        loadNotes();
    }
});

async function loadNotes() {
    const response = await fetch(apiUrl);
    const notes = await response.json();

    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';

    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            <button class="delete" onclick="deleteNote(${note.id})">Delete</button>
        `;
        notesList.appendChild(noteDiv);
    });
}

async function deleteNote(id) {
    const response = await fetch(`${apiUrl}?id=${id}`, { method: 'DELETE' });
    if (response.ok) {
        loadNotes();
    }
}