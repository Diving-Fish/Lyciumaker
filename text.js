function getOffset(text){
    let offsetX = 0;
    let offsetY = 0;
    let color = 'rgba(0, 0, 0)'

    switch (text){
        case "♥":
            offsetX = 0.16;
            offsetY = -0.05;
            color = 'rgba(200, 64, 49)';
            break;
        case "♦":
            offsetX = 0.16;
            offsetY = -0.05;
            color = 'rgba(200, 64, 49)';
            break;
        case "♠":
            offsetX = 0.16;
            offsetY = -0.05;
            break;
        case "♣":
            offsetX = 0.16;
            offsetY = -0.05;
            break;
        case '1':
            offsetX = 0.1;
            break;
        case "f":
            offsetX = 0.1;
            break;
        case "i":
            offsetX = 0.1;
            break;
        case "j":
            offsetX = 0.1;
            break;
        case "l":
            offsetX = 0.1;
            break;
        case 'm':
            offsetX = -0.15;
            break;
        case 't':
            offsetX = 0.1;
            break;
        case 'v':
            offsetX = 0.1;
            break;
        case 'w':
            offsetX = -0.15;
            break;
    }

    return [text, offsetX, offsetY, color];
}

function drawSkillText(ctx, text, fontSize, bold, italic, x, y){
    let font = ""
    font += italic ? "Italic " : "";
    font += bold ? "Bold " : "";
    font += fontSize + "px FangZhengZhunYuan";
    ctx.font = font;

    const res = getOffset(text);
    text = res[0];
    const offsetX = res[1];
    const offsetY = res[2];
    ctx.fillStyle = res[3];

    ctx.fillText(text, x + offsetX * fontSize, y + offsetY * fontSize);
}

export{drawSkillText}