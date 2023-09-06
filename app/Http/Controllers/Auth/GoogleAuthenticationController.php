<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthenticationController extends Controller
{
    public function AuthCallback()
    {
        $user = Socialite::driver('google')->user();
        $userExists = User::where('external_id', $user->id)->where('external_auth', 'google')->first();

        if (!$userExists) {
            $newUserByGoogleAuth = User::create([
                'name' => $user->name,
                'email' => $user->email,
                'avatar' => $user->avatar,
                'external_id' => $user->id,
                'external_auth' => 'google',
                'google_access_token' => $user->token,
                'google_refresh_token' => $user->refreshToken,
            ]);

            $newUserByGoogleAuth->assignRole('Usuario corriente');
            $newUserByGoogleAuth->save();
            Auth::login($newUserByGoogleAuth);

            return redirect()->intended(RouteServiceProvider::HOME);
        }

        Auth::login($userExists);

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    public function RegisterGoogleCallback ()
    {
        
    }
}
