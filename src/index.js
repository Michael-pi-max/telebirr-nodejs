require("dotenv").config();
const { default: axios } = require("axios");

const { signObj, paymentUrl1 } = require("./utils/data");
const { encryptPublic, signData } = require("./utils/security");

let sign = signData(signObj);

let ussd = encryptPublic(signObj);

let requestMessage = JSON.stringify({
  appid: signObj.appId,
  sign,
  ussd,
});

const run = async () => {
  const paymentUrl = await axios.post(`${paymentUrl1}`, requestMessage, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(paymentUrl.data);
};

run();
