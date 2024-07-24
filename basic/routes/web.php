<?php

use Illuminate\Support\Facades\Route;
use App\Livewire\Anime;

route::get('/',Anime::class)->name('anime');