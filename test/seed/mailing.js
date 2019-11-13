module.exports.mailingToOih = () => {
  const expression = {
    meta: {
      applicationUid: "93jlksd",
      oihUidEncrypted: ""
    },
    data: {
      uid: 98123,
      label: "Sendung",
      description: "Scan einer Sendung",
      currentVersion: {
        mimeType: "application/pdf",
        uid: "0404130350",
        extension: "pdf"
      }
    }
  };
  return expression;
};
