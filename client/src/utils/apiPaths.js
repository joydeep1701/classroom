let API_HOST = "";

if (process.env.NODE_ENV === 'development') {
  // Use react-dev-server proxy
  API_HOST = "http://192.168.0.100:8080"
} else {
  // Use production server
  API_HOST = "https://api.classroom.joydeep1701.in:8080"
}

export const WEBSOCKET_SERVER = API_HOST;
export const API_ROOT = API_HOST;