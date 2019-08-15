import React from "react"
import { SW_UPDATE_EVENT } from "../../service-worker-constants"
import "./sw-update.css"

class Footer extends React.Component {
  state = {
    updateToastVisible: false,
  }

  componentDidMount() {
    window.addEventListener(SW_UPDATE_EVENT, e => {
      this.setState({
        updateToastVisible: false,
      })
    })
  }
  render() {
    return (
      <div
        className={`sw-update-toast ${
          this.state.updateToastVisible ? "visible" : ""
        }`}
        onClick={() => {
          window.location.reload()
        }}
      >
        <span>🎉</span>
        <span class="text">New content available! Click here to refresh.</span>
        <button
          class="close"
          onClick={e => {
            e.stopPropagation()
            e.preventDefault()
            this.setState({
              updateToastVisible: false,
            })
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            class="icon-close"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#fff"/>
          </svg>
        </button>
      </div>
    )
  }
}

export default Footer
