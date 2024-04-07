<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//return view('welcome');
//});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Route::get('/{page}', 'App\Http\Controllers\IndexController'); // {page} чтобы не было ошибки. Путь определяется в "resources\js\router.js". Переменная {page} больше нигде не появляется, можно написать любое имя переменной. Но при "/" IndexController не будет работать. Чтобы полностью передать работу вью router, нужно добавить правило where. И чтобы бы не добавляли в строке, сработает IndexController. 

Route::get('/{page}', 'App\Http\Controllers\IndexController')->where('page', '.*');