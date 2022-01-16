function drawNameChar(ctx, char, fontSize, x, y, lm=0, rm=0, tm=0, bm=0, xo=0, yo=0){
    const hOffset = 0.2;
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    let dpr =  window.devicePixelRatio * 2;
    tempCanvas.width = fontSize * dpr;
    tempCanvas.height = fontSize * dpr * (1 + hOffset);

    tempCanvas.style.width = fontSize;
    tempCanvas.style.height = fontSize;
    tempCtx.scale(dpr, dpr)

    tempCtx.font = fontSize + "px JinMeiMaoCaoXing";
    tempCtx.fillStyle = "rgb(0, 0, 0)";
    tempCtx.fillText(char, 0, fontSize);

    tempCtx.strokeStyle = "rgb(0, 0, 0)";
    tempCtx.lineWidth = 4;
    tempCtx.strokeText(char, 0, fontSize);

    tempCtx.fillStyle = "rgb(255, 255, 255)";
    tempCtx.fillText(char, 0, fontSize);

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

        default:
            drawNameChar(ctx, char, fontSize, x, y, 0, 0, 0, 0, 0, 0);
            break;
    }
}

export{drawName};