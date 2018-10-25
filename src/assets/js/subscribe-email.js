(function () {
  emailjs.init("user_L2GOIalZWRcmxD4cBRVUF");
})();

var myform = $("form#myform1");
myform.submit(function (event) {
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "contact_form_service";
  var template_id = "subscribe_form";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id, template_id, myform[0])
    .then(function () {
      alert("訂閱成功!");
      myform.find("button").text("Send");
    }, function (err) {
      alert("訂閱失敗!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("Send");
    });
  return false;
});
