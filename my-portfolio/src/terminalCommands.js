const files = {
  'about.txt': `
Hi, I’m Aadi Shah.
Welcome to my portfolio.
`,
  'projects.txt': `
- Portfolio: This site
- Project2: Description
`,
  'contact.txt': `
Email: you@example.com
GitHub: github.com/yourhandle
`,
};

export function runCommand(cmd) {
  const [base, ...args] = cmd.trim().split(' ');
  switch (base) {
    case 'help':
      return 'Available commands: help, ls, cat <file>';
    case 'ls':
      return Object.keys(files).join('  ');
    case 'cat':
      if (!args[0]) return 'Usage: cat <filename>';
      return files[args[0]] || `cat: ${args[0]}: No such file`;
    default:
      return `${base}: command not found`;
  }
}
