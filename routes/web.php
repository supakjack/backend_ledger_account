<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api/la_mediator'], function () use ($router) {
    // http://localhost/se/88837759/backend/public/api/la_mediator/getAll
    $router->get('getAll', 'La_mediator_controller@getAll');
    $router->get('getID/{id}', 'La_mediator_controller@getID');
    $router->post('insertData', 'La_mediator_controller@addData');
    $router->put('updateData/{id}', 'La_mediator_controller@updateData');
    $router->delete('deleteData/{id}', 'La_mediator_controller@deleteData');
    $router->get('testquery', 'La_mediator_controller@testsql');
});

$router->group(['prefix' => 'api/la_extension'], function () use ($router) {
    // http://localhost/se/88837759/backend/public/api/la_extension/getAll
    $router->get('getAll', 'La_extension_controller@getAll');
    $router->get('getID/{id}', 'La_extension_controller@getID');
    $router->post('insertData', 'La_extension_controller@addData');
    $router->put('updateData/{id}', 'La_extension_controller@updateData');
    $router->delete('deleteData/{id}', 'La_extension_controller@deleteData');
    $router->get('testquery', 'La_extension_controller@testsql');
});


$router->group(['prefix' => 'api/la_list'], function () use ($router) {
    // http://localhost/se/88837759/backend/public/api/la_list/getAll
    $router->get('getAll', 'La_list_controller@getAll');
    $router->get('getID/{id}', 'La_list_controller@getID');
    $router->post('insertData', 'La_list_controller@addData');
    $router->put('updateData/{id}', 'La_list_controller@updateData');
    $router->delete('deleteData/{id}', 'La_list_controller@deleteData');
    $router->get('testquery', 'La_list_controller@testsql');
});

$router->group(['prefix' => 'api/la_person'], function () use ($router) {
    // http://localhost/se/88837759/backend/public/api/la_person/getAll
    $router->get('getAll', 'La_person_controller@getAll');
    $router->get('getID/{id}', 'La_person_controller@getID');
    $router->post('insertData', 'La_person_controller@addData');
    $router->put('updateData/{id}', 'La_person_controller@updateData');
    $router->delete('deleteData/{id}', 'La_person_controller@deleteData');
    $router->get('testquery', 'La_person_controller@testsql');
});

$router->group(['prefix' => 'api/la_book'], function () use ($router) {
    // http://localhost/se/88837759/backend/public/api/la_book/getAll
    $router->get('getAll', 'La_book_controller@getAll');
    $router->get('getID/{id}', 'La_book_controller@getID');
    $router->post('insertData', 'La_book_controller@addData');
    $router->put('updateData/{id}', 'La_book_controller@updateData');
    $router->delete('deleteData/{id}', 'La_book_controller@deleteData');
    $router->get('testquery', 'La_book_controller@testsql');
});

$router->group(['prefix' => 'api/v1'], function () use ($router) {
    // http://localhost/se/88837759/backend/public/api/v1/getAll
    $router->get('getAll', 'UserController@getAll');
    $router->get('getID/{id}', 'UserController@getID');
    $router->post('insertData', 'UserController@addData');
    $router->put('updateData/{id}', 'UserController@updateData');
    $router->delete('deleteData/{id}', 'UserController@deleteData');
    $router->get('testquery', 'UserController@testsql');
});