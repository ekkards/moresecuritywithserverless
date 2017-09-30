test:
	aws lambda invoke --function-name helloLeon output.json

upload:
	rm -f lambda_function.zip
	zip ./lambda_function.zip index.js ../node_modules
	aws lambda update-function-code --function-name helloLeon --zip-file fileb://lambda_function.zip