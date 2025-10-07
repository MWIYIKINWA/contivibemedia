<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\FlyerController;
use App\Http\Controllers\UserAdmin;
use App\Http\Controllers\UserAdminController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\PdfDocumentController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//SERVICE ROUTES

Route::get('/service', [App\Http\Controllers\ServicesController::class, 'index'])->name('servicepage');
Route::post('/create_service', [App\Http\Controllers\ServicesController::class, 'create'])->name('create_service')->middleware('auth');
Route::put('/edit_service/{service}', [App\Http\Controllers\ServicesController::class, 'update'])->middleware('auth');
Route::delete('/delete_service/{service}', [App\Http\Controllers\ServicesController::class, 'delete'])->middleware('auth');


//portfolio
Route::get('/portfolio', [App\Http\Controllers\PortfolioController::class, 'index'])->name('portfoliopage');

//SECTOR NEWS ROUTES

Route::get('/sectornews', [App\Http\Controllers\SectorNewsController::class, 'index'])->name('sectornewspage');
Route::post('/create_news', [App\Http\Controllers\SectorNewsController::class, 'create'])->name('create_news')->middleware('auth');
Route::delete('/delete_news/{news}', [App\Http\Controllers\SectorNewsController::class, 'delete'])->middleware('auth');
Route::put('/edit_news/{news}', [App\Http\Controllers\SectorNewsController::class, 'update'])->middleware('auth');

//PORTFOLIO

Route::post('/portfolio', [PortfolioController::class, 'store'])->name('portfolio.store');
Route::delete('/portfolio/image/{id}', [PortfolioController::class, 'destroyImage'])->name('portfolio.image.destroy');
Route::delete('/portfolio/{id}', [PortfolioController::class, 'destroy'])->name('portfolio.destroy');
Route::get('/portfolio/image-count', [PortfolioController::class, 'imageCount'])->name('portfolio.imageCount');

Route::get('/portfolio/{id}/edit', [PortfolioController::class, 'edit'])->name('portfolio.edit');
Route::put('/portfolio/{id}', [PortfolioController::class, 'update'])->name('portfolio.update');


//USER ROUTES
Route::get('/adminuser', [UserAdminController::class, 'index'])->name('adminuser');
Route::post('/create_adminuser', [UserAdminController::class, 'create'])->name('create_adminuser');
Route::put('/edit_adminuser/{user}', [UserAdminController::class, 'update'])->name('edit_adminuser');
Route::delete('/destroy_adminuser/{user}', [UserAdminController::class, 'destroy'])->name('destroy_adminuser');

//PDF

Route::prefix('pdf-document')->name('pdf-document.')->group(function () {
    Route::get('/', [PdfDocumentController::class, 'index'])->name('index');
    Route::post('/', [PdfDocumentController::class, 'store'])->name('store');
    Route::put('/', [PdfDocumentController::class, 'update'])->name('update');
    Route::get('/download', [PdfDocumentController::class, 'download'])->name('download');
    Route::get('/view', [PdfDocumentController::class, 'view'])->name('view');
});

//FLYER

Route::prefix('flyer')->name('flyer.')->group(function () {
    Route::get('/', [FlyerController::class, 'index'])->name('index');
    Route::post('/', [FlyerController::class, 'store'])->name('store');
    Route::get('/download', [FlyerController::class, 'download'])->name('download');

});