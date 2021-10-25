<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\LinksController;

Route::post('/create', [LinksController::class, 'store']);
Route::post('/visiting/{id}', [LinksController::class, 'recordVisit']);
Route::get('/links', [LinksController::class, 'links']);
Route::get('/link/{id}', [LinksController::class, 'show']);
Route::get('/ip/{address}', [LinksController::class, 'ipStat']);
Route::get('/visits/{id}', [LinksController::class, 'visits']);
