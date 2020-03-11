class Vnode{
  constructor(tag,attrs,children){
    this.tag = tag;
    this.attrs = attrs;
    this.children = children;
  }
}
React.createElement = function(tag,attrs,children){
  return new Vnode(tag,attrs,children)
}