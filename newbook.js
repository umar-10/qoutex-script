javascript:(function() {
  const url = "https://raw.githubusercontent.com/umar-10/quotex-script/main/newbook.js"; // replace with your actual raw GitHub link
  fetch(url)
    .then(res => res.text())
    .then(code => eval(code))
    .catch(err => alert("Error loading script: " + err));
})();
