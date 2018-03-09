<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Mail;
use Validator;

class RoleController extends Controller {
	

	public function getRoleControl(Request $request) {
            $roleControls= \App\Models\Role::getRoleControl($request);
            return response()->json(getResponse($roleControls, 'Role Controls', '1', null))->setStatusCode(200);
	}
        
        public function manageRole(Request $request){
            $role= \App\Models\Role::manageRole($request);
            if(!empty($request->get('id'))){
                 return response()->json(getResponse($role, 'Role Updated', '1', null))->setStatusCode(200);
            }else{
                 return response()->json(getResponse($role, 'Role Created', '1', null))->setStatusCode(200);
            }
           
        }
        
        public function getRole(Request $request) {
            $roles= \App\Models\Role::getRole($request);
            return response()->json(getResponse($roles, 'Role list', '1', null))->setStatusCode(200);
        }
        
        public function getRoleInfo(Request $request) {
            $data = DB::table('roles')->where('id',$request->get('info'))->first();
            $role= \App\Models\Role::getRoleInfo($request);
            return response()->json(getResponse($role, $data, '1', null))->setStatusCode(200);
        }
        
        public function getRoleData(Request $request) {
             $role = DB::table('roles')->get();
             return response()->json(getResponse($role, 'Role For Select In Forms', '1', null))->setStatusCode(200);
        }
        
        
        
        

}
