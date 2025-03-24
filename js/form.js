const formBehavior = () => {
  var form = document.getElementById("my-form");
  
  if(!form) return;

  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Obrigado pelo contato. Retornarei em breve!";
  }

  function error() {
    status.innerHTML = "Oops! Algo deu errado.";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
}


window.addEventListener("DOMContentLoaded", function () {
  formBehavior();
});

