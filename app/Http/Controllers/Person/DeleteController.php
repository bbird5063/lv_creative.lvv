<?php
namespace App\Http\Controllers\Person;

//use Illuminate\Http\Request;
//use App\Http\Requests\Person\UpdateRequest;

use App\Http\Controllers\Controller;
use App\Models\Person;

class DeleteController extends Controller 
{
	/*
	public function __construct()
	{
			$this->middleware('auth');
	}
	*/
	public function __invoke(Person $person) {
		$person->delete();
		return response([]); // 2 аргумент статус (можно 404, по умолчанию - 200 все Ок)
	}
}
