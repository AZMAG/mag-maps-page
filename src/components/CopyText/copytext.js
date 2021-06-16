import React from "react";

function CopyText() {

  constructor(props) {
    super(props);

    this.state = {
      copySuccess: false,
    };
  };

  copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
    this.setState({ copySuccess: true });
  };

    return (
      <div>
        <div>
          <textarea
            ref={(textarea) => (this.textArea = textarea)}
            value="Example copy for the textarea."
          />
        </div>
        <div>
          <button onClick={() => this.copyCodeToClipboard()}>
            Copy to Clipboard
          </button>
          {this.state.copySuccess ? (
            <div style={{ color: "green" }}>Success!</div>
          ) : null}
        </div>
      </div>
    );
  }


export default CopyText;