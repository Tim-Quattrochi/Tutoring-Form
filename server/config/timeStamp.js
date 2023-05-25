function timeStamp() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();
  const currentDateTime = `${date} at ${time}`;

  return currentDateTime;
}

module.exports = timeStamp;
