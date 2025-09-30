<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SectorNews extends Model
{
    //

    use HasFactory;

    protected $table = 'sectornews';

    protected $fillable = [
        'title',
        'category',
        'body',
        'read_time',
        'featured_image',
        'tags',
        'user_id',
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    public function user()
    {

        return $this->belongsTo(User::class, 'user_id');
    }

}