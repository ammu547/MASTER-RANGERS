
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
}

window.addEventListener("keydown", my_keydown);

 if (keyPressed=='38')
    {
        up();
        console.log("up");
    }

    if (keyPressed=='40')
    {
        down();
        console.log("down");
    }

    if (keyPressed=='37')
    {
        left();
        console.log("left");
    }

    if (keyPressed=='39')
    {
        right();
        console.log("right");
    }

    if (keyPressed=='87')
    {
        new_image('wall.jpg');
        console.log("w");
    }

    if (keyPressed=='71')
    {
        new_image('ground.png');
        console.log("g");
    }

    if (keyPressed=='76')
    {
        new_image('light_green.png');
        console.log("l");
    }

    if (keyPressed=='84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }

    if (keyPressed=='82')
    {
        new_image('roof.jpg');
        console.log("r");
    }

    if (keyPressed=='89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    }

    if (keyPressed=='68')
    {
        new_image('dark_green.png');
        console.log("d");
    }

    if (keyPressed=='85')
    {
        new_image('different.jpg');
        console.log("u");
    }

    if (keyPressed=='67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }

}


