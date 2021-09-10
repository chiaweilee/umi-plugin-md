export default (rawHtml: string): string => `import React from 'react';
  export default function(props) {
    // scroll to anchor after page component loaded
      React.useEffect(() => {
        if (props.location && props.location.hash) {
          const anchor = props.location.hash.slice(1);
          // wait for dom update
          window.requestAnimationFrame(() => {
            const elm = document.getElementById(decodeURIComponent(anchor));
            if (elm) {
              // compatible in Edge
              window.scrollTo(0, getElmScrollPosition(elm) - 100);
            }
          });
        }
      }, []);
    return (${rawHtml});
  }`;
