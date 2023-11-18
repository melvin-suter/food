<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Votelist extends Model
{
    protected $fillable = ['title','type'];
    use HasFactory;

    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }
}
