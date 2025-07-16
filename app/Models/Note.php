<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Note extends Pivot
{
    use HasFactory ;
    
    protected $fillable = [
        'title',
        'body',
        'user_id',
    ];
}
