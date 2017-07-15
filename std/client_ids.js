//
// Client IDS
// Defines the CLIENT_ID (AppID's) of the OAuth2 providers
// relative to the domain host where this code is presented.

var location_https = window.location.href.indexOf('https://') === 0;


// Register your domain with Facebook at  and add here
var FACEBOOK_CLIENT_ID = '1510088492367892';


// Register your domain with Windows Live at http://manage.dev.live.com and add here
var WINDOWS_CLIENT_ID = '000000004C107945';


// Google Register --  https://console.developers.google.com
var GOOGLE_CLIENT_ID = '296183405068-3379jn2v9polk5aj6j6bilf1k42j0vp2.apps.googleusercontent.com';

// To make it a little easier
var CLIENT_IDS = {
	windows : WINDOWS_CLIENT_ID,
	google : GOOGLE_CLIENT_ID,
	facebook : FACEBOOK_CLIENT_ID
};

// Dropbox full 't5s644xtv7n4oth'... requires production authentication
var DROPBOX_CLIENT_ID = '1lkagy1bz7h2uhl';

// LinkedIn Register - https://www.linkedin.com/secure/developer
var LINKEDIN_CLIENT_ID = 'bixrjszkfk0j'; // 'exgsps7wo5o7'

var YAHOO_CLIENT_ID = {
	'local.knarly.com' : 'dj0yJmk9cjVDdHlDaGtrbldJJmQ9WVdrOVYyZFhSWE4yTm04bWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1jOA--',
	'adodson.com' : 'dj0yJmk9dkVoREN1R3BLTThhJmQ9WVdrOVYyNUpORXRXTnpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1mNw--'
}[window.location.hostname];

var TWITTER_CLIENT_ID = {
	'local.knarly.com' : 'krGNvpEVVBE27jcemC6uA'
}[window.location.hostname] || 'eQuyZuECKWPiv3D7E4qdg';


// SoundCloud Register - http://soundcloud.com/you/apps/
var SOUNDCLOUD_CLIENT_ID = '47a386647dadf913e559c12ef6db4292';

// FourSquare Register - https://foursquare.com/developers/apps
var FOURSQUARE_CLIENT_ID = 'SFYWHRQ1LTUJEQWYQMHOCXYWNFNS0MKUCAGANTHLFUGJX02E';

// Github Register - https://github.com/settings/applications
var GITHUB_CLIENT_ID = 'd934ef34e2e40cf9b00a';

// Instagram Register - http://instagram.com/developer/clients/manage/
var INSTAGRAM_CLIENT_ID = '34e2fb9bd305446cb080d852597584e9';


var FLICKR_CLIENT_ID = '8d7cfb86e6d6bfab49579c3bfdb95796';

var VK_CLIENT_ID = '5001721';


var TUMBLR_CLIENT_ID = 'BHKkYCvKt33lL34iM1yWUhkYRw1lqwifbKKTfgh5FAX5uBzzxn';


// join.me Register - https://developer.join.me
var JOINME_CLIENT_ID = 'e7jmevgbve6uzqvsttf7pb85';


// To make it a little easier
var CLIENT_IDS_ALL = {
	windows : WINDOWS_CLIENT_ID,
	google : GOOGLE_CLIENT_ID,
	facebook : FACEBOOK_CLIENT_ID,
	dropbox : DROPBOX_CLIENT_ID,
	twitter : TWITTER_CLIENT_ID,
	yahoo : YAHOO_CLIENT_ID,
	instagram : INSTAGRAM_CLIENT_ID,
	joinme: JOINME_CLIENT_ID,
	linkedin : LINKEDIN_CLIENT_ID,
	soundcloud : SOUNDCLOUD_CLIENT_ID,
	foursquare : FOURSQUARE_CLIENT_ID,
	github : GITHUB_CLIENT_ID,
	flickr: FLICKR_CLIENT_ID,
	vk: VK_CLIENT_ID
};

//
// OAUTH PROXY
//
var OAUTH_PROXY_URL = 'https://auth-server.herokuapp.com/proxy';

//
// Redirect URI
//
var REDIRECT_URI = 'https://opensitemobile.com/hellojs/std/redirect.html';

