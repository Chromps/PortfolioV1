var submit = document.querySelector("#mySubmit");
var form = document.forms[0];


form.addEventListener('input', function(){
  var name = form.name.value;
  var email = form.email.value;
  var comments = form.comments.value;
  if(name != "" && email != "" && comments !="" && email.match("@")){
    submit.classList.remove("invalid");
  }
  else if(submit.classList.value != "invalid"){
    submit.classList.add("invalid");
  }
})
