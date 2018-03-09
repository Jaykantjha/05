<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use Mail;
use Validator;

class ContactsController extends Controller {
	

	public function getLogin(Request $request) {
            return \App\Models\Contacts::getLogin($request);
	}
        
        public function getUsersList(Request $request) {
            return \App\Models\Contacts::getUsers($request);
        }
        
        public function changeStatus(Request $request) {
            $data = \App\Models\Contacts::where('id',$request->get('data'))->first();
            //return $data->contact_status;
            if($data->contact_status == 'enable'){ $status = 'disable'; }else{ $status = 'enable'; }
            $type='User '.$status;
            $addedby =$request->user_credential;
            $remark = $request->remark;
            $this->logContact($data, $type,$addedby,$remark);
            return \App\Models\Contacts::changeStatus($request);
        }
        
        public function manageUsers(Request $request) {
                if(!empty($request->get('id'))){
                    $validate = Validator::make($request->all(), \App\Models\Contacts::$updateRule);
                }else{
                   $validate = Validator::make($request->all(), \App\Models\Contacts::$rules);
                }
                if ($validate->fails()) {
			return response()->json(getResponse(null, 'Bad request', '-1', $validate->errors()))->setStatusCode(400);
		}
                $users = \App\Models\Contacts::manageUsers($request);
                return $users;
                if(!empty($request->get('id'))){
                    $type='User Updated';
                    $addedby =$request->user_credential;
                    $remark = $request->remark;
                    // $this->logContact('data first', 'action type','added by','remark');
                    $this->logContact($users, $type,$addedby,$remark);
                    return response()->json(getResponse(null, 'Updated Successfully', '1', null))->setStatusCode(200);
                }else{
                    $type='User Added';
                    $addedby =$request->user_credential;
                    $remark = $request->remark;
                   $this->logContact($users, $type,$addedby,$remark);
                   return response()->json(getResponse(null, 'Created Successfully', '1', null))->setStatusCode(200);
                }
        }
        
        public function deleteUsers(Request $request) {
            $deleteUser = \App\Models\Contacts::deleteUsers($request);
            return $deleteUser;
        }
        
        public function getUserInfo(Request $request){
            return \App\Models\Contacts::getUserInfo($request);
        }
        
        public function updatePassword(Request $request) {
            if (!empty($request->get('edit-user'))) {
                $users = \App\Models\Contacts::where('id',$request->get('edit-user'))->first();
                $type='User Password Changed';
            }else{
                $users = \App\Models\Contacts::where('remember_token',$request->get('user_token'))->first();
                $type='Password Changed By User';
            }
            $addedby =$request->user_credential;
            $remark = $request->remark;
            $this->logContact($users, $type,$addedby,$remark);
            $updatePassword = \App\Models\Contacts::updatePassword($request);
            return $updatePassword;
        }
	

	

	

	public function setToken(Request $request) {
		$user = \App\Models\User::where('token', $request->get('token'))->first();
		$user->token = $request->get('new_token');
		$user->save();
		return response()->json(getResponse(null, 'token saved', '1', null))->setStatusCode(200);
	}
        
        

}
