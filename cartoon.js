 
        window.onload = function () {  
            var landscape_canvas = document.getElementById("landscape");  
            var ctx = landscape_canvas.getContext("2d");  
            ctx.fillStyle = "Blue";  
            ctx.fillRect(0, 0, 800, 850);  

            // Circle  
            ctx.fillStyle = "red";  
            ctx.beginPath();  
            ctx.arc(750, 50, 25, 0, Math.PI * 2, true);  
            ctx.closePath();  
            ctx.fill();  


            ctx.beginPath();
            ctx.fillStyle = "#C40043";
    

            ctx.fillStyle = "yellow";
            drawStar(ctx, 600, 100, 9, 90, 50);
            ctx.fill();

            function drawStar(context, xCenter, yCenter, nPoints, outerRadius, innerRadius) {
            ctx.beginPath();
            for (var ixVertex = 0; ixVertex <= 2 * nPoints; ++ixVertex) {
                  var angle = ixVertex * Math.PI / nPoints - Math.PI / 2;
                  var radius = ixVertex % 2 == 0 ? outerRadius : innerRadius;
                  context.lineTo(xCenter + radius * Math.cos(angle), yCenter + radius * Math.sin(angle));
            }
      }


            
            //Rectangle  
            ctx.fillStyle = "green";  
            ctx.beginPath();  
            ctx.moveTo(0, 250);  
            ctx.lineTo(500, 250);  
            ctx.lineTo(500, 300);  
            ctx.lineTo(0, 300);  
            ctx.lineTo(0, 300);  
            ctx.fill();  
            ctx.closePath();  
            ctx.fillStyle = "lightblue";  
            ctx.beginPath();  
            ctx.moveTo(0, 350);  
            ctx.lineTo(500, 350);  
            ctx.lineTo(500, 300);  
            ctx.lineTo(0, 300);  
            ctx.lineTo(0, 300);  
            ctx.fill();  
            ctx.closePath(); 

            //Cone  
            ctx.fillStyle = "#67ff30";  
            ctx.beginPath();  
            ctx.moveTo(150, 250);  
            ctx.lineTo(300, 20);  
            ctx.lineTo(450, 250);  
            ctx.lineTo(150, 250);  
            ctx.fill();  
            ctx.closePath();  
            ctx.fillStyle = "Brown";  
            ctx.beginPath();  
            ctx.moveTo(400, 250);  
            ctx.lineTo(450, 80);  
            ctx.lineTo(600, 250);  
            ctx.lineTo(400, 250);  
            ctx.fill();  
            ctx.closePath();  
            ctx.beginPath();  

            //Text on the canvas
            ctx.font="20px Veranda";
            ctx.fillText("Mountains",250,150);
            ctx.font="20px Veranda";
            ctx.fillText("star",600,75);
            ctx.fillText("sun",738,60);
            ctx.fillText("water",180,330);
            ctx.fillText("grass",150,290);
            
            

            ctx.fillStyle = "#FF0000";
            ctx.fillRect(12.5,30,175,130);

            // Draw triangle
            ctx.fillStyle="#A2322E";
            ctx.beginPath();
            ctx.moveTo(12.5,30);
            ctx.lineTo(185,30);
            ctx.lineTo(99,0);
            ctx.closePath();
            ctx.fill();

            //windows
            ctx.fillStyle="#663300";
            ctx.fillRect(25,40,35,50);
            ctx.fillStyle="#0000FF";
            ctx.fillRect(27,42,13,23);
            ctx.fillRect(43,42,13,23);
            ctx.fillRect(43,67,13,21);
            ctx.fillRect(27,67,13,21);

            //door
            ctx.fillStyle = "#754719";
            ctx.fillRect(80,80,30,70);

            //door knob
            ctx.beginPath();
            ctx.fillStyle = "#F2F2F2";
            ctx.arc(105,120,3,0,2*Math.PI);
            ctx.fill();
            ctx.closePath();

            //Text on the canvas
            ctx.font="20px Veranda";
            ctx.fillText("House",120,60);
            ctx.font="10px Veranda";
            ctx.fillText("door",80,100);
            ctx.fillText("window",25,85);
                                
            }   
     