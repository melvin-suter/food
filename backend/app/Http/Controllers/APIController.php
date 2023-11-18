<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Space;
use App\Models\Votelist;
use App\Models\Vote;
use Illuminate\Validation\Rule;

class APIController extends Controller
{
    public function getSpace($slug) {
        $space = Space::where('slug',$slug)->first();
        if(!$space) {
            return response()->json([]);
        }

        return response()->json($space);
    }

    public function postSpace(Request $request){
        $validated = $request->validate([
            'slug' => 'required|lowercase|alpha_dash:ascii|unique:spaces|max:255',
            'title' => 'required|max:255',
            'description' => 'string',
        ]);

        $space = Space::create($validated);

        return response()->json($space);
    }


    public function getLists($id) {
        $space = Space::find($id);
        if(!$space) {
            return response()->json([]);
        }

        $list = $space->votelists()->get();
        if(!$list) {
            return response()->json([]);
        }

        return response()->json($list);
    }

    public function postList(Request $request, $id){
        $space = Space::find($id);
        if(!$space) {
            return response()->json([]);
        }

        $validated = $request->validate([
            'title' => 'required|max:255',
            'type' => ['required', Rule::in(['vote','list'])],
        ]);

        $list = new Votelist($validated);
        $space->votelists()->save($list);

        return response()->json($list);
    }


    public function getVotes($spaceid,$listid) {
        $space = Space::find($spaceid);
        if(!$space) {
            return response()->json([]);
        }

        $list = $space->votelists()->where('id', $listid)->first();
        if(!$list) {
            return response()->json([]);
        }

        $votes = $list->votes()->get();

        return response()->json($votes);
    }

    public function deleteList(Request $request, $spaceid,$listid){
        $space = Space::find($spaceid);
        if(!$space) {
            return response()->json(["error" => "space not found"]);
        }

        $list = $space->votelists()->where('id', $listid)->first();
        if(!$list) {
            return response()->json(["error" => "list not found"]);
        }
        
        
        $list->delete();

        return response()->json(["success" => "ok"]);
    }

    public function deleteVote(Request $request, $spaceid,$listid, $voteid){
        $space = Space::find($spaceid);
        if(!$space) {
            return response()->json(["error" => "space not found"]);
        }

        $list = $space->votelists()->where('id', $listid)->first();
        if(!$list) {
            return response()->json(["error" => "list not found"]);
        }

        $vote = $list->votes()->where('id', $voteid)->first();
        if(!$vote) {
            return response()->json(["error" => "vote not found"]);
        }

        $vote->delete();

        return response()->json(["success" => "ok"]);
    }

    public function putVote(Request $request, $spaceid,$listid, $voteid){
        $space = Space::find($spaceid);
        if(!$space) {
            return response()->json([]);
        }

        $list = $space->votelists()->where('id', $listid)->first();
        if(!$list) {
            return response()->json([]);
        }

        $vote = $list->votes()->where('id', $voteid)->first();
        if(!$vote) {
            return response()->json([]);
        }

        $validated = $request->validate([
            'change' =>  ['required', Rule::in(['up','down'])]
        ]);

        $vote->votes += ($validated['change'] == "up" ? 1 : -1);
        $vote->save();

        return response()->json($vote);
    }

    public function postVote(Request $request, $spaceid,$listid){
        $space = Space::find($spaceid);
        if(!$space) {
            return response()->json([]);
        }

        $list = $space->votelists()->where('id', $listid)->first();
        if(!$list) {
            return response()->json([]);
        }

        $validated = $request->validate([
            'name' => 'required|max:255'
        ]);

        $vote = new Vote($validated);
        $vote->votes = 0;
        $list->votes()->save($vote);

        return response()->json($vote);
    }
}
