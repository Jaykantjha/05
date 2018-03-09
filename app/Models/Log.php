<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class Log extends Model {
	/**
	 * [$table model defined table]
	 * @var string
	 */
	
        
	public function setTable($table)
        {
            $this->table = $table;
            return $this;
        }
        
        public static function logContact($data,$type,$addedby,$remark) {
                $client =  new Log;
                $client -> setTable('contacts_log');
                $client -> id = str_random(36);
                $client -> contact_userid  = $data->contact_userid;
                $client -> contact_username = $data->contact_username;
                $client -> contact_role = $data->contact_role;
                $client -> contact_department = $data->contact_userdepartment;
                $client -> action_type = $type;  //update or add
                $client -> action_by = $addedby;
                $client -> remark = $remark;    
                $client -> created_at = $data->created_at;
                $client -> save();
		return $data;
        }
        
        public static function logDepartment($data,$type,$addedby,$remark) {
                $department =  new Log;
                $department -> setTable('departments_log');
                $department -> id = str_random(36);
                $department -> department_name  = $data->department_name;
                $department -> action_type = $type;  //update or add
                $department -> action_by = $addedby;
                $department -> remark = $remark;    
                $department -> created_at = $data->created_at;
                $department -> save();
		return $data;
        }

        
        
        
}
