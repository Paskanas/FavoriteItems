<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RoleControl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {

        $userRole = $request->user()?->role ?? 0;
        if ($role === 'admin') {
            if ($userRole < 10) {
                abort(401);
            }
        }
        if ($role === 'user') {
            if ($userRole < 1) {
                abort(401);
            }
        }
        return $next($request);
    }
}
