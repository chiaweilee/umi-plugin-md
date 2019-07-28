import selfClose from '../selfClose';

test('self-close correctly', () => {
  const source = [
    '<br>',
    '<img class="t">',
    '<img id="a" class="t">',
    '<img id="a" class="t" style={{ color: "red" }}>',
    '<hr>',
  ];
  const target = [
    '<br />',
    '<img class="t" />',
    '<img id="a" class="t" />',
    '<img id="a" class="t" style={{ color: "red" }} />',
    '<hr />',
  ];

  source.forEach((s, i) => {
    expect(selfClose(s)).toBe(target[i]);
  });
});
