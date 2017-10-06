#!/bin/sh

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