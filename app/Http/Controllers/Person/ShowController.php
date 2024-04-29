<?php
namespace App\Http\Controllers\Person;

//use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Person;

class ShowController extends Controller
{
	/*
	public function __construct()
	{
			$this->middleware('auth');
	}
	*/
	public function __invoke(Person $person) {
		//$person = 'PROBA!'; // до сраки
		//$proba = array('name' => 'proba', 'age' => '1344', 'job' => 'killer');
		return $person; // так не делают, потом разберемся
	}
}