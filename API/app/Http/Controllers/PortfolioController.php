<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\PortfolioImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PortfolioController extends Controller
{

    //public index
    public function publicIndex()
    {
        $portfolios = Portfolio::with('images')->orderByDesc('id')->get()->map(function ($portfolio) {

            return [
                'id' => $portfolio->id,
                'event_title' => $portfolio->event_title,
                'description' => $portfolio->description,
                'images' => $portfolio->images->map(function ($image) {
                    return [
                        'id' => $image->id,
                        'image_url' => asset('storage/' . $image->image_path),
                        // 'image_path' => $image->image_path
                    ];
                }),
                'created_at' => $portfolio->created_at,
                'updated_at' => $portfolio->updated_at
            ];
        });

        return response()->json($portfolios);
    }

    public function index()
    {
        $portfolios = Portfolio::with('images')->orderBy('created_at', 'desc')->get();
        return view('pages.portfolio', compact('portfolios'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'event_title' => 'required|string|max:255',
            'description' => 'required|string|max:100',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);

        // Create portfolio
        $portfolio = Portfolio::create([
            'event_title' => $request->event_title,
            'description' => $request->description
        ]);

        // Handle image uploads
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagePath = $image->store('portfolio-images', 'public');

                PortfolioImage::create([
                    'portfolio_id' => $portfolio->id,
                    'image_path' => $imagePath
                ]);
            }
        }

        return redirect()->route('portfoliopage')->with('success', 'Portfolio added successfully!');
    }

    public function destroyImage($id)
    {
        $image = PortfolioImage::findOrFail($id);

        // Delete image from storage
        Storage::disk('public')->delete($image->image_path);

        // Delete image record from database
        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully!');
    }

    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);

        // Delete all associated images
        foreach ($portfolio->images as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        // Delete portfolio
        $portfolio->delete();

        return redirect()->back()->with('success', 'Portfolio deleted successfully!');
    }


    public function edit($id)
    {
        $portfolio = Portfolio::with('images')->findOrFail($id);
        return view('pages.portfolio-edit', compact('portfolio'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'event_title' => 'required|string|max:255',
            'description' => 'required|string|max:256',
            'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);

        $portfolio = Portfolio::findOrFail($id);

        // Update portfolio details
        $portfolio->update([
            'event_title' => $request->event_title,
            'description' => $request->description
        ]);

        // Handle new image uploads
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagePath = $image->store('portfolio-images', 'public');

                PortfolioImage::create([
                    'portfolio_id' => $portfolio->id,
                    'image_path' => $imagePath
                ]);
            }
        }

        return redirect()->route('portfoliopage')->with('success', 'Portfolio updated successfully!');
    }


}