<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Note extends Pivot
{
    protected $fillable = [
        'title',
        'body',
        'user_id',
    ];
}
