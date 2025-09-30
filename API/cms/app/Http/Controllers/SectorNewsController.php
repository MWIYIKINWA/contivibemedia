<?php

namespace App\Http\Controllers;

use App\Models\SectorNews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SectorNewsController extends Controller
{


    public function __construct()
    {
        $this->middleware('auth')->except('publicIndex');
    }


    //public index
    public function publicIndex()
    {
        $news = SectorNews::with('user')
            ->orderByDesc('id')
            ->get()
            ->map(function ($news) {
                $news->featured_image = asset('storage/' . $news->featured_image);

                $news->author_name = $news->user ? $news->user->name : 'Unknown Author';


                unset($news->user);

                return $news;
            });

        return response()->json($news);
    }
    //
    public function index()
    {
        $news = SectorNews::orderByDesc('id')->get();
        return view('pages.sectornews', compact('news'));
    }


    public function create(Request $request)
    {

        $fields = $request->validate([
            'title' => 'required|string|max:300',
            'body' => 'required|string',
            'category' => 'required|string',
            'read_time' => 'required|string',
            'tags' => 'nullable|string',
            'featured_image' => [
                'nullable',
                'image',
                'max:1048',
            ],
        ]);

        try {

            // Handling image upload
            if ($request->hasFile('featured_image')) {
                $path = $request->file('featured_image')
                    ->store('news', 'public');
                $fields['featured_image'] = $path;
            }

            // Assign user_id
            $fields['user_id'] = Auth::id();

            //handling tags
            if ($request->has('tags') && !empty($request->tags)) {
                $fields['tags'] = array_map('trim', explode(',', $request->tags));
            } else {
                $fields['tags'] = null;
            }


            // Create the service
            SectorNews::create($fields);

            return redirect()->route('sectornewspage')->with('success', 'News Post published successfully.');
        } catch (\Throwable $th) {
            return redirect()->route('sectornewspage')->with('danger', 'Something Went Wrong' . $th->getMessage());
        }

    }

    //UPDATE

    public function update(Request $request, SectorNews $news)
    {

        $fields = $request->validate([
            'title' => 'required|string|max:300',
            'body' => 'required|string',
            'category' => 'required|string',
            'read_time' => 'required|string',
            'tags' => 'nullable|string',
            'featured_image' => [
                'nullable',
                'image',
                'max:1048',
            ],
        ]);

        try {
            // Handling image upload
            if ($request->hasFile('featured_image')) {
                $path = $request->file('featured_image')
                    ->store('news', 'public');
                $fields['featured_image'] = $path;
            }

            //handling tags
            if ($request->has('tags') && !empty($request->tags)) {
                $fields['tags'] = array_map('trim', explode(',', $request->tags));
            } else {
                $fields['tags'] = null;
            }


            $news->update($fields);

            return redirect()->route('sectornewspage')->with('success', 'News Post Update .');
        } catch (\Throwable $th) {
            return redirect()->route('sectornewspage')->with('danger', 'Something Went Wrong' . $th->getMessage());
        }

    }

    //DELETE
    public function delete(SectorNews $news)
    {
        $news->delete();
        return redirect()->route('sectornewspage')->with('success', 'DELETED');
    }
}