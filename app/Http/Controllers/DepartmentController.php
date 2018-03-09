<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Mail;
use Validator;

class DepartmentController extends Controller {
	

	public function getDepartments(Request $request) {
            $departments= \App\Models\Department::getDepartments($request);
            return response()->json(getResponse($departments, 'Department Lists', '1', null))->setStatusCode(200);
	}
        
        public function manageDepartment(Request $request){
            $department= \App\Models\Department::manageDepartment($request);
            if(!empty($request->get('id'))){
                    $type='Department Updated';
                    $addedby =$request->user_credential;
                    $remark = $request->remark;
                    $this->logDepartment($department, $type,$addedby,$remark);
                 return response()->json(getResponse($department, 'Department Updated', '1', null))->setStatusCode(200);
            }else{
                    $type='Department Created';
                    $addedby =$request->user_credential;
                    $remark = $request->remark;
                    $this->logDepartment($department, $type,$addedby,$remark);
                 return response()->json(getResponse($department, 'Department Created', '1', null))->setStatusCode(200);
            }
           
        }
        
        public function getDepartmentInfo(Request $request) {
            $department= \App\Models\Department::getDepartmentInfo($request);
            return response()->json(getResponse($department, 'Department Info', '1', null))->setStatusCode(200);
        }
        
        public function getRoleData(Request $request) {
             $role = DB::table('roles')->get();
             return response()->json(getResponse($role, 'Role For Select In Forms', '1', null))->setStatusCode(200);
        }
        
        
        
        

}
