#!/bin/bash
echo "Installing dependencies..."
# Install Tailwind CSS as a dev dependency
npm install -D tailwindcss
echo "install [ 1 / 4 ] done"
# Initialize Tailwind CSS
npx tailwindcss init
echo "install [ 2 / 4 ] done"
# Install React Icons
npm install react-icons --save
echo "install [ 3 / 4 ] done"
# Install use-gesture and react-spring
npm install @use-gesture/react react-spring
echo "install [ 4 / 4 ] done"
echo "All dependencies have been installed successfully."
