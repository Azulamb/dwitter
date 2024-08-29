import { Dwitter } from '../mod.ts';
import { OAuth } from '../src/OAuth.ts';

const config = (await import('../config.json', {
	assert: { type: 'json' },
})).default;

const dwitter = new Dwitter(
	config.api_key,
	config.api_key_secret,
);

dwitter.oauth.setAccessToken(
	config.access_token,
	config.access_token_secret,
);

/*console.log(
	await dwitter.v2.users.me({
		//expansions: ['pinned_tweet_id'],
		//'tweet.fields': ['created_at']
		'user.fields': ['created_at', 'description']
	}).catch((error) => {return JSON.stringify(error.cause);}),
);*/

const oauth = new OAuth(<any>null);
oauth.setAPIKey(config.api_key, config.api_key_secret);
oauth.setAccessToken(config.access_token,config.access_token_secret);
oauth.request_(
	'POST',
	'https://api.twitter.com/1.1/statuses/update.json',
	{
		include_entities: true,
	}
);

/*const init: RequestInit = {
	headers: {
		Authorization: `Bearer ${config.default.bearer_token}`,
	},
};

await fetch('https://api.twitter.com/2/tweets/20', init).then((response) => {
	return response.json();
}).then((result) => {
	console.log(result);
});*/

/*const dwitter = new Dwitter(config.default.api_key, config.default.api_key_secret);
dwitter.oauth2.setBearerToken(config.default.bearer_token);
console.log(await dwitter.v2.users.me());*/

//authorization: OAuth oauth_consumer_key="CONSUMER_API_KEY", oauth_nonce="OAUTH_NONCE", oauth_signature="OAUTH_SIGNATURE", oauth_signature_method="HMAC-SHA1", oauth_timestamp="OAUTH_TIMESTAMP", oauth_token="ACCESS_TOKEN", oauth_version="1.0"

/*const key = await crypto.subtle.generateKey({
	name: 'HMAC',
	hash: 'SHA-1',
}, true, ["sign", "verify"]);*/
/*
const nonce = (() => {
	const array = crypto.getRandomValues(new Uint8Array(32));
	return [...array].map((uint) => {
		return uint.toString(16).padStart(2, '0');
	}).join('');
})();
function encode(value: string) {
	return encodeURIComponent(value).replace(/[!'()*]/g, (char) => {
		return '%' + char.charCodeAt(0).toString(16);
	});
}
function generateSignatureBase(method: string, url: string, params: Record<string,any>, oauthParams: { [keys: string]: string }) {
	const allParams: { [keys: string]: string } = {};

	Object.keys(oauthParams).forEach((key) => {
		allParams[encode(key)] = encode(oauthParams[key]);
	});

	Object.keys(params).forEach((key) => {
		const value = params[key];
		if (value === undefined) {
			return;
		}
		allParams[encode(key)] = encode(value + '');
	});

	const encodeParams = ((params) => {
		const keys = Object.keys(params);
		keys.sort();

		return keys.map((key) => {
			return `${key}=${params[key]}`;
		});
	})(allParams);

	return [
		encode(method),
		encode(url),
		encode(encodeParams.join('&')),
	].join('&');
}
const oauthParams: { [keys: string]: string } = {
	oauth_consumer_key: config.default.api_key,
	oauth_nonce: nonce,
	oauth_signature_method: 'HMAC-SHA1',
	oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
	oauth_version: '1.0',
	oauth_token: config.default.access_token,
};
const signatureKey = [
	encode(config.default.api_key_secret),
	encode(config.default.access_token_secret),
].join('&');
const method = 'GET';
const url = 'https://api.twitter.com/2/users/me';
const params = {};

const signatureBase = generateSignatureBase(method, url, params, oauthParams);
const key = await (<any>crypto.subtle.importKey)(
	'raw',
	{
		name: 'HMAC',
		hash: 'SHA-1',
	},
	new TextEncoder().encode(signatureKey),
	true,
	["sign"]
);
const key = await crypto.subtle.generateKey({
	name: 'HMAC',
	hash: 'SHA-1',
}, true, ["sign", "verify"])
const signature = (await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signatureBase)));

console.log(signature);;*/

/*const init: RequestInit = {
	headers: {
		Authorization: `Bearer ${config.default.bearer_token}`,
	},
};
console.log(init);

//const url = 'https://api.twitter.com/2/users/by/username/azulitenet';
await fetch(url, init).then((response) => {
	return response.json();
}).then((result) => {
	console.log(result);
});*/
