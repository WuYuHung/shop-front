(function () {
  emailjs.init("user_L2GOIalZWRcmxD4cBRVUF");
})();

var myform = $("form#myform");
myform.submit(function (event) {
  event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "contact_form_service";
  var template_id = "contact_form";

  myform.find("button").text("寄送中...");
  emailjs.sendForm(service_id, template_id, myform[0])
    .then(function () {
      alert("已成功寄出!");
      myform.find("button").text("送出");
      location.reload();
    }, function (err) {
      alert("寄送失敗\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").text("送出");
    });
  return false;
});
