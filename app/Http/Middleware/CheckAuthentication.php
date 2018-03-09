<?php

namespace App\Http\Middleware;

use Closure;

class CheckAuthentication {

	public function handle($request, Closure $next) {
			if (\App\Models\Contacts::where('remember_token', $request->get('user_token'))->exists()) {
				return $next($request);
			} else {
				return response()->json(getResponse(null, 'You are not authorized', '-1', null))->setStatusCode(401);
			}
                

	}
}
