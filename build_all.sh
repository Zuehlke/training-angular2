#!/bin/sh

for f in $(find . -name '*Zuehlke.ExpenseReporting.csproj'); do

	cd $(dirname $(dirname $f));
	
	echo "dotnet restore ..."
	dotnet restore;
	echo "dotnet build ..."
	dotnet build;
	echo "done ... seems to work ..."

	cd - > /dev/null;

done

: "
for f in $(find . -name '*Zuehlke.ExpenseReporting.Test.csproj'); do
	echo "Migrate $f";

	sed -i '' -e 's/netcoreapp1\.1/netcoreapp2\.0/g' $f;
done

for f in $(find . -name '*global.json'); do
	echo "Migrate $f";

	sed -i '' -e 's/\"version\": \"1\.1\.1\"/\"version\": \"2\.0\.0\"/g' $f;
done

"