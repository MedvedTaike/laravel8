<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Request;

class LinkResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'link' => $this->short_link,
            'full' => $this->full_link,
            'count' => $this->visits()->count()
        ];
    }
}
