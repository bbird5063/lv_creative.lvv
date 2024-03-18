<?php
namespace App\Http\Controllers\Person;

//use Illuminate\Http\Request;
use App\Http\Requests\Person\StoreRequest;

use App\Http\Controllers\Controller;
use App\Models\Person;

class StoreController extends Controller 
{
	/*
	public function __construct()
	{
			$this->middleware('auth');
	}
	*/
	public function __invoke(StoreRequest $request) {

		$data = $request->validated();
		$person = Person::create($data);
		return $person; // при ассинхронных запросах мы должны данные вернуть назад
	}
}
