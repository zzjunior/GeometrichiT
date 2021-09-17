function menu() {
    background(255,105,180);
    image(img[0], 0, 0);
    textSize(25);
    textFont(font[0], 30);
    // Nome do jogo
    fill(64,224,208);
    stroke(0,139,139);
    strokeWeight(3);
    textSize(75);
    fill(255,255,0);
    text("GEOMETRIC hiT",30, 140);
    fill(64,224,208);  
  
    // Botao creditos
if(mouseY>yb&&mouseY<yb+alturab&&mouseX>xb&&mouseX < xb + largurab){fill(0,139,139);}  
    rect(xb,yb,largurab,alturab,curvatura);
    textSize(30);
    fill(255,0,0);
    text("Créditos", 232,318);
    fill(64,224,208);
    // Botao jogar 
if(mouseY>yb1&&mouseY<yb1+alturab1&&mouseX>xb1&&mouseX<xb1+largurab1){fill(0,139,139);}
    rect(xb1,yb1,largurab1,alturab1,curvatura);
    textSize(30);
    fill(255,255,0);
    text("Jogar", 255,237);
    fill(64,224,208);
    // Botao como jogar
if(mouseY>yb2&&mouseY<yb2+alturab2&&mouseX>xb2&&mouseX<xb2+largurab2){fill(0,139,139);}
    rect(xb2,yb2,largurab2,alturab2,curvatura);
    textSize(27);
    fill(255,0,255);
    text("Como jogar?", 215,397);
    fill(64,224,208);  
}