export default function(source: string): string {
  source = source.replace(/\\(`)/g, '\\\\$1');
  source = source.replace(/(`)/g, '\\$1');
  return source;
}
