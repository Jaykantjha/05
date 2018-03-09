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

Route::get('/', function () {
    return view('welcome');
});

//check whether the request is ajax call
    Route::post('get-user-login', 'ContactsController@getLogin');
//if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&  !empty($_REQUEST['_']) &&  strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
//{
    Route::prefix('api/v1')->group(function () {
       
        Route::middleware('check_auth')->group(function () {
            //users modules
            Route::get('get-all-users', 'ContactsController@getUsersList');
            Route::post('manage-users', 'ContactsController@manageUsers');
            Route::post('users/delete', 'ContactsController@deleteUsers');
            Route::post('get-user-info', 'ContactsController@getUserInfo');
            Route::post('users-status', 'ContactsController@changeStatus');
            Route::post('get-role4select', 'RoleController@getRoleData');
            Route::post('update-password', 'ContactsController@updatePassword');
            
            //roles modules
            Route::post('/manage-form-control', 'FormController@manageFormControl');
            Route::post('/get-user-formControls', 'FormController@getUsersFormControl');
            Route::post('/get-role-controls', 'RoleController@getRoleControl');
            Route::post('/manage-role', 'RoleController@manageRole');
            Route::post('/get-roles', 'RoleController@getRole');
            Route::post('/get-role-info', 'RoleController@getRoleInfo');
            
            //department modules
            Route::post('/get-departments', 'DepartmentController@getDepartments');
            Route::post('/manage-departments', 'DepartmentController@manageDepartment');
            Route::post('/get-department-info', 'DepartmentController@getDepartmentInfo');
            
            

        });
    });
//}else{
//    return 'False Request';
//    exit;
//}


