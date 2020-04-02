// here are the helper functions used at multiple locations... 

// EXAMPLE
export function getGrayScale(H) {
  let r = 0,
    g = 0,
    b = 0;

  if (H.length === 4) {
    r = '0x' + H[1] + H[1];
    g = '0x' + H[2] + H[2];
    b = '0x' + H[3] + H[3];
  } else if (H.length === 7) {
    r = '0x' + H[1] + H[2];
    g = '0x' + H[3] + H[4];
    b = '0x' + H[5] + H[6];
  }

  r /= 255;
  g /= 255;
  b /= 255;

  r *= 0.2126;
  g *= 0.7152;
  b *= 0.0722;

  let avg = r + g + b;

  avg *= 255;

  return avg;
}
