let goButton = () => {

    document.getElementById("infoPanel").style.display = "none";
    document.getElementsByClassName('controls')[0].style.display = "none"
    document.getElementById('container').style.display = "flex";

    changeScene('rain_on_leaves')
    setupUiHide()
}