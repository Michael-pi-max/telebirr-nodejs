const { v4: uuidv4 } = require("uuid");

const nonce = `${uuidv4()}`;
const outTradeNo = `TN${uuidv4()}`;

let signObj = {
  appId: process.env.APP_ID,
  timestamp: `${Date.now()}`,
  nonce: nonce,
  returnUrl: "https://ethiotelecom.et",
  notifyUrl: "http://www.google.com",
  subject: "fundraiser",
  outTradeNo: outTradeNo,
  timeoutExpress: "30",
  totalAmount: "3",
  shortCode: process.env.SHORT_CODE,
  recieveName: "Michael Solomon",
};
const paymentUrl1 = process.env.PAYMENT_URL;

const appKey = process.env.APP_KEY;
const publicKey = process.env.PUBLIC_KEY;
module.exports = {
  signObj,
  paymentUrl1,
  appKey,
  publicKey,
};
