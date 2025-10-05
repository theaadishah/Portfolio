import React, { useState } from 'react';
import { Terminal, ColorMode } from 'react-terminal-ui';
import 'react-terminal-ui/dist/index.css';
import { runCommand } from '../terminalCommands';

export default function TerminalUI() {
  const [history, setHistory] = useState([]);

  const handleInput = input => {
    const output = runCommand(input);
    setHistory([...history, { cmd: input, output }]);
  };

  return (
    <div className="h-full">
      <Terminal
        history={history.map(h => [`$ ${h.cmd}`, h.output]).flat()}
        prompt="$"
        onInput={handleInput}
        theme={ColorMode.Dark}
        showControlButtons
      />
    </div>
  );
}
