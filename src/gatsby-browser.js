// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!('IntersectionObserver' in window)) {
    import('react-intersection-observer');
    console.log('# IntersectionObserver is polyfilled!');
  }
};
