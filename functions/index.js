const functions = require("firebase-functions");
const {logger} = require("firebase-functions/logger");

// Example onCall function
exports.exampleFunction = functions.https.onCall((data, context) => {
  // Perform some operations using the data received
  const {value} = data;

  // Log the value using the logger
  logger.info(`Received value: ${value}`);
  logger.info("Context:", context);

  // Perform additional logic or return a result
  const result = value * 2;

  return {result};
});
