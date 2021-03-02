// Paracel is doing some magic behind the scenes to make this work nicely.
const { getUnixTime } = require("date-fns")

onmessage = function(event) {
  console.log('Message received from main script', event.data);
  console.log('Posting message back to main script');
  postMessage(`${getUnixTime(Date.now())} since EPOCH`);
}
