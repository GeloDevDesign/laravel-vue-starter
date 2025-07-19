<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NoteController;

// Public routes
Route::post('/login', [AuthController::class, 'login'])->middleware(['throttle:5,1']);
Route::post('/register', [AuthController::class, 'register'])->middleware(['throttle:5,1']);

Route::post('/reset-password', [AuthController::class, 'reset_password']);
Route::get('/verify-email/{user}', [AuthController::class, 'verify_email']);

// Protected routes (token-based authentication via Sanctum)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    // NoteController CRUD with policy enforcement
    Route::apiResource('notes', NoteController::class);

    // OR if you want to use specific policy middleware
    // Route::get('/notes/{note}', [NoteController::class, 'show'])->middleware('can:view,note');
    // Route::put('/notes/{note}', [NoteController::class, 'update'])->middleware('can:modify,note');
    // Route::delete('/notes/{note}', [NoteController::class, 'destroy'])->middleware('can:modify,note');
});
