class Floatbox {

    static get classname() {
        return 'floatbox';
    }

    constructor(targetClass) {
        this.element = document.querySelector(
            `.${Floatbox.classname}.${targetClass}`
        );
    }

    toggle() {
        this.element.classList.toggle(`${Floatbox.classname}--hidden`);
    }
}

export default Floatbox