document.querySelector(".primary-button").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
});

document.querySelector(".goBack").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

document.querySelector(".cf-checked-bl").addEventListener("click", () => {
  document.querySelector(".modal-black").classList.add("active");
  document.querySelector(".modal-bambo").classList.remove("active");
  document.querySelector(".cf-free").classList.remove("active");
  document.querySelector(".cf-pedge-enter-free").style.display = "none";
  document.querySelector(".cf-pedge-enter-black").style.display = "flex";
  document.querySelector(".cf-pedge-enter-bambo").style.display = "none";
});

document.querySelector(".cf-checked-ba").addEventListener("click", () => {
  document.querySelector(".modal-bambo").classList.add("active");
  document.querySelector(".modal-black").classList.remove("active");
  document.querySelector(".cf-free").classList.remove("active");
  document.querySelector(".cf-pedge-enter-free").style.display = "none";
  document.querySelector(".cf-pedge-enter-black").style.display = "none";
  document.querySelector(".cf-pedge-enter-bambo").style.display = "flex";
});

document.querySelector(".cf-checked-fr").addEventListener("click", () => {
  document.querySelector(".cf-free").classList.add("active");
  document.querySelector(".modal-bambo").classList.remove("active");
  document.querySelector(".modal-black").classList.remove("active");
  document.querySelector(".cf-pedge-enter-free").style.display = "flex";
  document.querySelector(".cf-pedge-enter-black").style.display = "none";
  document.querySelector(".cf-pedge-enter-bambo").style.display = "none";
});

document.querySelector(".cf-about-bambo").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
  document.querySelector(".modal-bambo").classList.add("active");
  document.querySelector(".modal-black").classList.remove("active");
  document.querySelector(".cf-free").classList.remove("active");
  document.querySelector(".cf-pedge-enter-free").style.display = "none";
  document.querySelector(".cf-pedge-enter-black").style.display = "none";
  document.querySelector(".cf-pedge-enter-bambo").style.display = "flex";
});

document.querySelector(".cf-about-black").addEventListener("click", () => {
  document.querySelector(".modal").style.display = "block";
  document.querySelector(".modal-black").classList.add("active");
  document.querySelector(".modal-bambo").classList.remove("active");
  document.querySelector(".cf-free").classList.remove("active");
  document.querySelector(".cf-pedge-enter-free").style.display = "none";
  document.querySelector(".cf-pedge-enter-black").style.display = "flex";
  document.querySelector(".cf-pedge-enter-bambo").style.display = "none";
});

document.querySelector(".special-button").addEventListener("click", () => {
  var text = document.querySelector(".secondary-button"),
    htmlContent = text.textContent;
  if (htmlContent == "Bookmark") {
    document.querySelector(".secondary-button").innerHTML = "Bookmarked";
    document.querySelector(".bookmark").classList.add("filler");
    document.querySelector(".secondary-button").style.color = "#3cb3ab";
    document.querySelector("path").classList.add("filler-cap");
  } else document.querySelector(".secondary-button").innerHTML = "Bookmark";
});

document.querySelector(".ba-button").addEventListener("click", () => {
  var baCollect = document.querySelector(".ba-input").value;
  var maxbacked = 100000;
  var backed = 50000;
  var tbackers = 5000;
  backed = backed + parseInt(baCollect);
  document.querySelector(".cf-total-backers").innerHTML = `${(tbackers =
    tbackers + 1)}<span>total backers</span>`;
  document.querySelector(
    ".cf-backed"
  ).innerHTML = `$${backed}<span>of $100,000 backed</span>`;
  var per = (backed * 100) / maxbacked;
  var newWidth = Number.parseFloat(per).toFixed(2) % 100;
  document.querySelector(".progress-bar").style.width =
    newWidth.toString() + "%";

  document.querySelector(".modal").style.display = "none";
  document.querySelector(".modal-thank").style.display = "block";
});

document.querySelector(".getit").addEventListener("click", () => {
  document.querySelector(".modal-thank").style.display = "none";
});

document.querySelector(".free-button").addEventListener("click", () => {
  var baCollect = document.querySelector(".free-input").value;
  var maxbacked = 100000;
  var backed = 50000;
  var tbackers = 5000;
  backed = backed + parseInt(baCollect);
  document.querySelector(".cf-total-backers").innerHTML = `${(tbackers =
    tbackers + 1)}<span>total backers</span>`;
  document.querySelector(
    ".cf-backed"
  ).innerHTML = `$${backed}<span>of $100,000 backed</span>`;
  var per = (backed * 100) / maxbacked;
  var newWidth = Number.parseFloat(per).toFixed(2) % 100;
  document.querySelector(".progress-bar").style.width =
    newWidth.toString() + "%";
  document.querySelector(".modal").style.display = "none";
  document.querySelector(".modal-thank").style.display = "block";
});

document.querySelector(".bl-button").addEventListener("click", () => {
  var baCollect = document.querySelector(".bl-input").value;
  var maxbacked = 100000;
  var backed = 50000;
  var tbackers = 5000;
  backed = backed + parseInt(baCollect);
  document.querySelector(".cf-total-backers").innerHTML = `${(tbackers =
    tbackers + 1)}<span>total backers</span>`;
  document.querySelector(
    ".cf-backed"
  ).innerHTML = `$${backed}<span>of $100,000 backed</span>`;
  var per = (backed * 100) / maxbacked;
  var newWidth = Number.parseFloat(per).toFixed(2) % 100;
  document.querySelector(".progress-bar").style.width =
    newWidth.toString() + "%";

  document.querySelector(".modal").style.display = "none";
  document.querySelector(".modal-thank").style.display = "block";
});
