<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::where('user_id', Auth::id())
            ->latest()
            ->get();

        return Inertia::render('Tasks/Index', [
            'tasks' => $tasks,
        ]);
    }

    public function create()
    {
        return Inertia::render('Tasks/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'due_date' => ['nullable', 'date'],
            'status' => ['required', 'in:pending,completed'],
        ]);

        $request->user()->tasks()->create($validated);

        return redirect()->route('tasks.index')
            ->with('success', 'Task added successfully!');
    }

    public function edit(Task $task)
    {
        abort_unless($task->user_id === Auth::id(), 403);

        return Inertia::render('Tasks/Edit', [
            'task' => $task,
        ]);
    }

    public function update(Request $request, Task $task)
    {
        abort_unless($task->user_id === Auth::id(), 403);

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'due_date' => ['nullable', 'date'],
            'status' => ['required', 'in:pending,completed'],
        ]);

        $task->update($validated);

        return redirect()->route('tasks.index')
            ->with('success', 'Task updated successfully!');
    }

    public function destroy(Task $task)
    {
        abort_unless($task->user_id === Auth::id(), 403);

        $task->delete();

        return redirect()->route('tasks.index')
            ->with('success', 'Task deleted successfully!');
    }
}