<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class MoodleProxy
{
    public function handle(Request $request, Closure $next)
    {
        header("Access-Control-Allow-Origin: https://internal.meltec.com.co");
        header("Access-Control-Allow-Credentials: true");
        return $next($request);
    }
}
