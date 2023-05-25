const fakeApiCall = (type) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (type === "succes") {
        resolve("de call is gelukt");
      }
      if (type === "error") {
        reject("de call is mislukt");
      }
    }, 1000);
  });
};

console.log("begin");

fakeApiCall("succes").then((response) => {
  console.log(response);
});

fakeApiCall("error").catch((error) => {
  console.log(error);
});

fakeApiCall().finally(() => {
  console.log("ik word altijd uitgevoerd");
});
console.log("einde");
