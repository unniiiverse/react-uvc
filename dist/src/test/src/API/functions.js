"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTabindexes = exports.hideTabindexes = void 0;
const hideTabindexes = (ignore) => {
    const tabindexes = document.querySelectorAll('[tabindex]');
    tabindexes.forEach(el => {
        var _a;
        if (!((_a = el.getAttribute('class')) === null || _a === void 0 ? void 0 : _a.split(' ').some(el => el.match(ignore)))) {
            el.setAttribute('data-tabindexPrev', el.getAttribute('tabindex'));
            el.setAttribute('tabindex', '-1');
        }
    });
};
exports.hideTabindexes = hideTabindexes;
const showTabindexes = () => {
    const tabindexes = document.querySelectorAll('[tabindex]');
    tabindexes.forEach(el => {
        if (el.getAttribute('data-tabindexPrev')) {
            el.setAttribute('tabindex', el.getAttribute('data-tabindexPrev'));
            el.removeAttribute('data-tabindexPrev');
        }
    });
};
exports.showTabindexes = showTabindexes;
