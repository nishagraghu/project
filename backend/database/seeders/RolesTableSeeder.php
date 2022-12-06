<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            'role_name' => 'author',
            'role_slug' => 'author',
        ]);
        
        DB::table('roles')->insert([
            'role_name' => 'editor',
            'role_slug' => 'editor',
        ]);
        
        DB::table('roles')->insert([
            'role_name' => 'subscriber',
            'role_slug' => 'subscriber',
        ]);
        DB::table('roles')->insert([
            'role_name' => 'administrator',
            'role_slug' => 'administrator',
        ]);
    }
}
