//TELA DO JOGO
function fase1(){
    background(255);
    image(img[8],0, -30);
//FASE 1 
 // movimentacao do bau 
if(keyIsDown(LEFT_ARROW))
     x-=5;
if(keyIsDown(RIGHT_ARROW))
     x+=5;
    image(img[5],x,440,72,68);
  
   // blocos quadrados
  for (i=0; i<6; i++){
    image(brinquedoQ[i], vQx[i], vQy[i], 28,28); 
      vQy[i] = vQy[i] + 1;
       // verificar a distância  
     if(vQy[i] > 420 && vQx[i] > x - 35 && vQx[i] < x + 35){ 
        pontos[0] = pontos[0] +1;
        vQy[i] = -random(50,200);
        vQx[i] = random(0,500);
     }
        if(pontos[0] >15){
           pontos[0]=0;
           tela = 3.2
           sons[0].pause();
           sons[3].play();
         }
          if(vQy[i] > 450 ){
             vQy[i] = -random(50,200);
             vQx[i] = random(0,500);
             }  
  }
 
     // blocos retangulares
  for (i=0; i<5; i++){
      image(brinquedoR[i], vRx[i], vRy[i], 40,20); 
      vRy[i] = vRy[i] + 1;
     //verifica distancia 
     if(vRy[i] > 420 && vRx[i] > x - 35 && vRx[i] < x + 35){ 
        pontos[1] = pontos[1] +1;
        vRy[i] = -random(50,200);
        vRx[i] = random(0,500);
    }
         if(pontos[1] >0){
            sons[4].play();
            pontos[1] = 0;
            tela=3.3;
        } 
 
            if(vRy[i] > 450 ){
               vRy[i] = -random(50,200);
               vRx[i] = random(0,500);
               } 
 }
    // instruções da fase1
    textSize(20);
    fill(255,255,0);
    text("Fase 1:",20, 30, 200);
    fill(64,224,208);
    textSize(15);
    fill(255,255,0);
    text("pegue 16 blocos quadrados!",20,50);
    fill(64,224,208);
    textSize(25);
    fill(255,255,0);
    text(pontos[0],290, 30);
    fill(64,224,208);
      // Botão Voltar AO MENU
if(mouseY>2&&mouseY<2+40&&mouseX>488&&mouseX<488+95){fill(0,139,139);}
    rect(488,2,95,40,curvatura);
    textSize(20);
    fill(255,255,0);
    text("Menu", 510,28);
    fill(64,224,208);
} 
// FASE 2 
function fase2() {
  background(0); 
  image(img[8],0, -30);
 // movimentacao do bau 
  if(keyIsDown(LEFT_ARROW))
     x-=5;
  if(keyIsDown(RIGHT_ARROW))
     x+=5;
    image(img[5],x,440,72,68);
   
   // blocos retangulares
  for (i=0; i<5; i++){
      image(brinquedoR[i], vRx[i], vRy[i], 40,20); 
      vRy[i] = vRy[i] + 1;
      // verificar a distância 
       if(vRy[i] > 420 && vRx[i] > x - 35 && vRx[i] < x + 35){ 
          pontos[1] = pontos[1] +1;
          vRy[i] = -random(50,200);
          vRx[i] = random(0,500);
     }
          if(pontos[1] >10){
             sons[3].play();
             tela=4.3;
        }
             if(vRy[i] > 450 ){
                vRy[i] = -random(50,200);
                vRx[i] = random(0,500);
               }
  }
   // blocos quadrados
  for (i=0; i<6; i++){
      image(brinquedoQ[i], vQx[i], vQy[i], 20,20); 
      vQy[i] = vQy[i] + 1;
      // verificar a distância 
     if(vQy[i]>420 && vQx[i]>x-35 && vQx[i]<x+35){
        pontos[0] = pontos[0]+1;
        vQy[i]= -random(50,200);
        vQx[i]= random(0,500);
      } 
           if(pontos[0]>0){
              tela=4.2;
              sons[4].play();
              pontos[0]=0;
            }     
               if(vQy[i] > 450 ){
                  vQy[i] = -random(50,200);
                  vQx[i] = random(0,500);
                }
  }
    // introducoes fase 2 
    textSize(20);
    fill(255,255,0);
    text("Fase 2:",20, 30, 200);
    fill(64,224,208);
    textSize(15);
    fill(255,255,0);
    text("pegue 11 blocos retangulares!",20,50);
    fill(255,255,0);
    text(pontos[1],290, 30);
    fill(64,224,208);
    // Botão voltar ao MENU
if(mouseY>2&&mouseY<2+40&&mouseX>488&&mouseX<488+95){fill(0,139,139);}
    rect(488,2,95,40,curvatura);
    textSize(20);
    fill(255,255,0);
    text("Menu", 510,28);
    fill(64,224,208);
  
}
function fase3(){
    background(0);
    image(img[8],0, -30);
   // movimentacao do bau 
  if(keyIsDown(LEFT_ARROW))
     x-=5;
  if(keyIsDown(RIGHT_ARROW))
     x+=5;
    image(img[5],x,440,72,68);
   
   // blocos circulares
  for (i=0; i<1; i++){
     image(brinquedoC[i], vCx[i], vCy[i], 28,28)
     vCy[i] = vCy[i] + 1;
  if(vCy[i] > 450 ){
      vCy[i] = -random(50,200);
      vCx[i] = random(0,500); 
      }
   }
   //instrucoes da fase3
    textSize(20);
    fill(255,255,0);
    text("Fase 3:",20, 30, 200);
    fill(64,224,208);
    textSize(15);
    fill(255,255,0);
    text("pegue 5 blocos circulares!",20,50);
    fill(64,224,208);
    textSize(25);
    fill(255,255,0);
    text(pontos[2],290, 30);
    fill(64,224,208);
    // Botão voltar ao MENU
if(mouseY>2&&mouseY<2+40&&mouseX>488&&mouseX<488+95)                {fill(0,139,139);}
    rect(488,2,95,40,curvatura);
    textSize(20);
    fill(255,255,0);
    text("Menu", 510,28);
    fill(64,224,208);
}

//TRANSIÇÕES//
function transicao1(){
    image(img[8],0, -30)
    textSize(80);
    fill(255,255,0);
    text("Fase 1",162,200);
    fill(64,224,208);
    textSize(25);
    fill(255,255,0);
    text("pegue 16 blocos quadrados!",110,250);
    fill(190,200,255);
    stroke(0,139,139);
   if(mouseY>366 && mouseY<366+40 && mouseX>146 && mouseX<146+265){
    fill(139,139);}
    strokeWeight(2);
    rect(146,366,260,40,curvatura)
    stroke(0,139,139);
    textSize(15);
    strokeWeight(3)
    fill(255,255,0)
    text("clique "+"  "+"aqui "+" "+" para "+"  começar !",175,390)
}
function transicao2(){
    background(255);
    image(img[8],0, -30)
    textSize(50)
    stroke(0,139,139);
    fill(255,255,0);
    text("Você conseguiu!",88,250);
    fill(190,200,255);
    textSize(25);
    fill(255,255,0);
    text("Fase 2 :"+"\npegue  11  blocos  retangulares !",110,280);
    fill(190,200,255);
    stroke(0,139,139);
   if(mouseY>366 && mouseY<366+40 && mouseX>146 && mouseX<146+265){
    fill(139,139);}
    strokeWeight(2);
    rect(146,366,260,40,curvatura);
    stroke(0,139,139);
    textSize(12);
    strokeWeight(3);
    fill(255,255,0);
    text("clique "+"  "+"aqui "+" "+" para "+"  começar a fase 2 !",175,390);
}
function transicao3(){
   background(255);
    image(img[8],0, -30)
    textSize(50)
    stroke(0,139,139);
    fill(255,255,0);
    text("Você conseguiu!",88,250);
    fill(190,200,255);
    textSize(25);
    fill(255,255,0);
    text("Fase 3 :"+"\npegue 6 blocos circulares!",110,295);
    fill(190,200,255);
    stroke(0,139,139);
   if(mouseY>366 && mouseY<366+40 && mouseX>146 && mouseX<146+265){
    fill(139,139);}
    strokeWeight(2);
    rect(146,366,260,40,curvatura);
    stroke(0,139,139);
    textSize(12);
    strokeWeight(3);
    fill(255,255,0);
    text("clique"+"  "+"aqui "+" "+" para "+"  começar  a  fase  3  !",175,390);
}
function transicaofail(){
   image(img[8],0, -30);
   textSize(30)
   fill(255,0,0);
   text("cuidado "+"  "+"isso "+" "+"é "+"um  retangulo !",78,270);
  if(keyIsDown(LEFT_ARROW))
    tela=3;
  if(keyIsDown(RIGHT_ARROW))
    tela=3;
}
function transicaofail2(){
   image(img[8],0, -30);
   textSize(30)
   fill(255,0,0);
   text("cuidado "+"  "+"isso "+" "+"é "+"um  quadrado !",78,270);
  if(keyIsDown(LEFT_ARROW))
    tela=4;
  if(keyIsDown(RIGHT_ARROW))
    tela=4;
}
function transicaofail3(){
  image(img[8],0, -30);
   textSize(30)
   fill(255,0,0);
   text("cuidado "+"  "+"isso "+" "+"é "+"um  círculo !",78,270);
  if(keyIsDown(LEFT_ARROW))
    tela=5;
  if(keyIsDown(RIGHT_ARROW))
    tela=5; 
}