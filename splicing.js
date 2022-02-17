function drawNameChar(ctx, char, fontSize, x, y, lm=0, rm=0, tm=0, bm=0, xo=0, yo=0){
    const hOffset = 0.2;
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    let dpr =  window.devicePixelRatio * 2;
    tempCanvas.width = fontSize * dpr  + 1.0;  // 不加1.0 Safari 会绘制失败
    tempCanvas.height = fontSize * dpr * (1 + hOffset) + 1.0;  // 不加1.0 Safari 会绘制失败

    tempCanvas.style.width = fontSize;
    tempCanvas.style.height = fontSize;
    tempCtx.scale(dpr, dpr)

    tempCtx.font = fontSize + "px JinMeiMaoCaoXing";

    // 描边
    tempCtx.strokeStyle = "rgb(0, 0, 0)";
    tempCtx.lineWidth = 3.5;
    tempCtx.strokeText(char, 0, fontSize);

    // 内部
    tempCtx.fillStyle = "rgb(255, 255, 255)";
    tempCtx.fillText(char, 0, fontSize);

    // ctx.fillRect(0, 0, 100, 100);

    const sx = fontSize*dpr*lm;
    const sy = fontSize*dpr*tm;
    const sw = fontSize*dpr*(lm+1-rm);
    const sh = fontSize*dpr*(tm+1-bm+hOffset);

    const dx = x+fontSize*lm + xo*fontSize;
    const dy = y+fontSize*tm + yo*fontSize - fontSize;
    const dh = fontSize*(tm+1-bm+hOffset);
    const dw = fontSize*(lm+1-rm);

    ctx.drawImage(tempCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
}


function drawName(ctx, char, x, fontSize, y){
    switch (char){
        case "劭":
            drawNameChar(ctx, "邵", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.5);
            drawNameChar(ctx, "助", fontSize, x+0*fontSize, y+0*fontSize, 0.50, 0);
            break;
        case "詡":
            drawNameChar(ctx, "訂", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.55);
            drawNameChar(ctx, "翔", fontSize, x+0*fontSize, y+0*fontSize, 0.5, 0, 0, 0, -0.04, -0.05);
            break;
        case "瑀":
            drawNameChar(ctx, "玨", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.6);
            drawNameChar(ctx, "齲", fontSize, x+0*fontSize, y+0*fontSize, 0.44, 0, 0, 0, 0, 0.1);
            break;
        case "綝":
            drawNameChar(ctx, "紂", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.59);
            drawNameChar(ctx, "淋", fontSize, x+0*fontSize, y+0*fontSize, 0.33, 0, 0, 0, 0.05, 0);
            break;
        case "琮":
            drawNameChar(ctx, "玨", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.6);
            drawNameChar(ctx, "綜", fontSize, x+0*fontSize, y+0*fontSize, 0.38, 0, 0, 0, 0, 0.05);
            break;
        case "輅":
            drawNameChar(ctx, "軌", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.54);
            drawNameChar(ctx, "胳", fontSize, x+0*fontSize, y+0*fontSize, 0.43, 0, 0, 0, 0, 0);
            break;
        case "禰":
            drawNameChar(ctx, "衫", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.62);
            drawNameChar(ctx, "爾", fontSize, x+0*fontSize, y+0*fontSize, 0, 0, 0, 0, 0.12, 0);
            break;
        case "粲":
            drawNameChar(ctx, "璨", fontSize, x+0*fontSize, y+0*fontSize, 0.35, 0, 0, 0, -0.1, 0);
            break;
        case "儁":
            drawNameChar(ctx, "俊", fontSize, x+0*fontSize, y+0*fontSize, 0, 0.65);
            drawNameChar(ctx, "雋", fontSize, x+0*fontSize, y+0*fontSize, 0, 0, 0, 0, 0.1, 0.05);
            break;
        case "界":
            drawNameChar(ctx, "介", fontSize, x+0*fontSize, y+0*fontSize, 0, 0, 0, 0, -0.05, 0.3);
            drawNameChar(ctx, "異", fontSize, x+0*fontSize, y+0*fontSize, 0, 0, 0, 0.6,-0.05, -0.03);
            break;
        default:
            drawNameChar(ctx, char, fontSize, x, y, 0, 0, 0, 0, 0, 0);
            break;
    }
}

export{drawName};