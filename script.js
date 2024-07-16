const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(300, 300, 50, 0, Math.PI * 2);
ctx.fillStyle = 'green';
ctx.fill();

// Define interactive areas
const areas = [
    { type: 'rect', x: 50, y: 50, width: 100, height: 100, action: () => alert('Clicked on the rectangle!') },
    { type: 'circle', x: 300, y: 300, radius: 50, action: () => alert('Clicked on the circle!') }
];

// Add event listener for clicks
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let area of areas) {
        if (area.type === 'rect' && x > area.x && x < area.x + area.width && y > area.y && y < area.y + area.height) {
            area.action();
            break;
        } else if (area.type === 'circle') {
            const dx = x - area.x;
            const dy = y - area.y;
            if (dx * dx + dy * dy < area.radius * area.radius) {
                area.action();
                break;
            }
        }
    }
});