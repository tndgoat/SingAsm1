export class Validate {
  static userName(val: string) {
    return val.length >= 6;
  }

  static password(val: string) {
    return val.length >= 6;
  };
}
