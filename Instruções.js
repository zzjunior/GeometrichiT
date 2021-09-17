function instruções(){
    background(64,224,208);
    image(img[0], 0, 0);
    textSize(25);
    // instrucoes de como jogar
    textSize(35);
    fill(255,255,0);
    text("COMO JOGAR", 170, 60);
    fill(64,224,208);
    textSize(20);
    fill(255,255,0);
    text("AJUDE  O  JOSÉ  A  PEGAR  AS  PEÇAS  DE  BRINQUEDO  COM  FORMAS  GEOMÉTRICAS:"+"\n"+"\n"+ "1. Mova  o  baú  para  os  lados,  para  pegar  as peças de brinquedo que caem."+"\n"+"2. Cada fase vai  mostrar  peças  de  brinquedo  com  o  formato  diferente para pegar."+"\n"+"3. Na  fase  bônus  você deve classificar objetos e comidas com os formatos de cada um.",90, 100, 400);  
    fill(64,224,208);
    image(img[1], 480, 110, 110, 160);
    image(img[2],480,250,100,72);
    image(img[4],245,370,50,67);
    image(img[9],300,370,75,75);
    image(img[3],255,370,100,100);
    // Botao Voltar
if(mouseY>445 && mouseY<445+40 && mouseX>462 && mouseX<462+110)    {fill(0,139,139);}
    rect(462,445,110,40,curvatura);
    textSize(20);
    fill(255,255,0);
    text("voltar", 485,470);   
    fill(64,224,208);      
}