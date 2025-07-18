<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use App\Http\Requests\StoreNoteRequest;

class NoteController extends Controller
{

    public function index(Request $request)
    {

        $query = $request->user()->notes();

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('notes.title', 'like', '%' . $search . '%')
                    ->orWhere('notes.body', 'like', '%' . $search . '%');
            });
        }


        // if ($request->filled('category_id')) {
        //     $categoryIds = explode(',', $request->category_id);
        //     $query->whereHas('categories', function ($q) use ($categoryIds) {
        //         $q->whereIn('categories.id', $categoryIds);
        //     });
        // }


        $notes = $query->latest()->paginate($request->per_page ?? 10)
            ->appends($request->query());

        return response()->json($notes);
    }


    public function store(StoreNoteRequest $request)
    {
        $note = $request->user()->notes()->create($request->validated());

        return response()->json([
            'message' => 'Note created successfully!',
            'note'    => $note,
        ], 201);
    }



    public function show(Note $note)
    {
        return response()->json(['note' => $note]);
    }

    public function update(StoreNoteRequest $request, Note $note)
    {

        $note->update($request->validated());

        return response()->json([
            'message' => 'Note updated successfully!',
            'note'    => $note,
        ], 200);
    }


    public function destroy(Note $note)
    {
        $note->delete();

        return response()->json([
        'message' => 'Note deleted successfully!',
        ], 200);
    }
}
