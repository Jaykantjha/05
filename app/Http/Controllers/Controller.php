<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    public function logContact($data,$type,$addedby,$remark)
    {
        return \App\Models\Log::logContact($data,$type,$addedby,$remark);
    }
    
    public function logDepartment($data,$type,$addedby,$remark)
    {
        return \App\Models\Log::logDepartment($data,$type,$addedby,$remark);
    }
    
}
