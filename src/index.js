module.exports = async (req, res) => {
  // retrieve the API key and email from your environment variables
  const apiKey = process.env.API_KEY;
  const email = process.env.EMAIL;

  // return the API key and email as a JSON response
  res.json({ apiKey, email });
};
