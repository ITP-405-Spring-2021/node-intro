const axios = require('axios');

exports.handler = async (event) => {
	const response = await new Promise((resolve, reject) => {
		const req =  axios
			.get("https://icanhazdadjoke.com/", {
				headers: {
					Accept: "application/json",
				},
			}).then((icanhazdadjokeResponse) => {
				resolve({
					statusCode: 200,
					body: JSON.stringify(icanhazdadjokeResponse.data)
				});
			});
	});
	return response;
};
