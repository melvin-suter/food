<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIController;

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

Route::delete('/space/{spaceid}/list/{listid}/{voteid}', [APIController::class, 'deleteVote']);
Route::delete('/space/{spaceid}/list/{listid}', [APIController::class, 'deleteList']);

Route::put('/space/{spaceid}/list/{listid}/{voteid}', [APIController::class, 'putVote']);
Route::get('/space/{spaceid}/list/{listid}', [APIController::class, 'getVotes'])->withoutMiddleware("throttle:api");
Route::post('/space/{spaceid}/list/{listid}', [APIController::class, 'postVote'])->withoutMiddleware("throttle:api");


Route::get('/space/{id}/list', [APIController::class, 'getLists'])->withoutMiddleware("throttle:api");
Route::post('/space/{id}/list', [APIController::class, 'postList']);



Route::get('/space/{slug}', [APIController::class, 'getSpace'])->withoutMiddleware("throttle:api");
Route::post('/space', [APIController::class, 'postSpace']);