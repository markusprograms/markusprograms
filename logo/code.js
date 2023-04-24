/* You'll have to import Processing.js library before you evaluate this code. */

function stillLogo(x, y, width, height) {
    /* This function draws the logo (not animated). */
    
    var logoImage = logoImage || false; // This is the image of the logo. 
    
    if (!logoImage) {
        // Drawing the logo in case it wasn't created yet. 
        logoImage = createGraphics(400, 400, JAVA2D); // Creating the canvas. 
        logoImage.background(0, 0, 0, 0); // Making background transparent
        
        logoImage.noStroke();
        for (var i = 0; i < 860; i ++) {
            if (i < 858) {
                // The light. Not drawing at last 2 laps, because it looks much better. 
                logoImage.fill(60, 180, 60);
                logoImage.ellipse(cos(i / 2) * 150 + 199, sin(i) * 75 + 199, 50, 50);
            }
            
            // Drawing the shadows (parts of the logo without lights). 
            logoImage.fill(30, 90, 30);
            logoImage.ellipse(cos(i / 2) * 150 + 200, sin(i) * 75 + 200, 50, 50);
        }
    }
    
    image(logoImage, x, y, width, height); // Drawing the image. 
}

function animatedLogo(x, y, width, height) {
    /* This function draws animated logo. */
    
    var animatedLogoImageLeft = animatedLogoImageLeft || false; 
    var animatedLogoImageRight = animatedLogoImageRight || false; 
    
    if (!animatedLogoImageRight || !animatedLogoImageLeft) {
        // Creating the canvases in case they weren't created yet. 
        animatedLogoImageLeft = createGraphics(200, 400, JAVA2D);
        animatedLogoImageRight = createGraphics(300, 400, JAVA2D);
    }

    animatedLogoImageLeft.background(0, 0, 0, 0);
    animatedLogoImageRight.background(0, 0, 0, 0);
    
    animatedLogoImageLeft.noStroke();
    animatedLogoImageRight.noStroke();
    
    // Drawing the left side of the image. 
    for (var i = 0; i < 720; i ++) {
        // The light. 
        animatedLogoImageLeft.fill(60, 180, 60);
        animatedLogoImageLeft.ellipse(cos(i / 2) * 150 + 200 + cos(frameCount * 10), sin(i) * 75 + 200 + sin(frameCount * 10), 50, 50);
        
        // Drawing the shadows. 
        animatedLogoImageLeft.fill(30, 90, 30);
        animatedLogoImageLeft.ellipse(cos(i / 2) * 150 + 200, sin(i) * 75 + 200, 50, 50);
    }
    
    // Drawing the right side of the image. 
    for (var i = -360; i < 360; i ++) {
        // The light. 
        animatedLogoImageRight.fill(60, 180, 60);
        animatedLogoImageRight.ellipse(-100 + cos(i / 2) * 150 + 200 + cos(frameCount * 10), sin(i) * 75 + 200 + sin(frameCount * 10), 50, 50);
        
        // Drawing the shadows. 
        animatedLogoImageRight.fill(30, 90, 30);
        animatedLogoImageRight.ellipse(-100 + cos(i / 2) * 150 + 200, sin(i) * 75 + 200, 50, 50);
    }
    
    image(animatedLogoImageLeft, x, y, width / 2, height); // Drawing the left side. 
    image(animatedLogoImageRight, x + width / 4, y, width / 4 * 3, height); // Drawing the right side. 
}

/* Example of using the functions: */
draw = function() {
    background(0); // Black background. 
    stillLogo(0, 0, width / 2, height / 2); // Drawing the still logo at the left top. 
    animatedLogo(width / 2, 0, width / 2, height / 2); // Drawing the animated logo at the right top. 
    
    // You can translate, rotate and scale the logos! 
    pushMatrix();
        translate(width / 4, height / 4 * 3);
        rotate(frameCount);
        animatedLogo(-width / 4, -height / 4, width / 2, height / 2); 
    popMatrix();
    
    pushMatrix();
        translate(width / 4 * 3, height / 4 * 3); 
        scale(sin(frameCount)); 
        stillLogo(-width / 4, -height / 4, width / 2, height / 2); 
    popMatrix();
};
