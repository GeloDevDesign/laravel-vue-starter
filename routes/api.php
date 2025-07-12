<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/success', function (Request $request) {
    $dummyAttendance = [
        [
            'id' => 1,
            'employee_name' => 'John Doe',
            'date' => '2024-06-10',
            'time_in' => '08:00:00',
            'time_out' => '17:00:00',
            'status' => 'Present'
        ],
        [
            'id' => 2,
            'employee_name' => 'Jane Smith',
            'date' => '2024-06-10',
            'time_in' => '08:05:00',
            'time_out' => '16:55:00',
            'status' => 'Present'
        ],
        [
            'id' => 3,
            'employee_name' => 'Mike Johnson',
            'date' => '2024-06-10',
            'time_in' => '08:15:00',
            'time_out' => '17:10:00',
            'status' => 'Late'
        ],
        [
            'id' => 4,
            'employee_name' => 'Sarah Williams',
            'date' => '2024-06-10',
            'time_in' => null,
            'time_out' => null,
            'status' => 'Absent'
        ],
        [
            'id' => 5,
            'employee_name' => 'David Brown',
            'date' => '2024-06-10',
            'time_in' => '08:00:00',
            'time_out' => '12:00:00',
            'status' => 'Half Day'
        ],
        [
            'id' => 6,
            'employee_name' => 'Emily Davis',
            'date' => '2024-06-11',
            'time_in' => '08:02:00',
            'time_out' => '17:01:00',
            'status' => 'Present'
        ],
        [
            'id' => 7,
            'employee_name' => 'Robert Wilson',
            'date' => '2024-06-11',
            'time_in' => '08:10:00',
            'time_out' => '17:05:00',
            'status' => 'Present'
        ],
        [
            'id' => 8,
            'employee_name' => 'Lisa Taylor',
            'date' => '2024-06-11',
            'time_in' => '09:00:00',
            'time_out' => '17:30:00',
            'status' => 'Late'
        ],
        [
            'id' => 9,
            'employee_name' => 'James Anderson',
            'date' => '2024-06-11',
            'time_in' => '08:00:00',
            'time_out' => '17:00:00',
            'status' => 'Present'
        ],
        [
            'id' => 10,
            'employee_name' => 'Emma Martinez',
            'date' => '2024-06-11',
            'time_in' => '08:00:00',
            'time_out' => null,
            'status' => 'Left Early'
        ]
    ];

    return response()->json([
        'message' => 'Data loaded successfully.',
        'data' => $dummyAttendance,
        'status' => 200
    ]);
});

Route::post('/success', function (Request $request) {
    $dummyAttendance =
        [
            'id' => 1,
            'employee_name' => 'John Doe',
            'date' => '2024-06-10',
            'time_in' => '08:00:00',
            'time_out' => '17:00:00',
            'status' => 'Present'
        ];

    return response()->json(['message' => 'POST AXIOS', 'data' => $dummyAttendance], 200);
});


Route::get('/error', function (Request $request) {
    return response()->json(['message' => 'ERROR AXIOS'], 422);
});
