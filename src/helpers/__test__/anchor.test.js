import anchor from '../anchor';

test('slug correctly', () => {
  const wrapperStart = '<html><head></head><body>';
  const wrapperEnd = '</body></html>';
  const option = ['h1', 'h2', 'h3'];
  const source = ['<h1>a</h1>', '<h1>helloWorld</h1>'];
  const target = [
    '<h1 id="a"><a class="anchor" href="#a"></a>a</h1>',
    '<h1 id="helloworld"><a class="anchor" href="#helloworld"></a>helloWorld</h1>',
  ];

  source.forEach((s, i) => {
    expect(anchor(s, option)).toBe(wrapperStart + target[i] + wrapperEnd);
  });
});
