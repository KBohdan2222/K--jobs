<?php
header("Content-Type: application/json");

$file = 'notes.json'; 

if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}
$notes = json_decode(file_get_contents($file), true);

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);
$id = isset($_GET['id']) ? intval($_GET['id']) : null;

function saveData($file, $data) {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

switch ($method) {
    case 'GET':
        if ($id === null) {
            echo json_encode($notes); 
        } else {
            $note = array_filter($notes, fn($n) => $n['id'] === $id);
            echo json_encode($note ? array_values($note)[0] : ['error' => 'Note not found']);
        }
        break;

    case 'POST':
        if (isset($input['title'], $input['content'])) {
            $newNote = [
                'id' => count($notes) ? max(array_column($notes, 'id')) + 1 : 1,
                'title' => $input['title'],
                'content' => $input['content']
            ];
            $notes[] = $newNote;
            saveData($file, $notes);
            echo json_encode($newNote);
        } else {
            echo json_encode(['error' => 'Invalid input']);
        }
        break;

    case 'PUT':
        if ($id !== null) {
            foreach ($notes as &$note) {
                if ($note['id'] === $id) {
                    $note['title'] = $input['title'] ?? $note['title'];
                    $note['content'] = $input['content'] ?? $note['content'];
                    saveData($file, $notes);
                    echo json_encode(['message' => 'Note updated']);
                    exit;
                }
            }
            echo json_encode(['error' => 'Note not found']);
        }
        break;

    case 'DELETE':
        if ($id !== null) {
            $notes = array_filter($notes, fn($n) => $n['id'] !== $id);
            saveData($file, $notes);
            echo json_encode(['message' => 'Note deleted']);
        } else {
            echo json_encode(['error' => 'Invalid ID']);
        }
        break;

    default:
        echo json_encode(['error' => 'Method not allowed']);
}