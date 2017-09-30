test:
	aws lambda invoke --function-name robert_hello output.json

upload:
	rm -f index.zip
	zip -r ./index.zip index.js node_modules
	aws lambda update-function-code --function-name robert_hello --zip-file fileb://index.zip