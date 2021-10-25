<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ShortLinks;
use App\Models\Visits;
use App\Http\Requests\LinkRequest;
use App\Http\Resources\LinkCollection;
use Illuminate\Http\Request;

class LinksController extends Controller
{
    public function store(Request $req, LinkRequest $request){
        
        $domain = $req->root();

        return ShortLinks::createShortLink($request->validated(), $domain);

    }
    public function recordVisit(Request $request , $id){

        return Visits::createVisit($request, $id);

    }
    public function links(){

        return new LinkCollection(ShortLinks::all());
         
    }
    public function show($id){
        echo $id;
    }
    public function ipStat($address){
        echo $address;
    }
    public function visits($id){
        echo $id;
    }
}
