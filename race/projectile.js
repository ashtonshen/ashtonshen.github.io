class Projectile {
    constructor(img, y, scrollSpeed, type) {
        img.resize(20, 20)
        this.img = img
        this.type = type
        this.scroll = scrollSpeed
        this.width = img.width
        this.height = img.height

        if (this.type == "1") {
            this.x = 0
        }

        else if (this.type == "2") {
            this.x = 800
            this.scroll
        }

        this.y = y
    }

    display() {
        image(this.img, this.x, this.y, this.width, this.height)
    }

    replace() {
        if (this.x >= 395 && this.type == "1") {
            this.x = 0
            this.y = random(75, 475)
            this.scroll = random(1, 3)
        }

        else if (this.x <= 405 && this.type == "2") {
            this.x = 800
        }
    }

    update() {
        this.x += this.scroll
    }
}

