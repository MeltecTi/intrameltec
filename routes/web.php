<?php

use App\Http\Controllers\Admin\KpiReportsController;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HseqController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DirectorsController;
use App\Http\Controllers\Admin\RolsController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ServerpartController;
use App\Http\Controllers\Api\TestApiController;
use App\Http\Controllers\Auth\NotificationController;
use App\Http\Controllers\MarkReadNotificationController;
use App\Http\Controllers\Pdf\QuoteServerReportController;
use App\Http\Controllers\View\CommercialQuoterController;
use App\Http\Controllers\Admin\PermissionsStoreController;
use App\Http\Controllers\Auth\PersonalAccessTokensController;
use App\Http\Controllers\Functions\UploadFilesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/directors', DirectorsController::class)->name('directors.index');

    Route::resource('users', UserController::class)->names('admin.users');
    Route::resource('parts', ServerpartController::class)->names('admin.parts');
    Route::resource('rols', RolsController::class)->names('admin.rols');

    Route::post('newPermissions', PermissionsStoreController::class)->name('admin.permission.create');

    Route::get('/notifications', NotificationController::class)->name('notifications');
    Route::get('/markNotifications/{id}', MarkReadNotificationController::class)->name('markNotifications');

    Route::get('/quoteserver/{id}', QuoteServerReportController::class)->name('quoteserver.report');

    Route::resource('generatetokens', PersonalAccessTokensController::class)->names('profile.generatetokens');

    Route::get('/commercial', CommercialQuoterController::class)->name('commercial.quoter');

    Route::get('hseq', [HseqController::class, 'index'])->name('resources.hseq.index');
    Route::post('hseq', [HseqController::class, 'store'])->name('resources.hseq.store');
    Route::get('/hseq/{id}', [HseqController::class, 'download'])->name('resources.hseq.download');
    Route::delete('/hseq/delete/{id}', [HseqController::class, 'destroy'])->name('resources.hseq.destroy');

    Route::post('/uploadFile', UploadFilesController::class);

    Route::resource('/kpis', KpiReportsController::class)->names('kpi.reports');
});

require __DIR__ . '/auth.php';
