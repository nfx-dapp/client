export function clampValue(
  value: number,
  { min, max }: { min?: number; max?: number }
) {
  let ans = value;
  if (max && min && max < min) {
    return value;
  }
  if (min && ans < min) {
    ans = min;
  }
  if (max && ans > max) {
    ans = max;
  }
  return ans;
}

export function linearMap(
  value: number,
  mapFrom: { from: number; to: number },
  mapTo: { from: number; to: number },
  clamp = true
) {
  const slope = (mapTo.to - mapTo.from) / (mapFrom.to - mapFrom.from);
  const ans = slope * (value - mapFrom.from) + mapTo.from;
  return clamp
    ? clampValue(ans, {
        min: Math.min(mapTo.from, mapTo.to),
        max: Math.max(mapTo.from, mapTo.to),
      })
    : ans;
}

export function convertColorToRGBVec(color: string): [number, number, number] {
  let rgb: [number, number, number] = [0, 0, 0];

  if (color.startsWith("#")) {
    color = color.slice(1);

    if (color.length === 3) {
      color = color
        .split("")
        .map((char) => char + char)
        .join("");
    }

    rgb = [
      parseInt(color.substr(0, 2), 16) / 255,
      parseInt(color.substr(2, 2), 16) / 255,
      parseInt(color.substr(4, 2), 16) / 255,
    ];
  } else if (color.startsWith("rgb(")) {
    const values = color
      .substring(4, color.length - 1)
      .split(",")
      .map((value) => parseInt(value.trim(), 10));

    rgb = values.map((value) => value / 255) as [number, number, number];
  }

  return rgb;
}

export function getCoords(elem: HTMLElement) {
  var box = elem.getBoundingClientRect();

  var body = document.body;
  var docEl = document.documentElement;

  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;

  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;

  return { top: Math.round(top), left: Math.round(left) };
}

export function splitArrayThirds<T>(arr: T[]): [T[], T[], T[]] {
  const length = arr.length;
  const third = Math.floor(length / 3);

  const part1 = arr.slice(0, third);
  const part2 = arr.slice(third, 2 * third);
  const part3 = arr.slice(2 * third);

  return [part1, part2, part3];
}

export function purifyJson(impureJson: string) {
  const pureJson = impureJson
    // Replace ":" with "@colon@" if it's between double-quotes
    .replace(/:\s*"([^"]*)"/g, function (match, p1) {
      return ': "' + p1.replace(/:/g, "@colon@") + '"';
    })

    // Replace ":" with "@colon@" if it's between single-quotes
    .replace(/:\s*'([^']*)'/g, function (match, p1) {
      return ': "' + p1.replace(/:/g, "@colon@") + '"';
    })

    // Add double-quotes around any tokens before the remaining ":"
    .replace(/(['"])?([a-z0-9A-Z_]+)(['"])?\s*:/g, '"$2": ')

    // Turn "@colon@" back into ":"
    .replace(/@colon@/g, ":")

    // Remove leading and trailing whitespaces
    .trim();
  return pureJson;
}

export function deepCopy<T>(source: T) {
  return JSON.parse(JSON.stringify(source)) as T;
}

export function equateObjects(a: object, b: object) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export function formatEthereumAddress(
  address: string,
  charsToShow: number = 6
): string {
  if (!/^(0x)?[0-9a-fA-F]{40}$/.test(address)) {
    throw new Error("Invalid Ethereum address format");
  }

  const formattedAddress = address.startsWith("0x") ? address : `0x${address}`;

  const truncatedAddress = `${formattedAddress.slice(
    0,
    charsToShow + 2
  )}...${formattedAddress.slice(-charsToShow)}`;

  return truncatedAddress;
}
