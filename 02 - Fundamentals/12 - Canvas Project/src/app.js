export function config() {
    return {
        img: [
            // List all file names from the folder ./assets/ that you want to use
            'cat.png',
            'dog.png',
            'mouse.png',
        ]
    };
}

export function app(draw) {
    const catPosition = {
        x: 400,
        y: 300
    };
    const mice = [];

    // const buttons = [];

    // function drawButton(label, x, y) {
    //     draw.rect(x, y, 200, 35, 'gray');
    //     draw.text(label, x + 10, y + 25);
    // }

    function render() {
        // Clear previous frame and draw grid
        draw.clear();
        draw.grid();

        // Get cat coordinates and draw on scene at 25% scale
        draw.image('cat.png', catPosition.x, catPosition.y, 0.25);

        // Iterate mice array and draw each mouse at 10% scale
        for (let mouse of mice) {
            draw.image('mouse.png', mouse.x, mouse.y, 0.1);
        }

        // for (let button of buttons) {
        //     drawButton(button.label, button.x, button.y);
        // }
    }

    // This function is executed when the application starts
    function start() {
        // buttons.push({ label: 'Hello, canvas!', x: 50, y: 50, color: 'gray' });
        // buttons.push({ label: 'Click me!', x: 100, y: 200, color: 'gray' });
        // buttons.push({ label: 'My third button', x: 300, y: 500, color: 'yellow' });
    
        //render();
    }

    // This function is executed when you click on the page
    function onClick(x, y) {
        const distance = Math.sqrt((catPosition.x - x) ** 2 + (catPosition.y - y) ** 2);
        console.log(distance);

        // for (let button of buttons) {
        //     if (x >= button.x && x <= button.x + 200) {
        //         if (y >= button.y && y <= button.y + 35) {
        //             draw.clear();
        //             drawScene();
        //             draw.text(`You have clicked the button labeled "${button.label}"`, 100, 400);
        //         }
        //     }
        // }

        mice.push({ x: x, y: y });
        //render();
    }

    // This function is executed when you press a key on the keyboard
    function onKey(key, pressed) {
        console.log(key, pressed);
        
        if (key == 'ArrowUp' && pressed) {
            catPosition.y -= 5;
        } else if (key == 'ArrowDown' && pressed) {
            catPosition.y += 5;
        }
        
        if (key == 'ArrowLeft' && pressed) {
            catPosition.x -= 5;
        } else if (key == 'ArrowRight' && pressed) {
            catPosition.x += 5;
        }

        mice.forEach((m, i) => {
            const distance = Math.sqrt((catPosition.x - m.x) ** 2 + (catPosition.y - m.y) ** 2);
            console.log(distance, m);
            if (distance < 90) {
                mice.splice(i, 1);
                //render();
            }
        });
        
        //console.log(distance);
        //render();
    }

    return {
        start,
        onClick,
        onKey,
        render
    };
}