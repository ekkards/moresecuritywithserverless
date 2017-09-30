test:
	aws lambda invoke --function-name python_aws_test_chris --region eu-central-1 output.json

upload:
	rm -f lambda_function.zip
	zip ./lambda_function.zip lambda_function.py
	aws lambda update-function-code --function-name python_aws_test_chris --zip-file fileb://lambda_function.zip