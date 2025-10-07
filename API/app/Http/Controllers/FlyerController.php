<?php
// FlyerController.php
namespace App\Http\Controllers;

use App\Models\Flyer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FlyerController extends Controller
{
    public function publicIndex()
    {
        $flyer = Flyer::first();

        if (!$flyer) {
            return response()->json([
                'message' => 'Flyer not found'
            ], 404);
        }

        $flyer->file_url = asset('storage/' . $flyer->file_path);

        return response()->json([
            'file_name' => $flyer->file_name,
            'file_url' => $flyer->file_url,
            'file_size' => $flyer->file_size,
        ]);
    }

    public function index()
    {
        $flyer = Flyer::first();
        return view('pages.flyer', compact('flyer'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'pdf_file' => 'required|file|mimes:pdf,jpg,jpeg,png,webp|max:10240' // 10MB max
        ]);


        $flyer = Flyer::first();
        if (!$flyer) {
            $flyer = new Flyer();
        }

        // Delete old file if exists
        if ($flyer->file_path && Storage::disk('public')->exists($flyer->file_path)) {
            Storage::disk('public')->delete($flyer->file_path);
        }

        // Store new file
        $file = $request->file('pdf_file');
        $fileName = time() . '_' . $file->getClientOriginalName();
        $filePath = $file->storeAs('flyers', $fileName, 'public');

        // Update flyer record
        $flyer->original_name = $file->getClientOriginalName();
        $flyer->file_name = $fileName;
        $flyer->file_path = $filePath;
        $flyer->file_size = $file->getSize();
        $flyer->save();

        return redirect()->route('flyer.index')->with('success', 'Flyer uploaded successfully!');
    }

    public function download()
    {
        $flyer = Flyer::firstOrFail();

        if (!Storage::disk('public')->exists($flyer->file_path)) {
            abort(404);
        }

        return Storage::disk('public')->download($flyer->file_path, $flyer->original_name);
    }
}