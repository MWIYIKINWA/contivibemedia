<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flyer extends Model
{
    //
    protected $table = 'flyer';
    protected $fillable = [
        'original_name',
        'file_name',
        'file_path',
        'file_size',
    ];

    protected $casts = [
        'file_size' => 'integer',
    ];
}