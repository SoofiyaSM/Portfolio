
document.getElementById("year").textContent = new Date().getFullYear();

const copyButton = document.getElementById("copy-email");

copyButton.addEventListener("click", function () {
  const email = copyButton.dataset.email; 
  if (!navigator.clipboard) {
    window.prompt("Copy this email address:", email);
    return;
  }

  navigator.clipboard
    .writeText(email)
    .then(function () {
      copyButton.textContent = "Copied";
      setTimeout(function () {
        copyButton.textContent = "Copy email";
      }, 2000); 
    })
    .catch(function () {
      window.prompt("Copy this email address:", email);
    });
});
