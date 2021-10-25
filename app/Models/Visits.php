<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Visits extends Model
{
    protected $fillable = ['link_id','ip_address','user_agent'];

    public function link(){

        return $this->belongsTo(ShortLinks::class, 'id');

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
}
