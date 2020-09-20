var AnimationMixin =  {
    fixTop: function (elDom) {
        const sticky = elDom.offsetTop;
        if (window.pageYOffset > sticky) {
            elDom.classList.add("sticky")
        } else {
            elDom.classList.remove("sticky");
        }
    },
    customHomepage: function () {
        const containerEl = document.getElementById("container-Id");
        
    }
};
export default AnimationMixin;
