type Base64 = { t: 'base64', str: string };

function bytesOfString(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

function stringOfBytes(bytes: Uint8Array): string {
  return new TextDecoder('utf8').decode(bytes);
}

function bytesOfBase64(base64: Base64): Uint8Array {
  const binString = atob(base64.str);
  return Uint8Array.from(binString as any, (m: any) => m.codePointAt(0));
}

function base64OfBytes(bytes: Uint8Array): Base64 {
  const binString = String.fromCodePoint(...bytes);
  return { t: 'base64', str: btoa(binString) };
}

async function compressedOf(bytes: Uint8Array): Promise<Uint8Array> {
  return await bytesOfStream(streamOfBytes(bytes).pipeThrough(new CompressionStream('gzip')));
}

async function decompressedOf(bytes: Uint8Array): Promise<Uint8Array> {
  return await bytesOfStream(streamOfBytes(bytes).pipeThrough(new DecompressionStream('gzip')));
}

export async function encode(text: string): Promise<string> {
  // // v1:
  // return encodeURIComponent(btoa(text));

  // v2:
  const x1 = bytesOfString(text);
  const encoded = encodeURIComponent(base64OfBytes(await compressedOf(x1)).str);
  return 'v2/' + encoded;
}

export async function decode(fragment: string) {
  const uridecoded = decodeURIComponent(fragment);
  if (uridecoded.match(/^v2\//)) {
    const stripPrefix = uridecoded.replace(/v2\//, '');
    return stringOfBytes(await decompressedOf(bytesOfBase64({ t: 'base64', str: stripPrefix })));
  }
  else {
    // v1 encoding
    return atob(uridecoded);
  }
}

function concatenateUint8Arrays(arrays: Uint8Array[]) {
  if (arrays.length == 0)
    return new Uint8Array([]);
  const totalLength = arrays.map(arr => arr.length).reduce((a, b) => a + b);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const arr of arrays) {
    result.set(arr, offset);
    offset += arr.length;
  }
  return result;
}

async function bytesOfStream(readableStream: ReadableStream): Promise<Uint8Array> {
  const reader = readableStream.getReader();
  let result: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result.push(value);
  }
  return concatenateUint8Arrays(result);
}

function streamOfBytes(bytes: Uint8Array): ReadableStream {
  return new Blob([bytes]).stream();
}
