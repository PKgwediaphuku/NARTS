interface NetlifyImageOptions {
  w?: number;
  h?: number;
  fit?: "contain" | "cover" | "fill";
  position?: "center" | "top" | "bottom" | "left" | "right";
  fm?: "avif" | "jpg" | "png" | "webp" | "gif";
  q?: number;
}

export function netlifyImage(src: string, opts: NetlifyImageOptions = {}): string {
  const params = new URLSearchParams({ url: src });
  if (opts.w) params.set("w", String(opts.w));
  if (opts.h) params.set("h", String(opts.h));
  if (opts.fit) params.set("fit", opts.fit);
  if (opts.position) params.set("position", opts.position);
  if (opts.fm) params.set("fm", opts.fm);
  if (opts.q) params.set("q", String(opts.q));
  return `/.netlify/images?${params.toString()}`;
}
