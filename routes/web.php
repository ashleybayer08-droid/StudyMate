<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    $tasks = auth()->user()->tasks();

    return Inertia::render('Dashboard', [
        'totalTasks' => (clone $tasks)->count(),
        'completedTasks' => (clone $tasks)->where('status', 'completed')->count(),
        'pendingTasks' => (clone $tasks)->where('status', 'pending')->count(),
        'upcomingTasks' => (clone $tasks)
            ->where('status', 'pending')
            ->whereNotNull('due_date')
            ->whereDate('due_date', '>=', now()->toDateString())
            ->orderBy('due_date')
            ->take(5)
            ->get(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('tasks', TaskController::class);
});

require __DIR__.'/auth.php';