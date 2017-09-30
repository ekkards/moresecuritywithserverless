test:
	aws lambda invoke \
		--function-name helloLeon output.json \
		--payload '{"a": "(function () { console.log(process.env); return 3; })()", "b": "2"}'
		

upload:
	rm -f lambda_function.zip
	zip ./lambda_function.zip index.js ../node_modules
	aws lambda update-function-code \
		--function-name helloLeon \
		--zip-file fileb://lambda_function.zip