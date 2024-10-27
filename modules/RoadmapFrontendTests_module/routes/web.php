<?php

use Illuminate\Support\Facades\Route;

Route::get('/roadmap/frontend-tests', function () {
    return view('RoadmapFrontendTests_module::index');
});
