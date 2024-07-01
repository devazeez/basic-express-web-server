import {
  fetchUserLocationDetails,
  fetchUserWeatherDetails,
} from "../services/api.helper.js";

export const greeting = async (req, res, next) => {
  try {
    const visitor_name = req.query.visitor_name;

    if (!visitor_name) {
      return res.status(400).json({
        message: "Visitor's name is required",
      });
    }

    const visitorLocationDetails = await fetchUserLocationDetails();
    const visitorWeatherDetails = await fetchUserWeatherDetails(
      visitorLocationDetails.location.region
    );

    return res.status(200).json({
        client_ip: visitorLocationDetails.ipAddress,
        location: visitorLocationDetails.location.region,
        greeting: `Hello, ${visitor_name}!, the temperature is ${visitorWeatherDetails.temperature} degrees Celcius in ${visitorLocationDetails.location.region}`,
    });
  } catch (error) {
    next(error);
  }
};
