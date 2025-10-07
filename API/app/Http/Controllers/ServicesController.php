<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ServicesController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except('publicIndex');
    }
    //

    public function publicIndex()
    {
        $services = Services::orderByDesc('id')->get()->map(function ($service) {
            $service->featured_image = asset('storage/' . $service->featured_image);
            return $service;
        });

        return response()->json($services);
    }

    public function index()
    {

        $services = Services::orderByDesc('id')->get();

        return view('pages.services', compact('services'));
    }

    //CREATE SERVICES

    public function create(Request $request)
    {

        $fields = $request->validate([
            'title' => 'required|string|max:40',
            'description' => 'required|string',
            'featured_image' => [
                'nullable',
                'max:1048',
                'dimensions:width=547,height=365'
            ],
        ]);

        $fields['description'] = $request->input('description');


        // Handling image upload
        if ($request->hasFile('featured_image')) {
            $path = $request->file('featured_image')
                ->store('services', 'public');
            $fields['featured_image'] = $path;
        }

        // Assign user_id
        $fields['user_id'] = Auth::id();

        // Create the service
        Services::create($fields);

        return redirect()->route('servicepage')->with('success', 'Service published successfully.');
    }

    //EDIT SERVICES

    public function update(Request $request, Services $service)
    {
        $fields = $request->validate([
            'title' => 'required|string|max:40',
            'description' => 'required|string',
            'featured_image' => [
                'nullable',
                'max:1048',
                'height=365'
            ],
        ]);

        $service->title = $fields['title'];
        $fields['description'] = $request->input('description');

        // Handling image upload
        if ($request->hasFile('featured_image')) {
            // delete old file if exists
            if ($service->featured_image && \Storage::exists($service->featured_image)) {
                \Storage::delete($service->featured_image);
            }

            // store new file
            $path = $request->file('featured_image')->store('services/featured_image', 'public');
            $service->featured_image = $path;
        }

        // Create the service
        $service->update($fields);

        return redirect()->route('servicepage')->with('success', 'Service Updated successfully.');
    }

    //DELETE SERVICES
    public function delete(Services $service)
    {
        $service->delete();
        return redirect()->route('servicepage')->with('success', 'DELETED');
    }
}