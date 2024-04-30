<?php

namespace App\Http\Controllers\Person;

//use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Http\Resources\Person\PersonResource; // добавили
use App\Models\Person;

class ShowController extends Controller
{
	/*
	public function __construct()
	{
			$this->middleware('auth');
	}
	*/
	public function __invoke(Person $person)
	{
		//return $person; // изменили на 
		return new PersonResource($person);
	}
}
