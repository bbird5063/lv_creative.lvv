<?php
namespace App\Http\Controllers\Person;

//use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Person;

class IndexController extends Controller
{
	/*
	public function __construct()
	{
			$this->middleware('auth');
	}
	*/
	public function __invoke() {

		$people = Person::all();
		return $people;
	}
}
