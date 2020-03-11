class jQuery {
  constructor(selector) {
    let elements = Array.from(document.querySelectorAll(selector));
    let length = elements ? elements.length : 0;
    for (let i = 0;i<length;i++) {
      this[i] = elements[i];
    }
    this.length = length;
  }
}
window.$ = function(selector){
  return new jQuery(selector);
}