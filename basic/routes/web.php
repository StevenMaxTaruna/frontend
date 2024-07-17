<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Home;
use App\Livewire\Test;

route::get('/',Home::class)->name('home');

route::get('/test',Test::class)->name('test');

