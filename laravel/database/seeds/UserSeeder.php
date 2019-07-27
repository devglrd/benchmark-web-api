<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 500; $i++) {
            $faker = \Faker\Factory::create();
            DB::table('users')->insert([
                "name" => $faker->name,
                "email" => $faker->email,
                "password" => bcrypt("password")
            ]);
        }
    }
}
