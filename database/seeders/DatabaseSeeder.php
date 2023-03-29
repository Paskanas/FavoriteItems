<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        //users
        for ($i = 1; $i <= 10; $i++) {
            DB::table('users')->insert([
                'name' => "User$i",
                'role' => 1,
                'email' => "user$i@gmail.com",
                'password' => Hash::make('123')
            ]);
        }

        //items
        DB::table('items')->insert([
            'title' => 'The Lord of the Rings: The Fellowship of the Ring',
            // 'user_id' => 1,
            'year' => 2001,
            'duration_in_minutes' => 178,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Drama'
        ]);
        DB::table('items')->insert([
            'title' => 'The Lord of the Rings: The Two Towers',
            // 'user_id' => 1,
            'year' => 2002,
            'duration_in_minutes' => 179,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Drama'
        ]);
        DB::table('items')->insert([
            'title' => 'The Lord of the Rings: The Return of the King',
            // 'user_id' => 1,
            'year' => 2003,
            'duration_in_minutes' => 201,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Drama'
        ]);
        DB::table('items')->insert([
            'title' => 'The Hobbit: An Unexpected Journey',
            // 'user_id' => 1,
            'year' => 2012,
            'duration_in_minutes' => 169,
            'type' => 'Movie',
            'genre' => 'Fantasy'
        ]);
        DB::table('items')->insert([
            'title' => 'The Hobbit: The Desolation of Smaug',
            // 'user_id' => 1,
            'year' => 2013,
            'duration_in_minutes' => 161,
            'type' => 'Movie',
            'genre' => 'Fantasy'
        ]);
        DB::table('items')->insert([
            'title' => 'The Hobbit: The Battle of the Five Armies',
            // 'user_id' => 1,
            'year' => 2014,
            'duration_in_minutes' => 144,
            'type' => 'Movie',
            'genre' => 'Adventure, Fantasy'
        ]);
    }
}
