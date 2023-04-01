<?php

namespace App\Http\Controllers;

use App\Models\FavoriteItem;
use Illuminate\Http\Request;

class FavoriteItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($userId)
    {
        $favoriteItemsIds = FavoriteItem::where('user_id', $userId)->get();
        $favoriteItems = [];
        foreach ($favoriteItemsIds as $favoriteItemId) {
            $favoriteItems = [...$favoriteItems, $favoriteItemId->item];
        }

        return response()->json($favoriteItems);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $itemId = $request->itemId;
        $userId = $request->userId;

        $favoriteItem = new FavoriteItem;
        $favoriteItem->item_id = $itemId;
        $favoriteItem->user_id = $userId;
        $favoriteItem->save();
        return response()->json(['message' => "Item added successfuly with id $itemId to user $userId"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $userId, int $itemId)
    {
        $favoriteItem = FavoriteItem::where('user_id', $userId)
            ->where('item_id', $itemId)
            ->first();
        if ($favoriteItem) {
            $favoriteItem->delete();
        }
        return response()->json(['success' => true]);
    }
}
