import React from "react"
// import PropTypes from "prop-types"

import "./player.css"

function formatTime(time) {
  // Hours, minutes and seconds
  const hrs = Math.floor(~~(time / 3600)) // eslint-disable-line
  const mins = Math.floor(~~((time % 3600) / 60)) // eslint-disable-line
  const secs = Math.floor(time % 60)

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = ""

  if (hrs > 0) {
    ret += `${hrs}:${mins < 10 ? "0" : ""}`
  }

  ret += `${mins}:${secs < 10 ? "0" : ""}`
  ret += `${secs}`
  return ret
}

function renderValueText(time) {
  const formattedTime = formatTime(time)
  const split = formattedTime.split(":")
  const seconds = split.pop()
  const minutes = split.pop()

  const renderedText =
    minutes === 0
      ? `${seconds} seconds`
      : `${minutes} minutes, ${seconds} seconds`
  return renderedText
}

function renderValueNow(time) {
  const hrs = Math.floor(~~(time / 3600)) // eslint-disable-line
  const mins = Math.floor(~~((time % 3600) / 60)) // eslint-disable-line
  const secs = Math.floor(time % 60)
  return hrs * 3600 + mins * 60 + secs
}

class Player extends React.Component {
  constructor(props) {
    super(props)
    let lastPlayed = 0
    let lastVolumePref = 1
    let lastPlaybackRate = 1

    this.state = {
      progressTime: 50,
      isPlaying: false,
      duration: 0,
      currentTime: lastPlayed,
      currentVolume: lastVolumePref,
      playbackRate: lastPlaybackRate,
      timeWasLoaded: lastPlayed !== 0,
    }
  }

  componentWillUpdate(nextProps, nextState) {
    this.audio.playbackRate = nextState.playbackRate
  }

  componentDidUpdate(prevProps, prevState) {
    const { show } = this.props
    const { currentTime, currentVolume, playbackRate } = this.state
    if (show.title !== prevProps.show.title) {
      const lp = localStorage.getItem(`lastPlayed${show.number}`)
      if (lp) {
        const lastVolume = localStorage.getItem(`lastVolumeSetting`)
        const lastPlayback = localStorage.getItem(`lastPlaybackSetting`)
        const data = JSON.parse(lp)
        const data2 = JSON.parse(lastVolume)
        const data3 = JSON.parse(lastPlayback)

        this.setState({
          currentTime: data.lastPlayed,
          currentVolume: data2.lastVolumePref,
          playbackRate: data3.lastPlaybackRate,
        })
        this.audio.currentTime = data.lastPlayed
        this.audio.volume = data2.lastVolumePref
        this.audio.playbackRate = data3.lastPlaybackRate
      }

      this.audio.play()
    } else {
      localStorage.setItem(
        `lastPlayed${show.number}`,
        JSON.stringify({ lastPlayed: currentTime })
      )
      localStorage.setItem(
        `lastVolumeSetting`,
        JSON.stringify({ lastVolumePref: currentVolume })
      )
      localStorage.setItem(
        `lastPlaybackSetting`,
        JSON.stringify({ lastPlaybackRate: playbackRate })
      )
    }
  }

  playPause = () => {
    const { isPlaying } = this.state
    this.setState({ isPlaying: !isPlaying })
    isPlaying ? this.audio.pause() : this.audio.play()
  }

  timeUpdate = e => {
    const { show } = this.props
    const { timeWasLoaded, currentTime } = this.state
    if (timeWasLoaded) {
      const lp = localStorage.getItem(`lastPlayed${show.number}`)

      if (lp) {
        e.currentTarget.currentTime = JSON.parse(lp).lastPlayed
      }
      this.setState({ timeWasLoaded: false })
    } else {
      const { currentTime = 0, duration = 0 } = e.currentTarget

      const progressTime = (currentTime / duration) * 100
      if (Number.isNaN(progressTime)) return
      this.setState({ progressTime, currentTime, duration })
    }
  }

  volumeUpdate = e => {
    const { timeWasLoaded } = this.state
    // Check if the user already had a curent volume
    if (timeWasLoaded) {
      const lastVolume = localStorage.getItem(`lastVolumeSetting`)
      if (lastVolume) {
        e.currentTarget.volume = JSON.parse(lastVolume).lastVolumePref
      }
      this.setState({ timeWasLoaded: false })
    }
  }

  groupUpdates = e => {
    this.timeUpdate(e)
    this.volumeUpdate(e)
  }

  togglePlay = () => {
    const { playing } = this.state
    const method = playing ? "pause" : "play"
    this.audio[method]()
  }

  scrubTime = eventData =>
    (eventData.nativeEvent.offsetX / this.progress.offsetWidth) *
    this.audio.duration

  scrub = e => {
    this.audio.currentTime = this.scrubTime(e)
  }

  volume = e => {
    this.audio.volume = e.currentTarget.value
    this.setState({
      currentVolume: `${e.currentTarget.value}`,
    })
  }

  speedUp = () => {
    this.speed(0.25)
  }

  speedDown = e => {
    e.preventDefault()
    this.speed(-0.25)
  }

  speed = change => {
    const playbackRateMax = 2.5
    const playbackRateMin = 0.75

    let playbackRate = this.state.playbackRate + change

    if (playbackRate > playbackRateMax) {
      playbackRate = playbackRateMin
    }

    if (playbackRate < playbackRateMin) {
      playbackRate = playbackRateMax
    }

    this.setState({ playbackRate })
  }

  render() {
    const { isPlaying, currentTime, duration } = this.state
    const { show } = this.props

    return (
      <div className="player">
        <audio
          ref={audio => (this.audio = audio)}
          onTimeUpdate={this.timeUpdate}
          onVolumeChange={this.volumeUpdate}
          onLoadedMetadata={this.groupUpdates}
          src={show.audio}
        />
        <div className="player__section player__section--left">
          <button onClick={this.playPause}>
            {isPlaying ? "pause" : "play"}
          </button>

          <p>
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>
        </div>
        <div className="player__section player__section--middle">
          <div className="podcast-player__progress">
            <div className="podcast-player__progress-loaded" />
            <div
              className="podcast-player__progress-played"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            <div
              orientation="horizontal"
              tabIndex="0"
              className="podcast-player__slider"
              role="slider"
              aria-label="audio timeline"
              aria-valuemin="0"
              aria-valuemax={duration}
              aria-valuetext={renderValueText(currentTime)}
              aria-valuenow={renderValueNow(currentTime)}
              style={{ left: `${(currentTime / duration - 0.01) * 100}%` }}
            />
          </div>
        </div>
        <div className="player__section player__section--right">somethings</div>
      </div>
    )
  }
}

export default Player
