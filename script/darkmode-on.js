// チェックボックスの取得
const btn = document.querySelector("#btn-mode");

// チェックした時の挙動
btn.addEventListener("change", () => {
  let body = document.querySelector("body");
  let header = document.querySelector("header");
  let footer = document.querySelector("footer");
  if (btn.checked == true) {
    // ダークモード
    body.className = "dark-theme";
    header.className = "hf-dark-theme";
    footer.className = "hf-dark-theme";
  } else {
    // ライトモード
    body.className = "light-theme";
    header.className = "hf-light-theme";
    footer.className = "hf-light-theme";
  }
});
