<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Models\ShortLinks;

class VisitsCollection extends ResourceCollection
{
 
    public function toArray($request)
    {
        return [
            'data' => $this->collection
        ];
    }
}
