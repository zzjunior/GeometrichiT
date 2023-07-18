function créditos(){
    background(64,224,208);
    image(img[0], 0, 0);
    image(img[7], 20, 250, 150, 150);
    image(img[6], 215, 10, 150, 50);
    textSize(25);
    //Creditos do jogo
    textSize(18);
    fill(255,255,0);
    text("Geometric hiT é um jogo produzido com base nos dados e descrição de um educador do ColabEduc, que é destinado para crianças do 2°e 3° do fundamental. Mais informações sobre o jogo, e sobre Educador no site: http://www.colabeduc.org/descricao/show/32", 120,100, 400);
    textSize(22);
    fill(255,255,0);
    text("Programador :",25, 240);
    textSize(22);
    text("José Ilson dos Santos Júnior", 180,280);
    stroke(0,139,139);
    strokeWeight(3);
    textSize(18);
    fill(255,255,0);
    text("Estudante de Bacharelado em Ciência e Tecnologia na Universidade Federal do Rio Grande do Norte. Natal/RN.", 210, 320, 300);
    // Botão Voltar 
    fill(64,224,208);
if(mouseY>445&&mouseY<445+40 && mouseX>462 && mouseX<462+110)      {fill(0,139,139);}
    rect(462,445,110,40,curvatura);
    textSize(20);
    fill(255,255,0);
    text("voltar", 485,470);
    
}