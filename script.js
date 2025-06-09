const output = document.getElementById('output');
const input = document.getElementById('input');

const commands = {
  help: () => `Available commands: ${Object.keys(commands).join(', ')}`,
  about: () => `Hi, I'm Aadi Shah. I'm building cool projects with JavaScript.`,
  projects: () => `- portfolio-terminal\n- more coming soon`,
  contact: () => `Email: aadi@example.com`
};

function handleCommand(cmd) {
  const [name, ...args] = cmd.split(' ');
  const fn = commands[name];
  if (fn) return fn(args);
  return `Command not found: ${name}`;
}

function appendOutput(text) {
  output.textContent += text + '\n';
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    appendOutput(`$ ${command}`);
    appendOutput(handleCommand(command));
    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

appendOutput('Welcome to Aadi Shah\'s portfolio. Type "help" for commands.');
