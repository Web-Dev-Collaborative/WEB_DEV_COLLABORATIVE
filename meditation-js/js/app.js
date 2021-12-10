const containerDOM = document.getElementById('container')
const create = React.createElement

const {
    Button,
    color,
    Slider,
    Icon,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    IconButton
} = MaterialUI

let primary = '#ffffff'

let styles = {

    app: {
        height: '100%',
        width: '100%',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    VolumeControls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 5
    },

    VolumeControl: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'white',
        width: '40%',
        minWidth: 100,
        marginHorizontal: 10
    },

    sceneSwitch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    }
}


class VolumeControl extends React.Component{

    defaultMusicVol = 0.0
    defaultSfxVol = 0.4

    constructor(props){
        super(props)
        document.querySelector('#music').volume = this.defaultMusicVol
        document.querySelector('#sfx').volume = this.defaultSfxVol
    }

    state = {
        volume: (this.props.type == 'sfx') ? (this.defaultSfxVol * 100) : (this.defaultMusicVol * 100)
    }

    changeVol = (event, value) => {

        document.getElementById(this.props.type).volume = value/100
        this.setState({
            volume:  value
        })        
    }

    render(){

        let icon = ''
        let tooltipText = ''
        if(this.props.type === 'music'){
            icon = 'audiotrack'
            tooltipText = 'Change Music Volume'
        }else if(this.props.type === 'sfx'){
            icon = 'volume_down'
            tooltipText = 'Change Sound Effect Volume'
        }

        

        return(
            <div style={styles.VolumeControl}>
                <Icon>{icon}</Icon>
                <Slider
                    title= {tooltipText}
                    color = {primary}
                    value={this.state.volume}
                    onChange={this.changeVol}
                />
            </div>
        )
    }
}

class SceneSelect extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        currentScene : scenes[0]
    }

    selectScene = (event) => {
        changeScene(event.target.value)
        let scene = scenes.filter((item) => {
            return item["scene"] === event.target.value
        })[0]
        this.setState({
            currentScene : scene
        })
    }

    render(){
        return(
            <div>
                <FormControl title='Chnage Scene'>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.currentScene.scene}
                    onChange={this.selectScene}
                    >
                    <MenuItem value={'rain_on_leaves'}>Rain falling on leaves</MenuItem>
                    <MenuItem value={'forest_1'}>Calm Forest</MenuItem>
                    <MenuItem value={'campfire'}>Morning Campfire</MenuItem>
                    <MenuItem value={'stars'}>Among the Stars</MenuItem>
                    <MenuItem value={'sunset'}>Seaside Sunset</MenuItem>
                    <MenuItem value={'cloud_watching'}>Cloud Watching</MenuItem>
                    <MenuItem value={'jungle_after_rainfall'}>Jungle After Rainfall</MenuItem>
                    </Select>
                    <FormHelperText>{this.state.currentScene.description}</FormHelperText>
                </FormControl>
            </div>
        )
    }
}

class MediaInfo extends React.Component{
    constructor(props){
        super(props)
    }

    state={
        
    }

    render(){
        return(
            <div id='mediaInfo'>
                <a id='videoSource' title='Video Source' target="_blank"><Icon>play_arrow</Icon></a>
                <a id='sfxSource' title='Sound Source' target="_blank"><Icon>graphic_eq</Icon></a>
                <a id='musicSource' title='Music Source' target="_blank"><Icon>music_video</Icon></a>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
    }


    state={
        videoMode: 'videocam'
    }

    switchVideo = (e) => {
        toggleVideo()
        if(this.state.videoMode === 'videocam'){
            this.setState({
                videoMode: 'videocam_off'
            })
        }else{
            this.setState({
                videoMode: 'videocam'
            })
        }
    }

    toggleTimer = (e) => {
        let timerElement = document.querySelector('#appTimer')
        if(!timerElement.style.display || timerElement.style.display === 'none'){
            timerElement.style.display = 'flex'
        }else{
            timerElement.style.display ='none'
        }
    }

    toggleMediaInfo = (e) => {
        let mediaInfoElement = document.querySelector('#mediaInfo')
        if(!mediaInfoElement.style.display || mediaInfoElement.style.display === 'none'){
            mediaInfoElement.style.display = 'flex'
        }else{
           mediaInfoElement.style.display ='none'
        }
    }

    
    render(){
        return(
            <div id='app' style={styles.app}>
                <MainTimer />
                <MediaInfo/>
               <div id='sceneSwitch' style={styles.sceneSwitch}>
               <IconButton title='Toggle Video On/Off' aria-label="switch_video" onClick={this.switchVideo}>
                    <Icon>{this.state.videoMode}</Icon>
                </IconButton>
                <IconButton title='Show/Hide Timer' onClick={this.toggleTimer}>
                    <Icon>timer</Icon>
                </IconButton>
                <IconButton title='Show/Hide Media Sources' onClick={this.toggleMediaInfo} >
                    <Icon>info</Icon>
                </IconButton>
                    <SceneSelect />
               </div>
               <div id='volControls' style={styles.VolumeControls}>
               <VolumeControl type='music'/>
               <VolumeControl type='sfx' />
                
               </div>
            </div>
        )
    }
}


ReactDOM.render(create(App), containerDOM)