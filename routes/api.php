<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\LinksController;

Route::post('/create', [LinksController::class, 'store']);
Route::get('/links', [LinksController::class, 'view']);
Route::get('/link/{id}', [LinksController::class, 'show']);
Route::get('/ip/{address}', [LinksController::class, 'ip-stat']);
Route::get('/visits/{id}', [LinksController::class, 'visits']);
