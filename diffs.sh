#!/bin/sh

ignoreFile=./ignore_patterns;
for f in $(ls -d Exercises/Ex*); do
	exerciseNumberString=${f//[^0-9]/}
	exerciseNumber=${exerciseNumberString#0}

	if [ $exerciseNumber -gt 9 ]; then
		echo "Exercise 10 eins elf"
		diff -Nr -X $ignoreFile Application/ $f/Before/ > $(echo "patch_application_"$exerciseNumber"_before.patch");
	else
		# (exerciseNumber + 1)_before to exerciseNumber_after
		previousExerciseNumber=$((exerciseNumber+1))

		if [ $previousExerciseNumber -gt 0 ]; then
			left=Exercises/Exercise_$(printf "%02d" $previousExerciseNumber)/Before/
			right=$f/After/
			echo "create patch from $left to $right"
			diff -Nr -X $ignoreFile $left $right > "patch_"$previousExerciseNumber"_before_"$exerciseNumber"_after.patch";
		fi


		left=$f/After/
		right=$f/Before/
		echo "create patch from $left to $right"
		# exerciseNumber_after to exerciseNumber_before 
		diff -Nr -X $ignoreFile $left $right > "patch_"$exerciseNumber"_after_"$exerciseNumber"_before.patch";
	fi
done
