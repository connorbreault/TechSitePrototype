$(document).ready(function () {
  // Materialize functions
  $(".carousel").carousel();
});
// Contact page lottie functions
const player = document.querySelector("lottie-player");
player.addEventListener("complete", () => {
  $(".contactLottie").addClass("hidden");
  $(".contactDiv").removeClass("hidden");
});
// Submit message functions
$("#submitMessageButton").on("click", function () {
  var messageName = $("#name").val().trim();
  var messageEmail = $("#email").val().trim();
  var messageMessage = $("#message").val().trim();

  if (messageName === "" || messageEmail === "" || messageMessage === "") {
    alert("Please fill out all contact information!");
  } else {
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
    $(".contactDiv").addClass("hidden");
    $(".loadingGif").removeClass("hidden");
    let templateParams = {
      name: messageName,
      email: messageEmail,
      message: messageMessage,
    };
    console.log(templateParams);

    emailjs.send("default_service", "template_5MmNhXRS", templateParams).then(
      function (response) {
        console.log("Sucessful message send!");
        $(".loadingGif").addClass("hidden");
        $("#thanksMessage").removeClass("hidden");
      },
      function (error) {
        console.log("FAILED...", error);
        $(".loadingGif").addClass("hidden");
        $("#errorMessage").removeClass("hidden");
      }
    );
  }
});
