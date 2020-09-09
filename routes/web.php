<?php

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

// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/{any}', 'SpaController@index')->where('any', '.*');
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@authenticate');
Route::post('formSubmit','ImageController@formSubmit');
Route::post('retrieveProduct','ImageController@retrieveProduct');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', 'UserController@getAuthenticatedUser');
});