import React, { Component, Fragment } from "react"

// TODO Fix all eslint issues

// data generator -> to create 10 volume bars
const getItems = count => {
  return Array.from({ length: count }, (v, i) => (i + 1) * 10).map(k => {
    let decimal = k / 100
    return {
      integer: `${k}`,
      deci: `${decimal}`,
      vol: `vol${k}`,
      level: `Volume Level ${k}/100`,
      checked: true,
    }
  }) // END MAP
} // END ARROW

class VolumeBars extends Component {
  state = {
    volumeBarList: getItems(10),
  }

  componentDidMount() {
    const localKey = `lastVolumeBarsOn`
    const localStorageRef = localStorage.getItem(localKey)
    if (localStorageRef) {
      this.setState({ volumeBarList: JSON.parse(localStorageRef) })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const localKey = `lastVolumeBarsOn`
    const localValue = JSON.stringify(this.state.volumeBarList)
    localStorage.setItem(localKey, localValue)
  }

  //We are going to track which volume bars are "checked"
  handleOnClick = index => {
    // make a copy of state
    const volumeBarList = [...this.state.volumeBarList]
    // Get the index positions from 0 till index (index clicked)
    for (let i = 0; i <= index; i++) {
      volumeBarList[i].checked = true
    }
    // Get the index positions of the remaining non-checked
    for (let i = index + 1; i < 10; i++) {
      volumeBarList[i].checked = null
    }
    // Update State
    this.setState({
      volumeBarList,
    })
  }

  render() {
    return (
      <fieldset>
        <legend className="sr-only">Volume</legend>
        <div className="player__volume-controls">
          {this.state.volumeBarList.map((item, index) => (
            <Fragment key={item.integer}>
              <input
                onClick={() => {
                  this.handleOnClick(index)
                }}
                onChange={this.props.volume}
                type="radio"
                name="volume"
                value={item.deci}
                id={item.vol}
                className="sr-only"
              />
              <label
                htmlFor={item.vol}
                className={item.checked ? "checked" : ""}
              >
                <span className="sr-only">{item.level}</span>
              </label>
            </Fragment>
          ))}
        </div>
      </fieldset>
    )
  }
}

export default VolumeBars
