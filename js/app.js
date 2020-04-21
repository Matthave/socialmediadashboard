class DashBoard {
    constructor() {
        this.switchBtn = document.querySelector('.background__darkMode');
        this.switchCircle = document.querySelector('.background__darkMode-switch');

        this.dashboardWrap = document.querySelector('.dashboardWrap');
        this.topBox = document.querySelector('.background');
        this.topBoxText = document.querySelector('.background__title');

        this.topBoxBtn = document.querySelector('.background__darkMode');
        this.topBoxCircleIn = document.querySelector('.background__darkMode-switch');
        this.smBox = document.querySelectorAll('.smBox');
        this.smBoxResult = document.querySelectorAll('.smBox__result');
        this.smBoxSpan = document.querySelectorAll('.smBox__span');

        this.overviewBox = document.querySelectorAll('.overview__box');
        this.overviewBoxTitle = document.querySelectorAll('.overview__result');

    }

    switch = () => {
        console.log(this.topBoxBtn)
        this.switchCircle.classList.toggle('background__darkMode-switch--switched')

        this.dashboardWrap.classList.toggle('dashboardWrap--darkMode')
        this.topBox.classList.toggle('background--darkMode')
        this.topBoxText.classList.toggle('background__title--darkMode')
        this.topBoxBtn.classList.toggle('background__darkMode--darkMode')
        this.topBoxCircleIn.classList.toggle('background__darkMode-switch--darkMode')

        this.smBox.forEach((el) => {
            el.classList.toggle('smBox--darkMode')
        })
        this.smBoxResult.forEach((el) => {
            el.classList.toggle('smBox__result--darkMode')
        })
        this.smBoxSpan.forEach((el) => {
            el.classList.toggle('smBox__span--darkMode')
        })

        this.overviewBox.forEach((el) => {
            el.classList.toggle('overview__box--darkMode')
        })

        this.overviewBoxTitle.forEach((el) => {
            el.classList.toggle('overview__result--darkMode')
        })
    }

    init() {
        this.switchBtn.addEventListener('click', this.switch);
    }
}

const dashBoard = new DashBoard();
dashBoard.init()