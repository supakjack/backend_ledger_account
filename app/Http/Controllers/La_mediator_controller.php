<?php

namespace App\Http\Controllers;

use App\Da_la_mediator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class La_mediator_controller extends Controller
{
    /**
     * Create a new controller for Da_la_mediator.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getAll()
    {
        $data = Da_la_mediator::all();
        return $this->responseSuccess($data);
    }

    public function getID($id)
    {
        $data = Da_la_mediator::where('lam_id', $id)->first();
        return $this->responseSuccess($data);
    }

    public function addData(Request $request)
    {
        $data = new Da_la_mediator();
        $data->name = $request->name;
        $data->age = $request->age;
        $data->tel = $request->tel;

        if ($data->save()) {
            return $this->responseSuccess($data);
        }
    }

    public function updateData(Request $request, $id)
    {
        $data = Da_la_mediator::where('lam_id', $id)->first();
        $data->name = $request->name;
        $data->age = $request->age;
        $data->tel = $request->tel;
        if ($data->save()) {
            return $this->responseSuccess($data);
        }
    }

    public function deleteData($id)
    {
        $data = Da_la_mediator::where('lam_id', $id)->delete();
        return $this->responseSuccess($data);
    }

    protected function responseSuccess($res)
    {
        return response()->json(["status" => "success", "data" => $res], 200)
            ->header("Access-Control-Allow-Origin", "*")
            ->header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    }

    public function testsql()
    {
        //Middleware to control parameters later

        $results = DB::select(
            'SELECT * FROM la_mediator'
        );

        // return Response::json($results);
        return  response()->json(['data'=>$results]);
    }
}
