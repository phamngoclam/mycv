var AnimationMixin =  {
    fixTop: function (elDom) {
        const sticky = elDom.offsetTop;
        if (window.pageYOffset > sticky) {
            elDom.classList.add("sticky")
        } else {
            elDom.classList.remove("sticky");
        }
    }
};
export default AnimationMixin;
