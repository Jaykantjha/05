<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class Department extends Model {
	/**
	 * [$table model defined table]
	 * @var string
	 */
	protected $table = 'departments';
        public $incrementing = false;
	
        
        public static function getDepartments(Request $request) {
             
		if ($request->get('department_name')) {
			return self::where('department_name', 'like', '%' . $request->get('department_name') . '%');
		}
                $data= self::select('department_name','id')->get();
		return $data;
        }


        public static function manageDepartment(Request $request) {
            if(!empty($request->get('id'))){
                $departmentID=$request->get('id');
                $_this= self::where('id',$departmentID)->first();
                $_this->department_name = $request->get('department_name');
                $_this->save();
                return $_this;
            }else{
                $departmentID = str_random(36);
                $_this = new Self;
                $_this->id = str_random(36);
                $_this->department_name = $request->get('department_name');
                $_this->save();
                return $_this;
            }
        }
       
        public static function getDepartmentInfo(Request $request) {
            $department = self::where('id',$request->get('data'))->first();
            return $department;
        }
        
        
        
}
