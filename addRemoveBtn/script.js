var str = document.getElementById("str");
var btn = document.querySelector("button");
var flag = 0;

btn.addEventListener("click", function (e) {
  if (flag == 0) {
    str.innerHTML = "friend";
    str.style.color = "green";
    btn.innerHTML = "remove friend ";
    flag = 1;
  } else {
    str.innerHTML = "strager";
    str.style.color = "red";
    btn.innerHTML = "Add friend ";
    flag = 0;
  }
});
