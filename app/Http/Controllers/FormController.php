<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Mail;
use Validator;

class FormController extends Controller {
	

        public function manageFormControl(Request $request) {
           
               $formControl = \App\Models\FormControl::manageFormControl($request);
               return response()->json(getResponse($formControl, 'Updated Successfully', '1', null))->setStatusCode(200);
        }
        
        public function getUsersFormControl(Request $request) {
               $userFormControl = \App\Models\FormControl::getUsersFormControl($request);
               return response()->json(getResponse($userFormControl, 'UserForm Control Data', '1', null))->setStatusCode(200);
        }
        
       
        
        

}
