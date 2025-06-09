# Aadi Shah Portfolio

This repository contains two versions of a terminal-style portfolio.

## Simple Version

Open `index.html` in your browser to try a minimal implementation. It accepts commands like `help`, `about`, `projects`, and `contact`.

### macOS Quick Start

If you're on macOS and want to preview the static version quickly, run:

```bash
./run_on_mac.sh
```

This script simply opens `index.html` in your default browser.

## React Version

A full React app lives in the `my-portfolio` folder. To run it locally:

First make sure [Node.js](https://nodejs.org/) is installed. On macOS you can
use [Homebrew](https://brew.sh/):

```bash
brew install node
```

```bash
cd my-portfolio
npm install
npm start
```

Then open <http://localhost:3000> in your browser.

The React version uses **react-terminal-ui** and Tailwind CSS to emulate a terminal interface. Update the files in `src/` to customize the commands and content.

Due to the development environment, external data could not be fetched from **aadishah.org**. Update the placeholders with real information as needed.
