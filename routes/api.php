<?php

use App\Http\Controllers\FavoriteItemController;
use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/items', [ItemController::class, 'index']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/items/{item}', [ItemController::class, 'edit']);
    Route::put('/items/{item}', [ItemController::class, 'update']);
    Route::put('/items/image/{item}', [ItemController::class, 'updateImage']);

    Route::get('/favorite-items/{id}', [FavoriteItemController::class, 'index']);
    Route::delete('/favorite-items/{userId}/{itemId}', [FavoriteItemController::class, 'destroy']);
    Route::post('/add-favorite-item', [FavoriteItemController::class, 'store']);
});
