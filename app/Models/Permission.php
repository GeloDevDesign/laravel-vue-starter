<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use App\Models\Role;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;


class Permission extends Model
{
    //

    protected $fillable = [
        'name',
    ];


    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_permission');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'permission_role');
    }
}
