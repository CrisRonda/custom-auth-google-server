const { response } = require("express");
const { validateTonkenId } = require("../helpers/auth/googleVerify");
const googleAuth = async (req, res = response) => {
  try {
    const tokenId = req.body?.tokenId;
    if (!tokenId) {
      res.status(401).json({
        ok: false,
        msj: "tokenId is required",
      });
    }
    const user = await validateTonkenId(tokenId);

    res.json({
      ok: true,
      data: { user },
    });
  } catch (error) {
    res.status(401).json({
      ok: false,
      msj: "Auth not valid",
    });
  }
};

module.exports = { googleAuth };
