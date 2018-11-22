(function () {
    'use strict';

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

    const shareLink = document.getElementById('share_link');
    const shareBox = new Floatbox('share');

    window.box = shareBox;

    shareLink.addEventListener('click', () =>
        shareBox.toggle());

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvZmxvYXRib3guanMiLCIuLi8uLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGbG9hdGJveCB7XG5cbiAgICBzdGF0aWMgZ2V0IGNsYXNzbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdmbG9hdGJveCc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0Q2xhc3MpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGAuJHtGbG9hdGJveC5jbGFzc25hbWV9LiR7dGFyZ2V0Q2xhc3N9YFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoYCR7RmxvYXRib3guY2xhc3NuYW1lfS0taGlkZGVuYCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbG9hdGJveCIsImltcG9ydCBGbG9hdGJveCBmcm9tICcuL2Zsb2F0Ym94LmpzJztcblxuY29uc3Qgc2hhcmVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoYXJlX2xpbmsnKTtcbmNvbnN0IHNoYXJlQm94ID0gbmV3IEZsb2F0Ym94KCdzaGFyZScpO1xuXG53aW5kb3cuYm94ID0gc2hhcmVCb3g7XG5cbnNoYXJlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgc2hhcmVCb3gudG9nZ2xlKCkpOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQSxNQUFNLFFBQVEsQ0FBQzs7SUFFZixJQUFJLFdBQVcsU0FBUyxHQUFHO0lBQzNCLFFBQVEsT0FBTyxVQUFVLENBQUM7SUFDMUIsS0FBSzs7SUFFTCxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUU7SUFDN0IsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhO0lBQzdDLFlBQVksQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbkQsU0FBUyxDQUFDO0lBQ1YsS0FBSzs7SUFFTCxJQUFJLE1BQU0sR0FBRztJQUNiLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkUsS0FBSztJQUNMLENBQUM7O0lDYkQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RCxNQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7SUFFdkMsTUFBTSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7O0lBRXRCLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDcEMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Ozs7In0=
