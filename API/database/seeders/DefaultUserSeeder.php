<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class DefaultUserSeeder extends Seeder
{
    public function run()
    {
        User::updateOrCreate(
            ['email' => 'admin@contivibe.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('admin1234'),
                'role' => 'admin',
                'phone_number' => '0783694161',
                'email_verified_at' => now(),
            ]
        );



    }
}