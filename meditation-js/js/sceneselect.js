let unloadedVideoSrc

let changeScene = (input)  => {

    /* Find Scene*/
    let scene = scenes.filter((item) => {
        return item["scene"] === input
    })[0]

    /* Change SFX */
    document.getElementById("sfx").src = "./sfx/" + scene["sfx"] + ".mp3";
    document.getElementById("sfx").play()
    document.getElementById("music").play()

    /* Change Background */
    document.getElementById("video").style.backgroundImage = "url('./img/" + scene["background"] + ".png')";

    /* Change Video */
    document.getElementById("video").src = ''
    if(!unloadedVideoSrc){
        document.getElementById("video").src = "./video/" + scene["video"] + ".mp4";
    }else{
        unloadedVideoSrc = "./video/" + scene["video"] + ".mp4";
    }
    /* Load Video from External Sources */
    if(scene['externalVideo'] && scene['externalVideo'] === true){
        if(!unloadedVideoSrc){
            document.getElementById("video").src = scene["video"]
        }else{
            unloadedVideoSrc = scene["video"]
        }
    }
    document.getElementById("video").play()

    /* Set Sources */
    document.querySelector('#videoSource').href = scene["videoSource"]
    document.querySelector('#sfxSource').href = scene["sfxSource"]
    document.querySelector('#musicSource').href = scene["musicSource"]
}

let toggleVideo = () => {
    if(!unloadedVideoSrc){
        unloadedVideoSrc = document.getElementById("video").src
        document.getElementById("video").src = ''
    }else{
        document.getElementById("video").src = unloadedVideoSrc
        unloadedVideoSrc = undefined
    }
}