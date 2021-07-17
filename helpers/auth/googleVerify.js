const { OAuth2Client } = require("google-auth-library");

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_ID_ANDROID, GOOGLE_CLIENT_ID_IOS } =
  process.env;
const CLIENT_ID = GOOGLE_CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

const validateTonkenId = async (token) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: [CLIENT_ID, GOOGLE_CLIENT_ID_IOS, GOOGLE_CLIENT_ID_ANDROID],
  });
  const { name, email, email_verified, picture } = ticket.getPayload();

  return { name, email, email_verified, picture };
};

module.exports = {
  validateTonkenId,
};
