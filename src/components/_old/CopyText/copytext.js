import React, { useState } from "react";

function CopyText() {
  const [state, setState] = useState({
    copySuccess: false,
  });

  let textArea;

  const copyCodeToClipboard = () => {
    const el = textArea;
    el.select();
    document.execCommand("copy");
    setState({ copySuccess: true });
  };

  return (
    <div>
      <div>
        <textarea
          ref={(textarea) => (textArea = textarea)}
          value="Example copy for the textarea."
        />
      </div>
      <div>
        <button onClick={() => copyCodeToClipboard()}>Copy to Clipboard</button>
        {state.copySuccess ? (
          <div style={{ color: "green" }}>Success!</div>
        ) : null}
      </div>
    </div>
  );
}

export default CopyText;
