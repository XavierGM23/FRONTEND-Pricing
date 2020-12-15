document.querySelector(".btn-bg").addEventListener("click", function () {
            document.querySelector(".btn-radio").classList.toggle("transition");
            if (document.querySelector(".btn-radio").classList.contains("transition")) {
                    document.getElementById("basic-price").innerText = "$199.99";
                    document.getElementById("professional-price").innerText = "$249.99";
                    document.getElementById("master-price").innerText = "$399.99";
                } else {
                    document.getElementById("basic-price").innerText = "$19.99";
                    document.getElementById("professional-price").innerText = "$24.99";
                    document.getElementById("master-price").innerText = "$39.99";
                }
            });

document.querySelectorAll(".btn")[0].addEventListener("mouseenter", function () {
  document.querySelector("html").classList.toggle("one-bg");
});

document.querySelectorAll(".btn")[0].addEventListener("mouseleave", function () {
  document.querySelector("html").classList.toggle("one-bg");
});

document.querySelectorAll(".btn")[1].addEventListener("mouseenter", function () {
  document.querySelector("html").classList.toggle("two-bg");
});

document.querySelectorAll(".btn")[1].addEventListener("mouseleave", function () {
  document.querySelector("html").classList.toggle("two-bg");
});

document.querySelectorAll(".btn")[2].addEventListener("mouseenter", function () {
  document.querySelector("html").classList.toggle("three-bg");
});

document.querySelectorAll(".btn")[2].addEventListener("mouseleave", function () {
  document.querySelector("html").classList.toggle("three-bg");
});
