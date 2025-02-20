function continuousClicker() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);


    const eventDown = new MouseEvent('mousedown', {
        clientX: x,
        clientY: y,
        bubbles: true,
        cancelable: true,
    });

    const eventUp = new MouseEvent('mouseup', {
        clientX: x,
        clientY: y,
        bubbles: true,
        cancelable: true,
    });

   
    document.elementFromPoint(x, y).dispatchEvent(eventDown);
    document.elementFromPoint(x, y).dispatchEvent(eventUp);
}


setInterval(continuousClicker, 50);
//put it in the console (firefox or something)
