<?php

namespace App\Http\Controllers;

use App\Models\PdfDocument;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PdfDocumentController extends Controller
{
    public function publicIndex()
    {
        $pdf = PdfDocument::first();

        if (!$pdf) {
            return response()->json([
                'message' => 'PDF document not found'
            ], 404);
        }


        $pdf->file_url = asset('storage/' . $pdf->file_path);

        return response()->json([
            'file_name' => $pdf->file_name,
            'file_url' => $pdf->file_url,
            'file_size' => $pdf->file_size,

        ]);
    }
    public function index()
    {
        $document = PdfDocument::first();
        return view('pages.pdf', compact('document'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'pdf_file' => 'required|file|mimes:pdf|max:10240' // 10MB max
        ]);

        // Delete existing file if it exists
        $existingDocument = PdfDocument::first();
        if ($existingDocument) {
            Storage::delete($existingDocument->file_path);
            $existingDocument->delete();
        }

        // Store new file
        $file = $request->file('pdf_file');
        $filePath = $file->store('pdf-documents', 'public');

        PdfDocument::create([
            'original_name' => $file->getClientOriginalName(),
            'file_name' => $file->hashName(),
            'file_path' => $filePath,
            'file_size' => $file->getSize(),
            'mime_type' => $file->getMimeType(),
        ]);

        return redirect()->route('pdf-document.index')
            ->with('success', 'Portfolio uploaded successfully.');
    }

    public function update(Request $request)
    {
        $request->validate([
            'pdf_file' => 'required|file|mimes:pdf|max:10240'
        ]);

        $document = PdfDocument::firstOrFail();

        // Delete old file
        Storage::delete($document->file_path);

        // Store new file
        $file = $request->file('pdf_file');
        $filePath = $file->store('pdf-documents', 'public');

        $document->update([
            'original_name' => $file->getClientOriginalName(),
            'file_name' => $file->hashName(),
            'file_path' => $filePath,
            'file_size' => $file->getSize(),
            'mime_type' => $file->getMimeType(),
        ]);

        return redirect()->route('pdf-document.index')
            ->with('success', 'PDF document updated successfully.');
    }

    public function download()
    {
        $document = PdfDocument::firstOrFail();

        return Storage::disk('public')->download($document->file_path, $document->original_name);
    }

    public function view()
    {
        $document = PdfDocument::firstOrFail();

        return response()->file(
            Storage::disk('public')->path($document->file_path),
            ['Content-Type' => 'application/pdf']
        );
    }
}