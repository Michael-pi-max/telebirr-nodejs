const crypto = require("crypto");
const NodeRSA = require("node-rsa");
const { signObj, appKey, publicKey } = require("./data");

const keyData = `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`;

const rsaKey = new NodeRSA(keyData, "public", {
  encryptionScheme: "pkcs1",
});

const encryptPublic = (rawData) => {
  const dataString = JSON.stringify(rawData);
  const data = Buffer.from(dataString);
  return rsaKey.encrypt(data, "base64", "utf8");
};

const signData = (rawData) => {
  signObj.appKey = appKey;
  const len = Object.keys(rawData).length;
  const signString = Object.keys(rawData)
    .sort()
    .reduce((acc, key, index) => {
      const isLast = index === len - 1;
      const value = rawData[key];
      return acc + `${key}=${value}${isLast ? "" : "&"}`;
    }, "");

  return crypto.createHash("sha256").update(signString).digest("hex");
};

module.exports = {
  encryptPublic,
  signData,
};
