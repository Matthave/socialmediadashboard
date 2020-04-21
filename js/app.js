class DashBoard {
    constructor() {
        this.switchBtn = document.querySelector('.background__darkMode');
        this.switchCircle = document.querySelector('.background__darkMode-switch')
    }

    switch = () => {
        this.switchCircle.classList.toggle('background__darkMode-switch--switched')
    }

    init() {
        this.switchBtn.addEventListener('click', this.switch);
    }
}

const dashBoard = new DashBoard();
dashBoard.init()