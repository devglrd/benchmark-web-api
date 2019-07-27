<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\DB;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function api(){
        return response()->json([
            "status" => 200,
            "message" => "Hello World"
        ]);
    }

    public function getUsers()
    {
        $users = User::all();
        return response()->json([
            "data" => $users
        ]);
    }
}
