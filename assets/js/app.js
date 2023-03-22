function scrollBottom(elem) {
    let scrollDown = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
    if (scrollDown == 0)
        return false;
    return scrollDown;
}
setInterval(() => {console.log(scrollBottom(document.getElementById("elem")));},1000);