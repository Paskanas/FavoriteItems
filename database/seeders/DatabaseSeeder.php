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

        //users
        for ($i = 1; $i <= 10; $i++) {
            DB::table('users')->insert([
                'name' => "User$i",
                'role' => 1,
                'email' => "user$i@gmail.com",
                'password' => Hash::make('123')
            ]);
        }
        DB::table('users')->insert([
            'name' => "admin",
            'role' => 10,
            'email' => "admin@gmail.com",
            'password' => Hash::make('123')
        ]);

        //Lord of the rings movies
        DB::table('items')->insert([
            'title' => 'The Lord of the Rings: The Fellowship of the Ring',
            'year' => 2001,
            'duration_in_minutes' => 178,
            'type' => 'Movie',
            'genre' => 'Adventure, Drama, Fantasy',
            'imdb' => 8.8
        ]);

        DB::table('items')->insert([
            'title' => 'The Lord of the Rings: The Two Towers',
            'year' => 2002,
            'duration_in_minutes' => 179,
            'type' => 'Movie',
            'genre' => 'Adventure, Drama, Fantasy',
            'imdb' => 8.7
        ]);

        DB::table('items')->insert([
            'title' => 'The Lord of the Rings: The Return of the King',
            'year' => 2003,
            'duration_in_minutes' => 201,
            'type' => 'Movie',
            'genre' => 'Adventure, Drama, Fantasy',
            'imdb' => 8.9
        ]);

        //The Bobbit movies
        DB::table('items')->insert([
            'title' => 'The Hobbit: An Unexpected Journey',
            'year' => 2012,
            'duration_in_minutes' => 169,
            'type' => 'Movie',
            'genre' => 'Adventure, Fantasy',
            'imdb' => 7.8
        ]);

        DB::table('items')->insert([
            'title' => 'The Hobbit: The Desolation of Smaug',
            'year' => 2013,
            'duration_in_minutes' => 161,
            'type' => 'Movie',
            'genre' => 'Adventure, Fantasy',
            'imdb' => 7.8
        ]);

        DB::table('items')->insert([
            'title' => 'The Hobbit: The Battle of the Five Armies',
            'year' => 2014,
            'duration_in_minutes' => 144,
            'type' => 'Movie',
            'genre' => 'Adventure, Fantasy',
            'imdb' => 7.4
        ]);


        //most watched movies
        DB::table('items')->insert([
            'title' => 'Avengers: Endgame',
            'year' => 2019,
            'duration_in_minutes' => 181,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Sci-Fi',
            'imdb' => 8.4
        ]);

        DB::table('items')->insert([
            'title' => 'Avatar',
            'year' => 2009,
            'duration_in_minutes' => 162,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Fantasy',
            'imdb' => 7.8
        ]);

        DB::table('items')->insert([
            'title' => 'Titanic',
            'year' => 1997,
            'duration_in_minutes' => 194,
            'type' => 'Movie',
            'genre' => 'Drama, Romance',
            'imdb' => 7.8
        ]);

        DB::table('items')->insert([
            'title' => 'Star Wars: Episode VII - The Force Awakens',
            'year' => 2015,
            'duration_in_minutes' => 138,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Sci-Fi',
            'imdb' => 7.8
        ]);

        DB::table('items')->insert([
            'title' => 'Avengers: Infinity War',
            'year' => 2018,
            'duration_in_minutes' => 149,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Sci-Fi',
            'imdb' => 8.4
        ]);

        DB::table('items')->insert([
            'title' => 'Jurassic World',
            'year' => 2015,
            'duration_in_minutes' => 124,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Sci-Fi',
            'imdb' => 7.0
        ]);

        DB::table('items')->insert([
            'title' => 'The Lion King',
            'year' => 2019,
            'duration_in_minutes' => 118,
            'type' => 'Movie',
            'genre' => 'Animation, Adventure, Drama',
            'imdb' => 6.9
        ]);

        DB::table('items')->insert([
            'title' => 'The Avengers',
            'year' => 2012,
            'duration_in_minutes' => 143,
            'type' => 'Movie',
            'genre' => 'Action, Adventure, Sci-Fi',
            'imdb' => 8.0
        ]);

        //TV shows
        DB::table('items')->insert([
            'title' => 'Breaking Bad',
            'year' => 2008,
            'duration_in_minutes' => 49,
            'type' => 'TV Show',
            'genre' => 'Crime, Drama, Thriller',
            'imdb' => 9.5
        ]);

        DB::table('items')->insert([
            'title' => 'Game of Thrones',
            'year' => 2011,
            'duration_in_minutes' => 57,
            'type' => 'TV Show',
            'genre' => 'Action, Adventure, Drama',
            'imdb' => 9.2
        ]);

        DB::table('items')->insert([
            'title' => 'The Sopranos',
            'year' => 1999,
            'duration_in_minutes' => 55,
            'type' => 'TV Show',
            'genre' => 'Crime, Drama',
            'imdb' => 9.2
        ]);

        DB::table('items')->insert([
            'title' => 'The Wire',
            'year' => 2002,
            'duration_in_minutes' => 59,
            'type' => 'TV Show',
            'genre' => 'Crime, Drama, Thriller',
            'imdb' => 9.3
        ]);

        DB::table('items')->insert([
            'title' => 'Friends',
            'year' => 1994,
            'duration_in_minutes' => 22,
            'type' => 'TV Show',
            'genre' => 'Comedy, Romance',
            'imdb' => 8.9
        ]);

        DB::table('items')->insert([
            'title' => 'Stranger Things',
            'year' => 2016,
            'duration_in_minutes' => 51,
            'type' => 'TV Show',
            'genre' => 'Drama, Fantasy, Horror',
            'imdb' => 8.7
        ]);

        DB::table('items')->insert([
            'title' => 'Chernobyl',
            'year' => 2019,
            'duration_in_minutes' => 60,
            'type' => 'TV Show',
            'genre' => 'Drama, History, Thriller',
            'imdb' => 9.4
        ]);

        DB::table('items')->insert([
            'title' => 'The Crown',
            'year' => 2016,
            'duration_in_minutes' => 58,
            'type' => 'TV Show',
            'genre' => 'Biography, Drama, History',
            'imdb' => 8.7
        ]);

        DB::table('items')->insert([
            'title' => 'The Office',
            'year' => 2005,
            'duration_in_minutes' => 22,
            'type' => 'TV Show',
            'genre' => 'Comedy',
            'imdb' => 8.9
        ]);
    }
}
