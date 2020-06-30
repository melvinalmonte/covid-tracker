class Utils {
  static lastUpdated(updated) {
    const time = new Date(updated);
    return time.toLocaleString();
  }
}

export default Utils;
