var xb;
var yb;
var largurab;
var alturab;
var curvatura;
var xb1;
var yb1;
var largurab1;
var alturab1;
var xb2;
var yb2;
var largurab2;
var alturab2;
var tela = 0;
var img = [];
var font = [];
var brinquedoQ = [];
var brinquedoR = [];
var brinquedoC = [];
var sons = [];
var vQx = [];
var vQy = [];
var vRx = [];
var vRy = [];
var vCx = [];
var vCy = [];
var pontos = [];

function preload() {
  // imagens
  img[0] = loadImage('fundo0.png');
  img[1] = loadImage('./image/exsetas.png');
  img[2] = loadImage('./image/imgex.png');
  img[3] = loadImage('./image/rosquinhaex.png');
  img[4] = loadImage('./image/carta.png');
  img[5] = loadImage("./Jogo/bau.png");
  img[6] = loadImage('./image/download-_3_.png');
  img[7] = loadImage("./image/IMG2020.png");
  img[8] = loadImage("./Jogo/quarto/fundoquarto.png");
  img[9] = loadImage('./image/boladefutebol.png');
  // sons
  sons[0] = createAudio('./sons/musicafundo.mp3');
  sons[1] = createAudio('./sons/click.wav');
  sons[2] = createAudio('./sons/pell.ogg');
  sons[3] = createAudio('./sons/vcconseguiu.mp3');
  sons[4] = createAudio('./sons/Fail.mp3');
 //pecas// quadradas
  brinquedoQ[0] = loadImage("./Jogo/brinquedos/quadrado1.png");
  brinquedoQ[1] = loadImage("./Jogo/brinquedos/quadrado2.png");
  brinquedoQ[2] = loadImage('./Jogo/brinquedos/quadrado3.png');
  brinquedoQ[3] = loadImage('./Jogo/brinquedos/quadrado4.png');
  brinquedoQ[4] = loadImage('./Jogo/brinquedos/quadrado5.png');
  brinquedoQ[5] = loadImage('./Jogo/brinquedos/quadrado6.png');
        // retangulares
  brinquedoR[0] = loadImage('./Jogo/brinquedos/retangulo1.png');
  brinquedoR[1] = loadImage('./Jogo/brinquedos/retangulo2.png');
  brinquedoR[2] = loadImage('./Jogo/brinquedos/retangulo3.png');
  brinquedoR[3] = loadImage('./Jogo/brinquedos/retangulo4.png');
  brinquedoR[4] = loadImage('./Jogo/brinquedos/retangulo5.png');
        // circulares
  brinquedoC[0] = loadImage('./Jogo/brinquedos/circulo1.png')
  // fontes
  font[0] = loadFont('./font/font2/Kanit-Black.ttf');
}

function setup() {
  createCanvas(600, 500);
  
    for ( i=0; i<6; i++){
    vQx[i] = random(0,600);
    vQy[i] = -random(50,500);
  }
    for ( i=0; i<5; i++){
    vRx[i] = random(0,600);
    vRy[i] = -random(50,500);
  }
    for ( i=0; i<1; i++){
    vCx[i] = random(0,600);
    vCy[i] = -random(50,500);
  }
 
  xb = 195;
  yb = 280;
  largurab = 200;
  alturab = 60;
  curvatura = 22;
  
  xb1=195;
  yb1=200;
  largurab1=200;
  alturab1=60;
  
  xb2=195;
  yb2=360;
  largurab2=200;
  alturab2=60;
  x=295;
  
  pontos[0] = 0;
  pontos[1] = 0;
  pontos[2] = 0;
  pontos[3] = 0;
}

function draw() { 
// TELA DO MENU 
    if( tela == 0 );{
      menu();
  }
// TELA DE "CRÉDITOS" //
    if( tela == 1 ){
      créditos();
  }    
// TELA "COMO JOGAR" //
    if( tela == 2 ){
   instruções();
  }  
// TELA DO JOGO
 // tela fase 1 
   if(tela == 3.1){
     transicao1();
  }//FASE1
    if( tela == 3 ){
    fase1();
    }//ERROU!
       if(tela==3.3){
          transicaofail();
        }//CONSEGUIU! 
          if(tela == 3.2){
             transicao2();
             }
  //tela fase 2
    //FASE2
    if(tela == 4){
       fase2();
       sons[0].loop()
        }//ERROU
           if(tela==4.2){
              transicaofail2();
             }//CONSEGUIU 
                if(tela==4.3){
                   transicao3();
                   sons[0].pause();
                    }
  //tela fase 3
  //FASE3
    if(tela==5){
       fase3();
       sons[0].loop();
        }
  
}  
function mouseClicked() {
  // clicks no MENU
  if(tela==0){ 
      // Click no botao creditos 
  if(mouseY>yb && mouseY<yb+alturab && mouseX>xb && mouseX<xb+largurab){
    tela=1;
    sons[2].play();    
  }
      // Click no botao jogar
  if(mouseY>yb1 && mouseY<yb1+alturab1 && mouseX>xb1 && mouseX<xb1+largurab1){
    tela=3.1;
    sons[2].play();
  }
    // Click no botao como jogar
  if(mouseY>yb2 && mouseY<yb2+alturab2 && mouseX>xb2 && mouseX<xb2+largurab2){
    tela=2;
    sons[2].play();
   }
 }
  // clicks TELA "CRÉDITOS" 
  if(tela==1){
       // Click em voltar
  if(mouseY>445 && mouseY<445+40 && mouseX>462 && mouseX<462+110){
    tela=0;
    sons[2].play()
     }
  }
  
  // clicks TELA "COMO JOGAR"
  if(tela==2){
    // Click em voltar
  if(mouseY>445 && mouseY<445+40 && mouseX>462 && mouseX<462+110){
    tela=0;
    sons[2].play()
     }
  }
  
  //clicks "TELAS DO JOGO"
            // transicao
   if( tela == 3.1){
     // click iniciar fase1
     if(mouseY>366 && mouseY<366+40 && mouseX>146 && mouseX<146+265){
       tela=3;
       sons[2].play();
       sons[0].loop();
       
     }
  }
   //FASE1
  if(tela==3){
  // Click voltar
  if(mouseY>2 && mouseY<2+40 && mouseX>488 && mouseX<488+95){
    tela=0;
    sons[2].play();
    sons[0].pause()
      } 
  }
  if(tela==3.2){
    // click iniciar fase2
     if(mouseY>366&&mouseY<366+40&& mouseX>146&&mouseX<146+265){
        tela=4;
        sons[2].play();
        }
     }
  //FASE2
  if(tela== 4){
   // Click voltar ao menu
    if(mouseY>2 && mouseY<2+40 && mouseX>488 && mouseX<488+95){
    tela=0;
    sons[2].play(); 
    sons[0].pause() 
       }
    }
  if(tela==4.3){
     // click iniciar fase3
     if(mouseY>366&&mouseY<366+40&& mouseX>146&&mouseX<146+265){
        tela=5;
        sons[2].play();
        }
  }
  //FASE3
  if(tela==5){
    // Click voltar ao menu
    if(mouseY>2 && mouseY<2+40 && mouseX>488 && mouseX<488+95){
     tela=0;
     sons[2].play();
     sons[0].pause();
}  }
}