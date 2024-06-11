let count = 3
let gameState = "title"
let score1 = 0
let score2 = 0
let projectile_count = 0
let projectiles1 = []
let projectiles2 = []


let spaceship1, spaceship2, projectile, winner

function preload() {
    spaceship1Image = loadImage("graphics/spaceship1.png")
    spaceship2Image = loadImage("graphics/spaceship2.png")
    projectileImage = loadImage("graphics/projectile.png")
}

function setup() {
    createCanvas(800, 600)
    background(0)

    spaceship1 = new Spaceship(spaceship1Image, 191.25, 540)
    spaceship2 = new Spaceship(spaceship2Image, 608.75, 540)
}

function draw() {
    background(0)
    if (gameState == "title") {
        title()
    }

    else if (gameState == "countdown") {
        countdown()
    }

    else if (gameState == "play") {
        if (score1 == 3) {
            done("PLAYER 1")
            gameState = "done"
        }

        else if (score2 == 3) {
            done("PLAYER 2")
            gameState = "done"
        }

        else play()
    }

    else if (gameState == "done") {
        done(winner)
    }

    keyPressed()
}

function countdown() {
    fill(255)
    textSize(150)
    text(count, 400, 335)

    if (frameCount % 61 == 0) {
        count--
    }

    if (count == 0) {
        balls = []
        count = 3
        gameState = "play"
    }
}

function createProjectiles() {
    if (projectiles1.length < 10) {
        for (let i = 0; i < 10; i++) {
            projectile = new Projectile(projectileImage, random(75, 475), random(1, 3), 1)
            projectiles1.push(projectile)
        }
    }

    if (projectiles2.length < 10) {
        for (let i = 0; i < 10; i++) {
            projectile = new Projectile(projectileImage, projectiles1[i].y, -projectiles1[i].scroll, 2)
            projectiles2.push(projectile)
        }
    }

    for (let i = 0; i < 10; i++) {
        projectiles1[i].display()
        projectiles1[i].update()
        projectiles1[i].replace()
        projectiles2[i].y = projectiles1[i].y
        projectiles2[i].scroll = -projectiles1[i].scroll
        projectiles2[i].replace()
        projectiles2[i].display()
        projectiles2[i].update()
    }
}

function done(player) {
    winner = player
    fill(255)
    textSize(50)
    textAlign(CENTER)
    text("CONGRATULATIONS", 400, 210)
    text(winner, 400, 260)
    textSize(25)
    text("PRESS ENTER TO PLAY AGAIN", 400, 395)

    score1 = 0
    score2 = 0
    projectiles1 = []
    projectiles2 = []
    projectile_count = 0
    count = 3
    spaceship1.y = 540
}

function keyPressed() {
    if (keyIsPressed === true) {
        if (keyCode == ENTER || keyCode == RETURN) {
            if (gameState == "title" || gameState == "done") {
                gameState = "countdown"
            }
        }

        if (gameState == "play") {
            if (keyIsDown(UP_ARROW) === true) {
                spaceship2.y -= 2
            }

            else if (keyIsDown(DOWN_ARROW) === true) {
                spaceship2.y += 2
            }

            if (keyIsDown(87) === true) {
                spaceship1.y -= 2
            }

            else if (keyIsDown(83) === true) {
                spaceship1.y += 2
            }
        }
    }
}

function play() {
    spaceship1.display()
    spaceship1.update()
    spaceship2.display()
    spaceship2.update()

    fill(52, 110, 235)
    rect(spaceship1.x - spaceship1.width / 2, spaceship1.y - spaceship1.height / 2, 2, 60)
    rect(spaceship1.x + spaceship1.width / 2, spaceship1.y - spaceship1.height / 2, 2, 60)
    fill(235, 52, 52)
    rect(spaceship2.x - spaceship2.width / 2, spaceship2.y - spaceship2.height / 2, 2, 60)
    rect(spaceship2.x + spaceship2.width / 2, spaceship2.y - spaceship2.height / 2, 2, 60)

    fill(52, 110, 235)
    textSize(55)
    text(score1, 330, 55)
    fill(235, 52, 52)
    text(score2, 470, 55)

    score()
    createProjectiles()

    for (let i = 0; i < 10; i++) {
        if (spaceship1.collides(projectiles1[i])) {
            spaceship1.y = 540
        }

        if (spaceship2.collides(projectiles2[i])) {
            spaceship2.y = 540
        }
    }

    fill(255)
    rect(382.5, 0, 35, 601)
}

function score() {
    if (spaceship1.y <= 30) {
        spaceship1.y = 540
        score1++
    }
    else if (spaceship2.y <= 30) {
        spaceship2.y = 540
        score2++
    }
}

function title() {
    fill(255)
    textSize(75)
    textAlign(CENTER)
    text("SPACE RACE", 400, 170)
    textSize(50)
    text("PRESS ENTER TO PLAY", 400, 270)
    textSize(25)
    text("BY ASHTON SHEN", 400, 420)
    textSize(15)
    text("LAST UPDATED: JUNE 8, 2024", 400, 470)
}
