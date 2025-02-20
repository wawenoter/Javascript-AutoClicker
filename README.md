# AutoClicker - JavaScript

## Description

This simple JavaScript script creates an auto-clicker that simulates clicks at random locations on the screen at a specified time interval. It's ideal for automated testing or for use on websites that require fast and frequent clicks.

## How to Use

1. Open the developer console in your browser (in Chrome: `Ctrl + Shift + I` or `F12`).
2. Go to the "Console" tab.
3. Copy and paste the code below into the console.
4. Press Enter to start the clicks!

## Script

```javascript
function continuousClicker() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);

    // Create mousedown event
    const eventDown = new MouseEvent('mousedown', {
        clientX: x,
        clientY: y,
        bubbles: true,
        cancelable: true,
    });

    // Create mouseup event
    const eventUp = new MouseEvent('mouseup', {
        clientX: x,
        clientY: y,
        bubbles: true,
        cancelable: true,
    });

    // Dispatch the mousedown and mouseup events to simulate a click
    document.elementFromPoint(x, y).dispatchEvent(eventDown);
    document.elementFromPoint(x, y).dispatchEvent(eventUp);
}

// Set interval to trigger continuous clicking every 50ms (fast clicking)
setInterval(continuousClicker, 50);
