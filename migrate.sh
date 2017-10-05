#!/bin/sh

for f in $(find . -name '*Zuehlke.ExpenseReporting.csproj'); do

	echo "Migrate $f";

	sed -i '' -e 's/netcoreapp1\.1/netcoreapp2\.0/g' $f;
	sed -i '' -e '/PackageTargetFallback/d' $f;
	sed -i '' -e 's/Microsoft\.AspNetCore\" Version=\"1\.1\.1\"/Microsoft\.AspNetCore\" Version=\"2\.0\.0\"/g' $f;
	sed -i '' -e 's/Microsoft\.AspNetCore\.Mvc\" Version=\"1\.1\.2\"/Microsoft\.AspNetCore\.Mvc\" Version=\"2\.0\.0\"/g' $f;
	sed -i '' -e 's/Microsoft\.AspNetCore\.SpaServices\" Version=\"1\.1\.0\"/Microsoft\.AspNetCore\.SpaServices\" Version=\"2\.0\.0\"/g' $f;
	sed -i '' -e 's/Microsoft\.AspNetCore\.StaticFiles\" Version=\"1\.1\.1\"/Microsoft\.AspNetCore\.StaticFiles\" Version=\"2\.0\.0\"/g' $f;
	sed -i '' -e 's/Microsoft\.Extensions\.Configuration\.CommandLine\" Version=\"1\.1\.1\"/Microsoft\.Extensions\.Configuration\.CommandLine\" Version=\"2\.0\.0\"/g' $f;
	sed -i '' -e 's/Microsoft\.Extensions\.Logging\.Debug\" Version=\"1\.1\.1\"/Microsoft\.Extensions\.Logging\.Debug\" Version=\"2\.0\.0\"/g' $f;

done


for f in $(find . -name '*Zuehlke.ExpenseReporting.Test.csproj'); do
	echo "Migrate $f";

	sed -i '' -e 's/netcoreapp1\.1/netcoreapp2\.0/g' $f;
done

for f in $(find . -name '*global.json'); do
	echo "Migrate $f";

	sed -i '' -e 's/\"version\": \"1\.1\.1\"/\"version\": \"2\.0\.0\"/g' $f;
done