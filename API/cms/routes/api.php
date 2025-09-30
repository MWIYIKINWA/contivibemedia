<?php

use App\Http\Controllers\PdfDocumentController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\SectorNewsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServicesController;

Route::get('/public/services', [ServicesController::class, 'publicIndex']);
Route::get('/public/sectornews', [SectorNewsController::class, 'publicIndex']);
Route::get('/public/portfolio', [PortfolioController::class, 'publicIndex']);
Route::get('/public/getpdf', [PdfDocumentController::class, 'publicIndex']);