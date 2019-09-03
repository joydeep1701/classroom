let API_HOST = "https://backend.joydeep1701.in";

if (process.env.NODE_ENV === 'development') {
  // Use react-dev-server proxy
  API_HOST = "http://localhost:8080"
}

export const WEBSOCKET_SERVER = API_HOST;
export const API_ROOT = API_HOST;