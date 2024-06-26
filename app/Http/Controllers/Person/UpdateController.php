<?php
namespace App\Http\Controllers\Person;

//use Illuminate\Http\Request;
use App\Http\Requests\Person\UpdateRequest;

use App\Http\Controllers\Controller;
use App\Models\Person;

class UpdateController extends Controller 
{
	/*
	public function __construct()
	{
			$this->middleware('auth');
	}
	*/
	public function __invoke(UpdateRequest $request, Person $person) {

		$data = $request->validated();
		$person->update($data);
		//return $person;
		return response([]); // возвращаем пустой массив
	}
}
