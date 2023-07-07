export const hideTabindexes = (ignore) => {
  const tabindexes = document.querySelectorAll('[tabindex]');

  tabindexes.forEach(el => {
    if (!el.getAttribute('class')?.split(' ').some(el => el.match(ignore))) {
      el.setAttribute('data-tabindexPrev', el.getAttribute('tabindex'));
      el.setAttribute('tabindex', '-1');
    }
  });
};

export const showTabindexes = () => {
  const tabindexes = document.querySelectorAll('[tabindex]');

  tabindexes.forEach(el => {
    if (el.getAttribute('data-tabindexPrev')) {
      el.setAttribute('tabindex', el.getAttribute('data-tabindexPrev'));
      el.removeAttribute('data-tabindexPrev');
    }
  });
};

export class ReactUvcError extends Error {
  constructor(props) {
    const { msg, at } = props;

    super(msg);

    this.name = `react-uvc <${at}>`;
  }
}