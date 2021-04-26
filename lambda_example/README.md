# Lambda_Example

This folder contains dependencies and a sample code to run the express-app nodeJs in AWS lambda.

## Instructions

First create an AWS lambda function and then you will need to zip this folder and upload it to the lambda function.

To create a zip file with all the dependencies:

delete old zip file if exist:
```
rm -rf function.zip
```

install dependencies:
```
npm install
```

create a zip file:
```
zip -r function.zip .
```
