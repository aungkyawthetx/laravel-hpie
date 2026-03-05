<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
    public const SUBJECTS = [
        'The Arts',
        'Business & Economics',
        'Design/Engineering & Technology',
        'Health',
        'Literature & Language',
        'Mathematics',
        'Philosophy & Religion',
        'Psychology',
        'Science & Technology',
        'Social Studies',
    ];

    public function run(): void
    {
        $lessons = Lesson::all();

        foreach ($lessons as $index => $lesson) {
            $lesson->update([
                'subject' => self::SUBJECTS[$index % count(self::SUBJECTS)],
            ]);
        }
    }
}
