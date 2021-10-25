<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class VisitsResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'time' => Carbon::parse($this->created_at)->format('M d, Y h:i:s'),
            'address' => $this->ip_address,
            'browser' => $this->user_agent
        ];
    }
}
