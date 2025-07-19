<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $users = User::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function register_user(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',

            'role_ids' => 'required|array',
            'role_ids.*' => 'exists:roles,id',

            'permission_ids' => 'nullable|array',
            'permission_ids.*' => 'exists:permissions,id',
        ]);

        // Create the user
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
        ]);

        // Attach roles
        $user->roles()->attach($validated['role_ids']);

        // Attach permissions if provided
        if (!empty($validated['permission_ids'])) {
            $user->permissions()->attach($validated['permission_ids']);
        }

        return response()->json([
            'message' => 'User registered successfully.',
            'user' => $user->load('roles', 'permissions')
        ], 201);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
