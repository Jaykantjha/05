<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class Role extends Model {
	/**
	 * [$table model defined table]
	 * @var string
	 */
	protected $table = 'rolepermission';
        public $incrementing = false;
	
        
        public static function getRoleControl(Request $request) {
//            if(empty($request->get('ac_type'))){
//                $data = Self::where('visibility','1'); //send ac_type as request for admin
//            }else{
//                $data = Self::where('visibility','0');  
//            }
            //$data= $data->select('right_name','right_value', 'id')->get();
            $data =  DB::select( DB::raw("SELECT
                    SUBSTRING_INDEX(`right_value`, ',', 1) AS `first`,
                    SUBSTRING_INDEX(`right_value`, ',', -1) AS `last`,`right_name`,`id`,title from `rights`"));
            return $data;
	}
        
        public static function manageRole(Request $request) {
           
            if(!empty($request->get('id'))){
                $roleID=$request->get('id');
                $roleName= DB::table('roles')->where('id',$roleID)->update(
                    ['role_name' => $request->get('rolename')]
                );
            }else{
                 $roleID = str_random(36);
                 $roleName= DB::table('roles')->insert(
                    ['id' => $roleID,'role_name' => $request->get('rolename')]
                 );
            }
            $result = self::where('role_id', '=', $roleID)->exists();
            if($result){
               $result = self::where('role_id', '=', $roleID)->delete(); 
            } 
            $array =$request->all();
            $filtered = array_except($array, ['rolename','user_token','id']);
            foreach ($filtered as $key => $value) {
                    $_this = new Self;
                    $_this->id = str_random(36);
                    $_this->role_id = $roleID;
                    $_this->permission_name = $key;
                    $_this->permission_value = $value;
                    $_this->save();
            }
            return $_this;
        }
        
        public static function getRole(Request $request) {
             $data = DB::table('roles')->get();
             return $data;
        }
        
        public static function getRoleInfo(Request $request) {
            $rolePermission = self::where('role_id',$request->get('info'))->get();
            return $rolePermission;
        }
        
        
        
}
