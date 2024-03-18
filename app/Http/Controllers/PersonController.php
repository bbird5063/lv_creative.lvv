<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonController extends Controller
{
	
	public function __construct()
	{
			$this->middleware('auth');
	}
	/*
	public function __invoke() {
		$persons = [
			[
				'name' => 'Vasya',
				'age' => 20,
				'job' => 'coach',
			],
			[
				'name' => 'Petr',
				'age' => 34,
				'job' => 'coach',
			],
			[
				'name' => 'Ivan',
				'age' => 32,
				'job' => 'devoloper',
			],
		];

		return $persons;
	}*/
}
