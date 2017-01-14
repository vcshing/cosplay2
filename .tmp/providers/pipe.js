import { Pipe } from '@angular/core';
export var EscapeHtmlPipe = (function () {
    function EscapeHtmlPipe() {
    }
    EscapeHtmlPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = []; }
        // Escape 'value' and return it
        return value;
    };
    EscapeHtmlPipe.decorators = [
        { type: Pipe, args: [{ name: 'escapeHtml', pure: false },] },
    ];
    /** @nocollapse */
    EscapeHtmlPipe.ctorParameters = [];
    return EscapeHtmlPipe;
}());
//# sourceMappingURL=pipe.js.map