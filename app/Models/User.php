<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Note;
use App\Models\Role;
use App\Models\Permission;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;


class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }


    public  function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }


    public  function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class);
    }


    public function notes(): HasMany
    {
        return $this->hasMany(Note::class);
    }


    public function hasRole($roles)
    {
        return $this->roles()
            ->whereIn('name', (array) $roles)
            ->exists();
    }


    public function hasPermission($permissionName): bool
    {
        // Check if the user directly has the permission
        if ($this->permissions->contains('name', $permissionName)) {
            return true;
        }

        // If not, check through each of the user's roles
        foreach ($this->roles as $role) {
            if ($role->permissions->contains('name', $permissionName)) {
                return true;
            }
        }

        // If neither, return false means no permission
        return false;
    }
}
