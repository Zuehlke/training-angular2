#!/bin/sh


function build {

	for f in $(find . -name '*Zuehlke.ExpenseReporting.csproj'); do
		
		# build frontend
		directory=$(dirname $f)
		cd $directory;
		
		if [ -f webpack.config.js ]; then
			echo "Building frontend in $directory";
			pwd
			
			npm install;

			echo "webpack vendor.js"
			webpack --config webpack.config.vendor.js;

			echo "webpack ...";
			webpack;
		fi

		cd -;

		# build dotnet project
		cd $(dirname $(dirname $f));

		echo "dotnet restore ..."
		dotnet restore;
		echo "dotnet build ..."
		dotnet build;
		echo "done ... seems to work ..."

		cd - > /dev/null;

	done
}

function unitTest {
	for f in $(find . -name '*Zuehlke.ExpenseReporting.csproj'); do
		
		# build frontend
		directory=$(dirname $f)
		cd $directory;
		
		if [ -f karma.conf.js ]; then
			echo "run karma tests in $directory";
			
			npm test;
		fi

		cd -;
	done
}

PS3='you must choose ... but choose wisely '
options=("build all" "npm test" "protractor" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "build all")
            echo "build all ..."
            build
            ;;
        "npm test")
            echo "npm test (frontend unit tests) ... "
            unitTest
            ;;
        "protractor")
            echo "protractor (frontend component tests) ..."
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done
