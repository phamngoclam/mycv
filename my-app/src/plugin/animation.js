class Animation {
    static fixTop(domEl){
        const sticky = domEl.offsetTop;
        if(window.pageYOffset > sticky) {
            domEl.classList.add("sticky")
        } else {
            domEl.classList.remove("sticky");
        }
    };
}
export default Animation;
