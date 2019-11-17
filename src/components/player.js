import React from "react"
import { FaPlay, FaPause, FaUndo, FaRedo } from "react-icons/fa"

import VolumeBars from "./VolumeBars"
import { formatTime, renderValueNow, renderValueText } from "../utils/util"

import "./player.css"

class Player extends React.Component {
  constructor(props) {
    super(props)
    let lastPlayed = 0
    let lastVolumePref = 1
    let lastPlaybackRate = 1

    this.handleScroll = this.handleScroll.bind(this)

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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
    const { timeWasLoaded, currentTime, duration } = this.state

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

    if (currentTime === duration) this.setState({ isPlaying: false })
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

  minusFifteenSeconds = e => {
    this.audio.currentTime = this.audio.currentTime - 15
  }

  plusFifteenSeconds = e => {
    this.audio.currentTime = this.audio.currentTime + 15
  }

  moveSlider = e => {
    if (e.key === "ArrowRight") {
      this.audio.currentTime = this.audio.currentTime + 5
    } else if (e.key === "ArrowLeft") {
      this.audio.currentTime = this.audio.currentTime - 5
    }
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

  handleScroll = () => {
    const playerScrollY = document.getElementById("thanks-message").offsetTop;
    const windowScrollY = window.pageYOffset;
    const controls = document.getElementsByClassName("player")[0];
    if (windowScrollY >= playerScrollY) {
      controls.classList.add("player--sticky");
    } else {
      controls.classList.remove("player--sticky");
    }
  }

  render() {
    const { isPlaying, currentTime, duration, playbackRate } = this.state
    const { show } = this.props

    return (
      <React.Fragment>
        <div className="player" aria-labelledby="podcast-title">
          <audio
            ref={audio => (this.audio = audio)}
            onTimeUpdate={this.timeUpdate}
            onEnded={() => this.setState({ isPlaying: false })}
            onVolumeChange={this.volumeUpdate}
            onLoadedMetadata={this.groupUpdates}
            src={show.audio}
          />
          <div className="player__section player__section--left">
            <div className="player__buttons">
              {" "}
              <button className="player__icon" onClick={this.playPause}>
                {isPlaying ? <FaPause size="1.5em" /> : <FaPlay size="1.5em" />}
                <span className="sr-only">{isPlaying ? "pause" : "play"}</span>
              </button>
              <button
                className="player__rewind"
                aria-label="Rewind 15 Seconds"
                onClick={this.minusFifteenSeconds}
              >
                <span>
                  <FaUndo size="1.5em" />
                </span>
                <span className="seconds">15</span>
              </button>
              <button
                className="player__fast-forward"
                aria-label="Fast Forward 15 Seconds"
                onClick={this.plusFifteenSeconds}
              >
                <span>
                  <FaRedo size="1.5em" />
                </span>
                <span className="seconds">15</span>
              </button>
            </div>
            <p style={{ margin: 0 }} className="player__control-time">
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          </div>
          <div className="player__section player__section--middle">
            <div className="player__volume">
              <div className="player__inputs">
                <VolumeBars volume={this.volume} />
              </div>
            </div>
          </div>
          <div className="player__section player__section--right">
            <div
              className="player__progress"
              onClick={this.scrub}
              ref={x => (this.progress = x)}
            >
              <div className="player__progress-loaded" />
              <div
                className="player__progress-played"
                style={{ width: `${(currentTime / duration + 0.015) * 100}%` }}
              />
              <div
                orientation="horizontal"
                onKeyDown={this.moveSlider}
                tabIndex="0"
                className="player__slider"
                role="slider"
                aria-label="audio timeline"
                aria-valuemin="0"
                aria-valuemax={duration}
                aria-valuetext={renderValueText(currentTime)}
                aria-valuenow={renderValueNow(currentTime)}
                style={{ left: `${(currentTime / duration - 0.01) * 100}%` }}
              />
            </div>
            <div className="player__title">
              <p id="podcast-title" style={{ margin: 0 }}>
                {show.title}
              </p>
              <button
                onClick={this.speedUp}
                onContextMenu={this.speedDown}
                className="player__speed"
                type="button"
                aria-label="Update Speed by .25"
              >
                <span className="player__speeddisplay">
                  {playbackRate}&times;
                </span>
              </button>
            </div>
          </div>
        </div>
        <span style={{ fontSize: "0.625rem" }} id="thanks-message">
          This player's code is loosely copy and pasted from{" "}
          <a href="https://github.com/wesbos/Syntax/blob/master/components/Player.js">
            Syntax.fm
          </a>
          . Thanks Wes and Scott for keeping your site open source!
        </span>
      </React.Fragment>
    )
  }
}

export default Player
