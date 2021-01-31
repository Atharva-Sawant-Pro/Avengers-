var canvas=new fabric.Canvas('my_canvas');
playerX=10;
playerY=10;
block_W=30;
block_H=30;
var player_O="";
var block_O="";
function update_P(){
    fabric.Image.fromURL("player.png",function(Img){
        player_O=Img;
        player_O.scaleToWidth(150);
        player_O.scaleToHeight(140);
        player_O.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_O);
    });
    }
    function update_B(get_img){
        fabric.Image.fromURL(get_img,function(Img){
            block_O=Img;
            block_O.scaleToWidth(block_W);
            block_O.scaleToHeight(block_H);
            block_O.set({
                top:playerY,
                left:playerX
            });
            canvas.add(block_O);
        });
        }
        window.addEventListener("keydown",key_down);
        function key_down(e){
            key_press=e.keyCode;
            if (e.shiftKey==true&&key_press=='80'){
                block_W=block_W+10;
                block_H=block_H+10;
                document.getElementById("Current_width").innerHTML=block_W
                document.getElementById("Current_height").innerHTML=block_H
            }
            if (e.shiftKey==true&&key_press=='77'){
                block_W=block_W-10;
                block_H=block_H-10;
                document.getElementById("Current_width").innerHTML=block_W
                document.getElementById("Current_height").innerHTML=block_H
            }
            if(key_press=='70'){
                update_B('ironman_face.png');
            }
            if(key_press=='66'){
                update_B('hulkd_body.png');
            }
            if(key_press=='76'){
                update_B('spiderman_legs.png');
            }
            if(key_press=='82'){
                update_B('thor_right_hand.png');
            }
            if(key_press=='72'){
                update_B('captain_america_left_hand.png');
            }
            if(key_press=='38'){
                up();
            }
            if(key_press=='40'){
                down();
            }
            if(key_press=='37'){
                left();
            }
            if(key_press=='39'){
                right();
            }
        }
        function up(){
            if (playerY>=0){
                playerY=playerY-block_H;
                canvas.remove(player_O);
                update_P();
            }
        }
        function down(){
            if (playerY<=575){
                playerY=playerY+block_H;
                canvas.remove(player_O);
                update_P();
            }
        }
        function left(){
            if (playerX>=0){
                playerX=playerX-block_W;
                canvas.remove(player_O);
                update_P();
       }
        }
        function right(){
            if (playerX<=975){
                playerX=playerX+block_W;
                canvas.remove(player_O);
                update_P();
       }
        }
