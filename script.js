let clipboard = document.getElementsByTagName("clipboard-copy");
//prepend 'git clone' to clipboard's value attribute
clipboard[0].setAttribute("value", "git clone " + clipboard[0].getAttribute("value"));
