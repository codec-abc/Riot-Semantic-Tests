function counter(opts) {
    var _this = this;
    this.init = function () {
        _this.currentValue = opts.initialValue;
    };
    this.clickPlus = function (e) {
        _this.currentValue++;
    };
    this.clickMinus = function (e) {
        _this.currentValue--;
    };
    this.init();
}
