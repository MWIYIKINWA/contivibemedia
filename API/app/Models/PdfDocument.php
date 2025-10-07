<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PdfDocument extends Model
{
    protected $table = 'pdf_documents';
    protected $fillable = [
        'original_name',
        'file_name',
        'file_path',
        'file_size',
        'mime_type'
    ];

    protected $casts = [
        'file_size' => 'integer',
    ];
}