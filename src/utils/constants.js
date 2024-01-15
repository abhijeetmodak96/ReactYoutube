const GOOGLE_API_KEY = "AIzaSyDeH8fTdf_EDvRzzf1tX6j7TzxAQMJGSJs";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOYTUBE_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=21.5922529%2C-158.1147114&locationRadius=10mi&maxResults=10&q=surfing&type=video&key=" +
  GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 25;
