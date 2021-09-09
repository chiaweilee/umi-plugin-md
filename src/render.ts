export default (rawHtml: string): string => `import React from 'react';
  export default function() {
    return (${rawHtml});
  }`;
