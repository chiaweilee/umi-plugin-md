import slug from '../slug';

test('slug correctly', () => {
  const source = [
    'Hello World',
    '4.0',
    // '🔭',
  ];
  const target = [
    'hello-world',
    '40',
    // 'telescope',
  ];

  source.forEach((s, i) => {
    expect(slug(s)).toBe(target[i]);
  });
});
