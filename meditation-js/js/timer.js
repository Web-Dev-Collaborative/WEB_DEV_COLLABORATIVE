const containerDOM = document.getElementById('container')
const create = React.createElement

let styles = {

}

class Adjuster extends React.Component{
    constructor(props){
        super(props)
    }

    labelText = this.props.type + ' length'

    render(){
        return(
            <div class='adjuster'>
            <h6 id={this.props.type+'-label'}>{this.labelText}</h6>
            <div class='adjuster_module'>
                <a 
                    id={this.props.type+'-decrement'}
                    class="large waves-effect btn-floating"
                    onClick={() => {
                        this.props.adjust(this.props.type+'_length', -1)
                    }}
                >
                    <Icon id='adjuster_button_up'>keyboard_arrow_down</Icon>
                </a>
                <div class='adjuster-info'>
                    <h5 id={this.props.type+'-length'}>{this.props.length}</h5>
                </div>
                <a 
                    id={this.props.type+'-increment'}
                    class="large waves-effect btn-floating"
                    onClick={() => {
                        this.props.adjust(this.props.type+'_length', 1)
                    }}
                >
                    <Icon id='adjuster_button_down'>keyboard_arrow_up</Icon>
                </a>
            </div>
                
            </div>
        )
    }
}

class Display extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id='display'>
                <h4 id='timer-label'>{this.props.mode}</h4>
                <h2 id='time-left'>{this.props.mins}:{this.props.secs}</h2>
            </div>
        )
    }
}


class MainTimer extends React.Component{
    constructor(props){
        super(props)
    }

    interval;

    state={
        mode: 'Session',
        break_length: 5,
        session_length: 25,
        duration: 25*60,
        minutes: '25',
        seconds: '00',
        status: 'Stopped'
    }

    startTimer = () => {
        let timer = this.state.duration

        let minutes = parseInt(timer / 60, 10)
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        this.setState({
            status: 'Running',
            minutes: minutes,
            seconds: seconds
        })

        timer = timer - 1

        this.interval = setInterval(function () {

            if(this.state.status === 'Stopped'){
                clearInterval(this.interval)
            }

            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            this.setState({
                minutes: minutes,
                seconds: seconds
            })

            if (timer === 0) {
                document.getElementById('beep').play()
                clearInterval(this.interval)
                let timerElement = document.querySelector('#appTimer')
                if(!timerElement.style.display || timerElement.style.display === 'none'){
                    timerElement.style.display = 'flex'
                }
                setTimeout(() => {
                    if(this.state.mode === 'Session'){
                        this.startBreak()
                    }else{
                        this.startSession()
                    }
                }, 100)
            }else{
                timer = timer -1
            }

        }.bind(this), 1000);
    }

    adjust = (type, value) => {
        if(this.state[type] === 1 && value < 0){
            return
        }

        if(this.state[type] === 60 && value >0){
            return
        }

        this.state[type] = this.state[type] + value
        this.state.duration = this.state.session_length * 60

        let mins = parseInt(this.state.duration / 60, 10)
        let secs = parseInt(this.state.duration % 60, 10)

        mins= mins < 10 ? "0" + mins : mins
        secs = secs < 10 ? "0" + secs : secs

        this.setState({
            minutes: mins,
            seconds: secs
        })
    }

    startSession = () => {
        this.setState({
            mode: 'Session',
            duration: this.state.session_length *60
        })
        this.startTimer()
        this.forceUpdate()
    }

    startBreak = () => {
        this.state.mode = 'Break'
        this.state.duration = this.state.break_length * 60
        this.forceUpdate()
        this.startTimer()
    }

    reset = () => {
        document.getElementById('beep').pause();
        document.getElementById('beep').currentTime = 0;
        clearInterval(this.interval)
        this.setState({
            mode: 'Session',
            break_length: 5,
            session_length: 25,
            duration: 25 * 60,
            minutes: '25',
            seconds: '00',
            status: 'Stopped'
        })
    }

    startStop = () => {
        if(this.state.status === 'Stopped'){
            this.startSession()
        }
        if(this.state.status === 'Paused'){
            this.state.duration = (this.state.minutes * 60) + this.state.seconds
            this.startTimer()
        }
        if(this.state.status === 'Running'){
            this.state.status = 'Paused'
            clearInterval(this.interval)
        }
    }

    render(){
        return(
            <div id='appTimer'>
                <audio id='beep' ref="audio_tag" src="../sfx/beep.wav"/>
                <div id='first'>
                    <Display mode={this.state.mode} mins={this.state.minutes} secs={this.state.seconds}/>
                </div>
                <div id='second'>
                    <a 
                        id='start_stop'
                        class="large waves-effect btn-floating"
                        onClick={() => {
                            this.startStop()
                        }}
                    ><Icon id='timer_button_start'>play_arrow</Icon></a>
                    <a 
                        id='reset'
                        class="large waves-effect btn-floating"
                        onClick={() => {
                            this.reset()
                        }}
                    ><Icon id='timer_button_reset'>restore</Icon></a>
                </div>
                <div id='third'>
                    <Adjuster type='session' length={this.state.session_length} adjust={this.adjust}/>
                    <Adjuster type='break' length={this.state.break_length} adjust={this.adjust}/>
                </div>
            </div>
        )
    }
}

