
class AuthService {

	constructor() {

	}

	signinAsBrowser() {
		let newToken = 'browser_token_' + 0;
		return newToken;
	}

	loginAsBrowser(browserToken) {
		if (browserToken == 'browser_token_0') {
			return {
				type: 'browser',
				success: 'true',
			};
		}
		return {
			type: 'browser',
			success: false
		};
	}

	getUser(authResult) {
		if (!authResult.success) {
			return undefined;
		}
		return {
			name: 'User'
		};
	}

}

module.exports = AuthService;
