var ColorDisplayModule;
(function (ColorDisplayModule) {
    var Helper = (function () {
        function Helper() {
        }
        Helper.UpdateNumber = function (e) {
            var element = e.srcElement;
            if (element.type !== "checkbox") {
                return Helper.Clamp(parseInt(element.value), 0, 255);
            }
            return null;
        };
        Helper.Clamp = function (num, min, max) {
            return num <= min ? min : num >= max ? max : num;
        };
        return Helper;
    }());
    var Color = (function () {
        function Color() {
            this.R = 0;
            this.G = 0;
            this.B = 0;
        }
        Color.componentToHex = function (c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        };
        Color.rgbToHex = function (r, g, b) {
            return "#" +
                Color.componentToHex(r).toUpperCase() +
                Color.componentToHex(g).toUpperCase() +
                Color.componentToHex(b).toUpperCase();
        };
        Color.prototype.toString = function () {
            return Color.rgbToHex(this.R, this.G, this.B);
        };
        return Color;
    }());
    var ColorDisplay = (function () {
        function ColorDisplay() {
            var _this = this;
            this.UpdateR = function (e) {
                var result = Helper.UpdateNumber(e);
                if (result != null) {
                    _this.MyColor.R = result;
                }
            };
            this.UpdateG = function (e) {
                var result = Helper.UpdateNumber(e);
                if (result != null) {
                    _this.MyColor.G = result;
                }
            };
            this.UpdateB = function (e) {
                var result = Helper.UpdateNumber(e);
                if (result != null) {
                    _this.MyColor.B = result;
                }
            };
            this.MyColor = new Color();
        }
        return ColorDisplay;
    }());
    ColorDisplayModule.ColorDisplay = ColorDisplay;
})(ColorDisplayModule || (ColorDisplayModule = {}));
function colorDisplay(opts) {
    this.Inner = new ColorDisplayModule.ColorDisplay();
}
