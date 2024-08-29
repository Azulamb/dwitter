import * as TwitterTypes from '../twitter.d.ts';
import { APICounter } from '../APICounter.ts';
import { Fields } from './fields/Fields.ts';

export class Users extends APICounter {
	protected path = 'users/';

	protected limits = {
		me: { count: 75, time: 15 }, // https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me
	};

	public me(option?: TwitterTypes.V2ParamsExpansionsTweetUser) {
		const api = 'me';
		if (this.isLimit(api)) {
			return this.limitError();
		}

		return this.oauthFetch.get(this.getPath() + api, Fields(option)).then((response) => {
			this.addSuccessRequest(api);
			return response.json();
		}).then(async (result) => {
			if (result.errors) {
				throw new Error(`Failed.`, {cause: result});
			}

			await this.save();

			return result;
		});
	}
}
