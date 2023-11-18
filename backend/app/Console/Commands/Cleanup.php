<?php

namespace App\Console\Commands;

use App\Models\Votelist;
use App\Models\Vote;
use Illuminate\Console\Command;
use Carbon\Carbon;

class Cleanup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:cleanup-lists';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $votes = Vote::where('updated_at','<',Carbon::now()->subHour(12))->get();

        foreach($votes as $vote) {
            $vote->delete();
        }


        foreach(Votelist::get() as $list){
            if($list->votes()->count() <= 0){
                $list->delete();
            }
        }
    }
}
