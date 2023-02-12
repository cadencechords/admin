export default class Credentials {
  static uid = localStorage.getItem('uid');
  static accessToken = localStorage.getItem('accessToken');
  static client = localStorage.getItem('client');
  static hasCredentials() {
    return !!this.uid && !!this.accessToken && !!this.client;
  }
}
