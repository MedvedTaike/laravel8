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
        $collection = Visits::where('ip_address', $address)->get();
        $result = $collection->countBy('link_id');
        var_dump($result);
    }
    public function browserStat($browser){
        echo $browser;
    }
}
