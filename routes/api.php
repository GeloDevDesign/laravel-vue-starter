<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/success', function (Request $request) {
    return response()->json(['message' => 'Data loaded sucessfully.'], 200);
});

Route::get('/error', function (Request $request) {
    return response()->json(['message' => 'ERROR AXIOS'], 422);
});
