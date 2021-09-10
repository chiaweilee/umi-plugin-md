export default (rawHtml: string): string => `import React from 'react';
  export default function(props) {
    // scroll to anchor after page component loaded
      React.useEffect(() => {
        if (props?.location?.hash) {
          // AnchorLink.scrollToAnchor(decodeURIComponent(props.location.hash.slice(1)));
        }
      }, []);
    return (${rawHtml});
  }`;
