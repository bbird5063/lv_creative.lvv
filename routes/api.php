<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\Person;

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


/** 
 * При изменений в роутерах routes\api.php, routes\web.php, router.js
 * php artisan route:cache
*/
Route::group(['namespace' => 'App\Http\Controllers\Person', 'prefix' => 'people'], function() {
//Route::group(['namespace' => 'Person', 'prefix' => 'people'], function() {
	Route::post('/', 'StoreController');
	Route::get('/', 'IndexController');
	Route::get('/{person}', 'ShowController');
	Route::patch('/{person}', 'UpdateController');
	Route::delete('/{person}', 'DeleteController');
});
