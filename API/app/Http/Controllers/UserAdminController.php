<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class UserAdminController extends Controller
{


    public function index()
    {
        $users = User::orderBy('id')->get();
        return view('pages.users', compact('users'));
    }


    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone_number' => ['nullable', 'string', 'max:20'],
            'role' => ['required', 'in:admin,author,inactive'],
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        // Generating random passwords
        $randomPassword = Str::random(10);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone,
            'password' => Hash::make($randomPassword),
            'role' => $request->role,
        ]);

        return redirect()->route('adminuser')
            ->with('success', "User created successfully! Name:{$request->name}, Email: {$request->email}, Password: {$randomPassword}");
    }

    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,' . $user->id],
            'phone_number' => ['nullable', 'string', 'max:20'],
            'role' => ['required', 'in:admin,author,inactive'],
        ]);

        if ($user->name == 'Admin User') {
            return redirect()->route('adminuser')
                ->with('danger', 'You cannot edit this account.');
        }

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'role' => $request->role,
        ]);

        return redirect()->route('adminuser')
            ->with('success', 'User updated successfully!');
    }


    public function destroy($id)
    {
        if ($id == auth()->id()) {
            return redirect()->route('adminuser')
                ->with('danger', 'You cannot delete your own account.');
        }


        $user = User::findOrFail($id);

        if ($user->name == 'Admin User') {
            return redirect()->route('adminuser')
                ->with('danger', 'You cannot delete this account.');
        }

        if ($user->userNewsPosts()->exists()) {
            return redirect()->route('adminuser')
                ->with('danger', 'Cannot delete user with published sector news.');
        }

        $user->delete();

        return redirect()->route('adminuser')
            ->with('success', 'User deleted successfully!');
    }


}