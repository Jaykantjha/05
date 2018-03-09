<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class Contacts extends Model {
	/**
	 * [$table model defined table]
	 * @var string
	 */
	protected $table = 'contacts';

	protected $hidden = [
		'contact_password'
	];
        public $incrementing = false;

	public static $rules = [
		'contact_username' => 'required|max:45|min:3|unique :contacts',
		'contact_email' => 'required|max:45'
	];
	public static $updateRule = [
		'contact_username' => 'required|max:45|min:3',
		'contact_email' => 'required|max:45|min:3'
	];
	
        
        public static function getLogin(Request $request) {

		$validate_user = Self::select('contact_email','contact_password', 'id')
			->where('contact_email', Input::get('contactemail'))
			->first();
                if ($validate_user && Hash::check(Input::get('contactPassword'), $validate_user->contact_password)) {
                        $token_value = str_random(32);
                        $update_user_token = Self::where('id', $validate_user->id)->update(array('remember_token' => $token_value));
                        $data = Self::where('contact_email', $validate_user->contact_email);
			$data = $data->select('contact_username', 'remember_token','id', 'contact_role')->get();
			return response()->json(getResponse($data, $token_value, '1', null))->setStatusCode(201);
                }else{
                        return response()->json(getResponse(null, 'Incorect', '-1', null))->setStatusCode(200);
                }
	}
        
        public static function getUsers(Request $request) {
                // dd($request->get('userId'));
		DB::enableQueryLog();
                $data = Self::role()->department()->where('contact_status','!=' ,'');
		$totalRecordResult = clone $data;
		if ($request->get('username')) {
			$data = $data->where('contact_username', 'like', '%' . $request->get('username') . '%');
		}
		if ($request->get('email')) {
			$data = $data->where('contact_email', 'like', '%' . $request->get('email') . '%');
		}
		if ($request->get('contact_role')) {
			$data = $data->where('roles.id', 'like', '%' . $request->get('contact_role') . '%');
		}
                if ($request->get('status')) {
			$data = $data->where('contact_status', 'like', '%' . $request->get('status') . '%');
		}
		$count = clone $data;
		$count = $count->count();

		$data = $data->orderBy($request->get('columns')[$request->get('order')[0]['column']]['data'], $request->get('order')[0]['dir']);
                if($request->get('length') != '-1'){
                    $data= $data->limit($request->get('length'))->offset($request->get('start'));
                }
                $data= $data->select('contacts.contact_username','departments.department_name','roles.role_name','contacts.id', 'contacts.contact_email','contacts.contact_status' ,'contacts.contact_role')->get();
		$totalRecord = $totalRecordResult->count();
		//dd(DB::getQueryLog());

		return json_encode(['data' => $data, 'recordsTotal' => $totalRecord, 'recordsFiltered' => $count, 'draw' => $request->get('draw'), 'error' => null]);
	}
        
        public function scopeRole($q) {
		return $q->leftJoin('roles', 'contacts.contact_role', '=', 'roles.id');
	}
        
        public function scopeDepartment($q) {
		return $q->leftJoin('departments', 'contacts.contact_userdepartment', '=', 'departments.id');
	}
        
        public static function manageUsers(Request $request) {
            return $request->all();
            if(!empty($request->get('id'))){
                $user = self::where('id',$request->get('id'))->first();
            }else{
                $user = new Self;
		$user->id = str_random(36);
                $user->remember_token = str_random(36);
            }
            if(!empty($request->get('contact_password'))){
                $user->contact_password = Hash::make($request->get('contact_password'));
                $user->plain_password= $request->get('contact_password');
            }
                
                $user->contact_userdepartment=$request->get('contact_userdepartment');
                $user->contact_userinitial = $request->get('contact_userinitial');
                $user->contact_userid=$request->get('contact_userid');
                $user->contact_status=$request->get('contact_status');
                $user->contact_username = $request->get('contact_username');
		$user->contact_email = $request->get('contact_email');
		$user->contact_role = $request->get('contact_role', null);
		$user->save();
		return $user;
        }
        
        public static function deleteUsers(Request $request) {
           return self::whereIn('id',$request->get('ids'))->delete();
        }
        
        public static function getUserInfo(Request $request) {
//            dd($request->all());
            return self::where('id',$request->input('id'))->first();
            
        }
        
        public static function changeStatus(Request $request) {
            $data = self::where('id',$request->get('data'))->first();
            if($data->contact_status == 'enable'){ $status = 'disable'; }else{ $status = 'enable'; }
            return self::where('id',$request->get('data'))->update(['contact_status'=>$status]);
        }
        
        public static function updatePassword(Request $request) {
            //return $request->all();
            
            $validate_admin = Self::select('contact_email','contact_password', 'id')
                                ->where('remember_token',$request->get('user_token'))
                                ->first();
            if(!empty($request->get('username'))){
                $validate_admin->contact_password = Hash::make($request->get('new_password'));
                $validate_admin->plain_password= $request->get('new_password');
                $validate_admin->save();
                return $validate_admin;
            }
            else if ($validate_admin && Hash::check(Input::get('current_password'), $validate_admin->contact_password)) {
              $validate_admin->contact_password = Hash::make($request->get('new_password'));
              $validate_admin->plain_password= $request->get('new_password');
              $validate_admin->save();
              return $validate_admin;
            }else{
                return 'Incorrect Credential';
            }
        }
}
