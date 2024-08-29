import { TwitterAPI } from '../TwitterAPI.ts';
import { Tweets } from './Tweets.ts';
import { Users } from './Users.ts';

export class V2_0 extends TwitterAPI {
	protected path = '2/';

	public tweets = new Tweets(this);
	public users = new Users(this);

	public export() {
		return {
			tweets: this.tweets.export(),
		};
	}

	// deno-lint-ignore no-explicit-any
	public import(data: any) {
		if (typeof data !== 'object') {
			return;
		}
		if (typeof data.statuses === 'object') {
			this.tweets.import(data.statuses);
		}
	}
}
