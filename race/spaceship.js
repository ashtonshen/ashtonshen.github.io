class Spaceship {
    constructor(img, x, y, type) {
        img.resize(60, 60)
        this.img = img
        this.width = img.width
        this.height = img.height
        this.type = type

        this.x = x
        this.y = y

        this.dy = 0
    }

    collides(projectile) {
        // if (this.x > projectile.x + projectile.width / 2 || projectile.x > this.x + this.width) {
        //     return false
        // }

        // if (this.y > projectile.y - projectile.gap && projectile.y > this.y + this.height) {
        //     return false
        // }

        // return true

        // if (this.x + this.width >= projectile.x && this.x <= projectile.x + projectile.width && this.y + this.height >= projectile.y && this.y <= projectile.y + projectile.height) {
        //     return true
        // }

        // return false

        if (this.x + this.width / 2 >= projectile.x - projectile.width / 2 && this.x - this.width / 2 <= projectile.x + projectile.width / 2 && ((this.y - this.height / 2 <= projectile.y + projectile.height / 2 && this.y + this.height / 2 >= projectile.y - projectile.height / 2) || (this.y + this.height / 2 >= projectile.y - projectile.height / 2 && this.y - this.height / 2 <= projectile.y + projectile.height / 2))) {
            return true
        }

        return false
    }

    display() {
        imageMode(CENTER)
        image(this.img, this.x, this.y)
    }

    update() {
        if (this.type == "1") {
            this.x = constrain(this.x, 0, 390)
        }

        else if (this.type == "2") {
            this.x = constrain(this.x, 410, 800)
        }
        this.y = constrain(this.y, 30, 570)
    }

    reset(y) {
        this.x = x
        this.y = y
    }
}
