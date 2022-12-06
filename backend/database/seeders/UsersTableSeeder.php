<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'role_id' => '1',
            'name' => 'sam',
            'email' => 'sam@gmail.com',
            'password' => bcrypt('sam@gmail.com'),
        ]);
        
        DB::table('users')->insert([
            'role_id' => '2',
            'name' => 'nishag',
            'email' => 'nishag@gmail.com',
            'password' => bcrypt('nishag@gmail.com'),
        ]);
        
        DB::table('users')->insert([
            'role_id' => '3',
            'name' => 'sachin',
            'email' => 'sachin@gmail.com',
            'password' => bcrypt('sachin@gmail.com'),
        ]);
    }
}
