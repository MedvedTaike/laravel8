<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ShortLinks;
use App\Models\Visits;
use App\Http\Requests\LinkRequest;
use App\Http\Resources\LinkCollection;
use App\Http\Resources\IPResourceCollection;
use Illuminate\Http\Request;

class LinksController extends Controller
{
    public function store(Request $req, LinkRequest $request){

        return ShortLinks::createShortLink($request->validated(), $req);

    }
    public function recordVisit(Request $request , $id){

        return Visits::createVisit($request, $id);

    }
    public function links(){

        return new LinkCollection(ShortLinks::all());
         
    }
    public function stats($id){

        return Visits::getData($id);
    }
    public function ipStat($address){

        return Visits::getVisitsCount('ip_address', $address);

    }
    public function browserStat($browser){
        
        return Visits::getVisitsCount('user_agent', $browser);

    }
}
