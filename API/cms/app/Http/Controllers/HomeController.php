<?php

namespace App\Http\Controllers;

use App\Models\PortfolioImage;
use App\Models\SectorNews;
use App\Models\Services;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $serviceCount = Services::count();
        $newsPostCount = SectorNews::count();
        $portfolioCount = PortfolioImage::count();

        return view('home', compact('serviceCount', 'newsPostCount', 'portfolioCount'));
    }
}