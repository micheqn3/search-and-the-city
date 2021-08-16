// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// This class contains helper methods for auth
class AuthService {
  // Retrieve user data
  getProfile() {
    return decode(this.getToken());
  }

  // Checks if the user is logged in
  loggedIn() {
    // Checks if there is a saved token and if it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }

  // Checks if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  // Retrieves the user token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }
  
  // Saves user token to localStorage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Clears user token and profile data from localStorage and reloads page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();