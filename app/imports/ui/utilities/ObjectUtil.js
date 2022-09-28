export default class ObjectUtil {
  static objectToArrOfObj = (obj) => Object.entries(obj).map((e) => ({ [e[0]]: e[1] }));
}
