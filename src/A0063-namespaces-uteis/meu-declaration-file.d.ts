declare namespace _ {
  interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare let global: typeof globalThis & {
  MINHAGLOBAL: string;
};
