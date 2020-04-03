export function getAccessToken() {
  const queryString = window.location.hash.substring(1).split('&');
  const token = queryString[0].split('=')[1];
  
  sessionStorage.setItem("access_token", token);
}

export function loginUrl() {

  const endpoint = 'https://accounts.spotify.com/authorize';
  const clientId =  process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_DEV_REDIRECT_URI;
  const scope = [
    'user-read-private',
    'user-read-email'
  ];
  const responseType = 'token';
  const state = '123'

      
  const loginUrl = `${endpoint}?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope.join(' '))}&response_type=${responseType}&state=${state}`;

  return loginUrl;
}