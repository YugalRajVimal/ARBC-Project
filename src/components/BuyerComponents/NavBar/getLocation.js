// GeolocationService.js
export const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

// GeocodingService.js
const API_KEY = process.env.REACT_APP_OPENCAGE_API_KEY; // Replace with your OpenCage API key

export const getAddressFromCoordinates = async () => {
    const { latitude, longitude } = await getCoordinates();
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
  );
  const data = await response.json();
  if (data.results.length > 0) {
    const { state, country } = data.results[0].components;
    return { state, country };
  } else {
    throw new Error("Unable to get address from coordinates.");
  }
};

export default getAddressFromCoordinates;
