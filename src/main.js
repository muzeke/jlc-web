/*!
 * @name <module-name>
 * @description A Brilliant Javascript Module For The Browser
 * @author <user-name>
 * @contributors <user-name> <user@domain.com>
 * @license MIT  // MIT, BSD, ALv2, GPLv3+, LGPLv3+, SEE LICENSE IN LICENSE.txt
 * @version 0.0.1
 * @copyright 2018 <user-name>
 * @email user@domain.com
 * @url https://github.com/<user-name>/<repo-name>
 * @preserve
 */
// import dependencies
import * as $ from "jquery";
// placeholder class
export default class Placeholder {
  constructor() {
    // other static properties
  }
  log(msg) {
    console.log(this.name + ": " + msg);
  }
  get name() {
    return $("#name").text();
  }
  set name(name) {
    $("#name").text(name);
  }
}
