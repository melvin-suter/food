<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('votelists', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('space_id');
            $table->foreign('space_id')->references('id')->on('spaces')->onDelete('cascade');
            $table->string('type')->default('list');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('votelists');
    }
};
