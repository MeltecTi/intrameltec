<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CreateServerController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $client = $request->json('client');
        $serverData = $request->json('serverParts');
        $discount = $request->json('discount');
        $total = $request->json('total');
        $yearTotal = $request->json('yearTotal');
        dd($request->json('client'));
    }
}