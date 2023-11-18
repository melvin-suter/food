<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


class Space extends Model
{

    protected $fillable = ['title', 'slug', 'description'];
    
    use HasFactory;

    public function votelists(): HasMany
    {
        return $this->hasMany(Votelist::class);
    }
}
