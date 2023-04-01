<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use Illuminate\Support\Facades\Validator;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::all();
        return response()->json($items);
    }

    public function edit($itemId)
    {
        $item = Item::where('id', $itemId)->first();
        return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'title' => 'required|string|max:255',
                'year' => 'required|numeric|min:1900|max:' . (date('Y') + 1),
                'genre' => 'required|string|max:255',
                'duration' => 'required|numeric|min:1|max:999',
                'imdb' => [
                    'required',
                    'numeric'
                ]
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors(),
            ], 422);
        }

        if ($request->title) {
            $item->title = $request->title;
        }
        if ($request->year) {
            $item->year = $request->year;
        }
        if ($request->genre) {
            $item->genre = $request->genre;
        }
        if ($request->duration) {
            $item->duration_in_minutes = $request->duration;
        }
        if ($request->imdb) {
            $item->imdb = $request->imdb;
        }

        $item->save();
        return response()->json(['success' => true]);
    }

    /**
     * Update the image resource in storage.
     */
    public function updateImage(Request $request, Item $item)
    {
        if ($request->image_url) {
            $item->img_url = $request->image_url;
        } else {
            $item->img_url = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';
        }

        $item->save();
        return response()->json([
            'message' => "Item updated successfuly with id $item->id to img_url $item->img_url",
            'imgUrl' => $item->img_url
        ]);
    }
}
