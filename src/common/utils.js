class Utils {
  static lastUpdated(updated) {
    const time = new Date(updated);
    return time.toUTCString();
  }
}

export default Utils;
