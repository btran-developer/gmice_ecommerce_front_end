import axios from "axios";

const baseURL = "http://localhost:5000/api/";

class AuthService {
  constructor() {
    this.instance = axios.create({
      baseURL
    });
    this.route = "/user";
  }

  createAccount = async accountData => {
    let response;

    try {
      response = await this.instance.post(`${this.route}`, accountData);
    } catch (err) {
      response = err.response;
    } finally {
      return response;
    }
  };

  login = async credential => {
    let response;

    try {
      response = await this.instance.post(`${this.route}/login`, credential);
    } catch (err) {
      response = err.response;
    } finally {
      return response;
    }
  };

  silentLogin = async refreshToken => {
    let response;

    try {
      response = await this.instance.post(`${this.route}/refresh`, "", {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      });
    } catch (err) {
      response = err.response;
    } finally {
      return response;
    }
  };

  logout = async (accessToken, refreshToken) => {
    let response;

    try {
      response = await this.instance.post(`${this.route}/revoke-access`, "", {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      });
      response = await this.instance.post(`${this.route}/revoke-refresh`, "", {
        headers: {
          authorization: `Bearer ${refreshToken}`
        }
      });
    } catch (err) {
      response = err.response;
    } finally {
      return response;
    }
  };
}

export const authService = new AuthService();

export default AuthService;
