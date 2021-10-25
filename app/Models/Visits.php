<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Resources\VisitsCollection;

class Visits extends Model
{
    protected $fillable = ['link_id','ip_address','user_agent'];

    public function link(){

        return $this->belongsTo(ShortLinks::class, 'link_id');

    }

    public static function createVisit($request, $id){
        return self::create([
            'link_id' => $id,
            'ip_address' => $request->ip(),
            'user_agent' => self::getBrowser($request)
        ]);
    }
    public static function getBrowser($request){

        $browser = get_browser($request->header('User-Agent'), true);

        return $browser['browser'];
    }

    public static function getData($id){

        $linksData = new VisitsCollection(self::where('link_id', $id)->get());

        $link = ShortLinks::find($id);

        $data = [
            'links' => $linksData,
            'link' => $link->short_link
        ];

        return $data;
    }

    public static function getVisitsCount($field, $address){

        $collection = self::where($field, $address)->get()->countBy('link_id');

        $result = [];

        foreach($collection as $key => $value){
            $result[$key]['link'] = ShortLinks::find($key)->short_link;
            $result[$key]['count'] = $value;
        }

        return $result;
    }
}
