<?php

namespace App\Models;

use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class FormControl extends Model {
	protected $table = 'form_controls';
        public $incrementing = false;

	
        public static function manageFormControl(Request $request) {
            $array =$request->all();
            $filtered = array_except($array, ['controltype','user_token']);

            $form = self::where('control_parent',$request->get('controltype'))->first();
           
            if (is_null($form)) {
                // It does not exist 
            } else {
                 $formControl = self::where('control_parent',$request->get('controltype'))->delete();
            }
            foreach ($filtered as $key => $value) {
                    $_this = new Self;
                    $_this->id = str_random(32);
                    $_this->control_parent = $request->get('controltype');
                    $_this->control_name = $key;
                    $_this->control_value = $value;
                    $_this->save();
            }
            
            return $_this;
        }
        
        public static function getUsersFormControl(Request $request) {
            $data= self::where('control_parent','user')->pluck('control_value','control_name','id');
            $data['controltype']='user';
            return $data;
            
        }
       
}
