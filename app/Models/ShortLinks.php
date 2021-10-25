<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ShortLinks extends Model
{
    protected $tablename = 'short_links';
    
    protected $fillable = ['short_link', 'full_link'];

    public $timestamps = false;

    public static function createShortLink($link, $req){
        
        $domain = $req->root();

        return self::create([
            'short_link' => $domain .'/'. str_random(8),
            'full_link' => $link['full_link']
        ]);

    }
    public function visits(){

        return $this->hasMany(Visits::class, 'link_id');

    }

}
