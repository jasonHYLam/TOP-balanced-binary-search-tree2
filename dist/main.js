(()=>{"use strict";function t(l){if(1===l.length)return l;{const e=Math.ceil(l.length/2);let r=t(l.slice(0,e)),i=t(l.slice(e)),n=[];for(;r[0]||i[0];)r[0]<i[0]?(n.push(r[0]),r.shift()):i[0]<r[0]?(n.push(i[0]),i.shift()):r[0]==i[0]?(n.push(r[0]),n.push(i[0]),r.shift(),i.shift()):r[0]?i[0]||(n.push(r[0]),r.shift()):(n.push(i[0]),i.shift());return n}}class l{constructor(t){this.data=t,this.left=null,this.right=null}}function e(t){if(0===t.length)return null;{const r=Math.floor(t.length/2),i=new l(t[r]);return i.left=e(t.slice(0,r)),i.right=e(t.slice(r+1)),i}}const r=(t,l="",e=!0)=>{null!==t&&(null!==t.right&&r(t.right,`${l}${e?"│   ":"    "}`,!1),console.log(`${l}${e?"└── ":"┌── "}${t.data}`),null!==t.left&&r(t.left,`${l}${e?"    ":"│   "}`,!0))},i=[1,7,4,23,8,9,4,3,5,7,9,67,6345,324];console.log(i);let n=new class{constructor(l){this.root=function(l){let r=t(l);return e([...new Set(r)])}(l)}insert(t){!function t(e,r){if(r<e.data&&null==e.left){const t=new l(r);e.left=t}else if(r>e.data&&null==e.right){const t=new l(r);e.right=t}else{if(r<e.data)return t(e.left,r);if(r>e.data)return t(e.right,r);if(r==e.data)return void console.log("value already in tree, try another value")}}(this.root,t)}delete(t){!function t(l,e){if(l.left&&l.left.data===e&&null===l.left.left&&null===l.left.right)l.left=null;else if(l.right&&l.right.data===e&&null===l.right.left&&null===l.right.right)l.right=null;else if(l.left&&l.left.data===e&&null!==l.left.left&&null===l.left.left.left&&null===l.left.left.right&&null===l.left.right)l.left=l.left.left;else if(l.left&&l.left.data===e&&null!==l.left.right&&null===l.left.right.left&&null===l.left.right.right&&null===l.left.left)l.left=l.left.right;else if(l.right&&l.right.data===e&&null!==l.right.left&&null===l.right.left.left&&null===l.right.left.right&&null===l.right.right)l.right=l.right.left;else if(l.right&&l.right.data===e&&null!==l.right.right&&null===l.right.right.left&&null===l.right.right.right&&null===l.right.left)l.right=l.right.right;else if(l.data===e&&null!==l.left&&null!==l.right){let t=l.right,e=t;for(;null!==t.left;)e=t,t=t.left;l.data=t.data,e.left=null}else{if(e>l.data&&null===l.right)return void console.log(`${e} not found, please try again`);if(e<l.data&&null===l.left)return void console.log(`${e} not found, please try again`);if(e<l.data)return t(l.left,e);if(e>l.data)return t(l.right,e)}}(this.root,t)}find(t){!function t(l,e){if(l.data===e)return console.log(l),l;if(e>l.data&&null===l.right)console.log(`${e} not found`);else if(e<l.data&&null===l.left)console.log(`${e} not found`);else{if(e>l.data)return t(l.right,e);if(e<l.data)return t(l.left,e)}}(this.root,t)}levelOrderIterative(t){let l=[];if(l.push(this.root),t)for(;0!==l.length;)t(l[0]),l[0].left&&l.push(l[0].left),l[0].right&&l.push(l[0].right),l.shift();else{let t=[];for(;0!==l.length;)t.push(l[0]),l[0].left&&l.push(l[0].left),l[0].right&&l.push(l[0].right),l.shift()}}preOrder(t){if(t){function l(e){t(e),null===e.left&&null===e.right||(e.left&&l(e.left),e.right&&l(e.right))}l(this.root)}else{function e(t){let l=[t.data];return null===t.left&&null===t.right?[t.data]:(t.left&&(l=l.concat(e(t.left))),t.right&&(l=l.concat(e(t.right))),l)}console.log(e(this.root))}}inOrder(t){if(t){function l(e){null===e.left&&null===e.right?t(e):(e.left&&l(e.left),t(e),e.right&&l(e.right))}l(this.root)}else{function e(t){let l=[];return t.left&&(l=l.concat(e(t.left))),l=l.concat([t.data]),t.right&&(l=l.concat(e(t.right))),l}console.log(e(this.root))}}postOrder(t){if(t){function l(e){null===e.left&&null===e.right||(e.left&&l(e.left),e.right&&l(e.right)),t(e)}l(this.root)}else{function e(t){let l=[];return t.left&&(l=l.concat(e(t.left))),t.right&&(l=l.concat(e(t.right))),l=l.concat([t.data]),l}console.log(e(this.root))}}height(t){return function t(l,e=0,r=[]){try{return null==l.left&&null==l.right?r.push(e):(l.left&&t(l.left,e+1,r),l.right&&t(l.right,e+1,r)),Math.max(...r)}catch(t){return"value not found"}}(function t(l,e){return l.data===e?l:e>l.data&&null===l.right||e<l.data&&null===l.left?void 0:e>l.data?t(l.right,e):e<l.data?t(l.left,e):void 0}(this.root,t))}depth2(t){return this.height(this.root.data)-this.height(t)}depth(t){return function t(l,e,r=0){if(l.data===e)return r;if(null==l.left&&null==l.right)console.log("value not found");else{if(e<l.data)return t(l.left,e,r+1);if(e>l.data)return t(l.right,e,r+1)}}(this.root,t)}isBalanced(){const t=this.height(this.root.left.data);console.log(t);const l=this.height(this.root.right.data);console.log(l);const e=Math.abs(t-l);return console.log(e),0===e||1===e}rebalance(){}}(i);console.log(n),r(n.root),n.insert(9),r(n.root),n.delete(323),r(n.root),n.find(6),n.find(1),n.find(5),n.levelOrderIterative(),n.preOrder(),n.postOrder(),n.insert(999),n.insert(322),n.insert(321),n.insert(320),n.insert(0),r(n.root),console.log(n.depth(320))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVFDLElBQ0pFLEVBQVEwQixNQUFNLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtYmFsYW5jZWQtYmluYXJ5LXNlYXJjaC10cmVlMi8uL3NyYy9tZXJnZVNvcnQuanMiLCJ3ZWJwYWNrOi8vdG9wLWJhbGFuY2VkLWJpbmFyeS1zZWFyY2gtdHJlZTIvLi9zcmMvQlNULmpzIiwid2VicGFjazovL3RvcC1iYWxhbmNlZC1iaW5hcnktc2VhcmNoLXRyZWUyLy4vc3JjL3ByZXR0eVByaW50LmpzIiwid2VicGFjazovL3RvcC1iYWxhbmNlZC1iaW5hcnktc2VhcmNoLXRyZWUyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBtZXJnZVNvcnQoYXJyYXkpIHtcbiAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAxKSByZXR1cm4gYXJyYXk7XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGhhbGYgPSBNYXRoLmNlaWwoYXJyYXkubGVuZ3RoLzIpXG4gICAgICAgIC8vIHNwbGl0IGFycmF5IGluIGhhbGZcbiAgICAgICAgY29uc3QgbGVmdEhhbGYgPSBhcnJheS5zbGljZSgwLCBoYWxmKVxuICAgICAgICAvLyBjYWxsIG1lcmdlU29ydCBvbiB0aGUgbGVmdCBoYWxmXG4gICAgICAgIGxldCBzb3J0ZWRMZWZ0SGFsZiA9IG1lcmdlU29ydChsZWZ0SGFsZilcblxuICAgICAgICBjb25zdCByaWdodEhhbGYgPSBhcnJheS5zbGljZShoYWxmKVxuICAgICAgICAvLyBjYWxsIG1lcmdlU29ydCBvbiB0aGUgcmlnaHQgaGFsZlxuICAgICAgICBsZXQgc29ydGVkUmlnaHRIYWxmID0gbWVyZ2VTb3J0KHJpZ2h0SGFsZik7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBlbGVtZW50IGluIGxlZnQgaGFsZiBhbmQgcmlnaHQgaGFsZiwgc2VlIHdoaWNoIGlzIHNtYWxsZXJcbiAgICAgICAgbGV0IG1lcmdlZEFycmF5ID0gW107XG4gICAgICAgIHdoaWxlIChzb3J0ZWRMZWZ0SGFsZlswXSB8fCBzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgIC8vIGlmIChzb3J0ZWRMZWZ0SGFsZlsxXSA8IHNvcnRlZFJpZ2h0SGFsZlswXSkgeyBpcyB0aGlzIHdyb25nP1xuICAgICAgICAgICAgaWYgKHNvcnRlZExlZnRIYWxmWzBdIDwgc29ydGVkUmlnaHRIYWxmWzBdKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRMZWZ0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBzb3J0ZWRMZWZ0SGFsZi5zaGlmdCgpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNvcnRlZFJpZ2h0SGFsZlswXSA8IHNvcnRlZExlZnRIYWxmWzBdKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRSaWdodEhhbGZbMF0pXG4gICAgICAgICAgICAgICAgc29ydGVkUmlnaHRIYWxmLnNoaWZ0KClcblxuICAgICAgICAgICAgICAgIC8vIGVkZ2UgY2FzZSB3aGVyZSB0aGUgc2FtZSBudW1iZXIgaXMgYmVpbmcgY29tcGFyZWRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc29ydGVkTGVmdEhhbGZbMF0gPT0gc29ydGVkUmlnaHRIYWxmWzBdKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChzb3J0ZWRMZWZ0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZFJpZ2h0SGFsZlswXSlcbiAgICAgICAgICAgICAgICBzb3J0ZWRMZWZ0SGFsZi5zaGlmdCgpXG4gICAgICAgICAgICAgICAgc29ydGVkUmlnaHRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgICAgICAvLyBlZGdlIGNhc2Ugd2hlcmUgb25lIGFycmF5IGlzIGVtcHR5XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzb3J0ZWRMZWZ0SGFsZlswXSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goc29ydGVkUmlnaHRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZFJpZ2h0SGFsZi5zaGlmdCgpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFzb3J0ZWRSaWdodEhhbGZbMF0pIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRBcnJheS5wdXNoKHNvcnRlZExlZnRIYWxmWzBdKVxuICAgICAgICAgICAgICAgIHNvcnRlZExlZnRIYWxmLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lcmdlZEFycmF5O1xuICAgIH1cbn0iLCIvLyBpbXBvcnQgeyBub2RlIH0gZnJvbSBcIndlYnBhY2tcIjtcbmltcG9ydCB7IG1lcmdlU29ydCB9IGZyb20gXCIuL21lcmdlU29ydFwiO1xuXG5pbXBvcnQgeyBwcmV0dHlQcmludCB9IGZyb20gXCIuL3ByZXR0eVByaW50XCI7XG5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YT0gdmFsdWU7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBUcmVlIHtcbiAgICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgICAgICB0aGlzLnJvb3QgPSBidWlsZFRyZWUoYXJyYXkpO1xuICAgIH1cblxuXG4gICAgaW5zZXJ0KHZhbHVlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBub2RlLmRhdGEgJiYgbm9kZS5sZWZ0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdOb2RlID0gbmV3IE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG5ld05vZGU7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEgJiYgbm9kZS5yaWdodCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbmV3Tm9kZTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQsIHZhbHVlKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQsIHZhbHVlKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgYWxyZWFkeSBpbiB0cmVlLCB0cnkgYW5vdGhlciB2YWx1ZVwiKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdCwgdmFsdWUpXG4gICAgfVxuXG4gICAgZGVsZXRlKHZhbHVlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGNvZGUgcmVxdWlyZXMgZ3VhcmQgY2xhdXNlOiBpZihub2RlLmxlZnQpLCBvciBpZihub2RlLnJpZ2h0KVxuICAgICAgICAgICAgLy8gY29uc2lkZXIgYXQgbGVhc3QgNCBjYXNlc1xuICAgICAgICAgICAgLy8gQ2FzZSAxOiBkZWxldGluZyB0aGUgbGVhZiBub2RlXG4gICAgICAgICAgICBpZiAobm9kZS5sZWZ0ICYmIG5vZGUubGVmdC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLmxlZnQubGVmdCA9PT0gbnVsbCAmJiBub2RlLmxlZnQucmlnaHQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodCAmJiBub2RlLnJpZ2h0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUucmlnaHQubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yaWdodCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXNlIDI6IGRlbGV0aW5nIGEgYnJhbmNoIG5vZGUgd2l0aCBvbmUgbGVhZjsgcG9pbnQgdGhlIHByZWNlZGluZyBjaGlsZCB0byB0aGUgMm5kIGZvbGxvd2luZyBjaGlsZFxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5sZWZ0ICYmIG5vZGUubGVmdC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLmxlZnQubGVmdCAhPT0gbnVsbCAmJiBub2RlLmxlZnQubGVmdC5sZWZ0ID09PSBudWxsIFxuICAgICAgICAgICAgICAgICYmIG5vZGUubGVmdC5sZWZ0LnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLmxlZnQgPSBub2RlLmxlZnQubGVmdFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5sZWZ0ICYmIG5vZGUubGVmdC5kYXRhID09PSB2YWx1ZSAmJiBub2RlLmxlZnQucmlnaHQgIT09IG51bGwgJiYgbm9kZS5sZWZ0LnJpZ2h0LmxlZnQgPT09IG51bGwgXG4gICAgICAgICAgICAgICAgJiYgbm9kZS5sZWZ0LnJpZ2h0LnJpZ2h0ID09PSBudWxsICYmIG5vZGUubGVmdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUubGVmdCA9IG5vZGUubGVmdC5yaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobm9kZS5yaWdodCAmJiBub2RlLnJpZ2h0LmRhdGEgPT09IHZhbHVlICYmIG5vZGUucmlnaHQubGVmdCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0LmxlZnQubGVmdCA9PT0gbnVsbCBcbiAgICAgICAgICAgICAgICAmJiBub2RlLnJpZ2h0LmxlZnQucmlnaHQgPT09IG51bGwgJiYgbm9kZS5yaWdodC5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnJpZ2h0ID0gbm9kZS5yaWdodC5sZWZ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLnJpZ2h0ICYmIG5vZGUucmlnaHQuZGF0YSA9PT0gdmFsdWUgJiYgbm9kZS5yaWdodC5yaWdodCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0LnJpZ2h0LmxlZnQgPT09IG51bGwgXG4gICAgICAgICAgICAgICAgJiYgbm9kZS5yaWdodC5yaWdodC5yaWdodCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0LmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yaWdodCA9IG5vZGUucmlnaHQucmlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFRPRE86IGVkZ2UgY2FzZSB3aGVyZSByb290IGlzIGhhcyBvbmUgbGVhZiAodHdvIG5vZGVzIG9ubHkgaW4gdGhlIHRyZWUpXG4gICAgICAgICAgICAvLyByZXF1aXJlcyBjaGVja2luZyBpZiBub2RlIGlzIHJvb3QsIGFuZCBjaGVja2luZyBpZiBpdCBvbmx5IGhhcyBvbmUgbGVhZlxuXG4gICAgICAgICAgICAvLyBDYXNlIDM6IGRlbGV0aW5nIGEgYnJhbmNoIHdpdGggYm90aCBsZWF2ZXM7IGdldCB0aGUgbmV4dCByaWdodCwgdGhlbiBsZWZ0bW9zdCBpIHRoaW5rXG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmRhdGEgPT09IHZhbHVlICYmIG5vZGUubGVmdCAhPT0gbnVsbCAmJiBub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRlbXAgPSBub2RlLnJpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wUGFyZW50ID0gdGVtcDtcbiAgICAgICAgICAgICAgICB3aGlsZSAodGVtcC5sZWZ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBQYXJlbnQgPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wID0gdGVtcC5sZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLmRhdGEgPSB0ZW1wLmRhdGE7XG4gICAgICAgICAgICAgICAgdGVtcFBhcmVudC5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENhc2UgNDogY29uc29sZSBsb2cgaWYgdGhlIHZhbHVlIGlzbid0IGZvdW5kXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dmFsdWV9IG5vdCBmb3VuZCwgcGxlYXNlIHRyeSBhZ2FpbmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhICYmIG5vZGUubGVmdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3ZhbHVlfSBub3QgZm91bmQsIHBsZWFzZSB0cnkgYWdhaW5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQsIHZhbHVlKVxuICAgICAgICAgICAgfSBlbHNlIGlmICggdmFsdWUgPiBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjdXJzaXZlRnVuY3Rpb24obm9kZS5yaWdodCwgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVjdXJzaXZlRnVuY3Rpb24odGhpcy5yb290LCB2YWx1ZSlcbiAgICB9XG5cbiAgICBmaW5kKHZhbHVlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vZGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdmFsdWUgZXhpc3RzIGF0IGxlYWYgb3IgdGhlIGxlYWYgcGFyZW50c1xuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkgY29uc29sZS5sb2coYCR7dmFsdWV9IG5vdCBmb3VuZGApXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT09IG51bGwpIGNvbnNvbGUubG9nKGAke3ZhbHVlfSBub3QgZm91bmRgKVxuICAgICAgICAgICAgLy8gaWYgbm9kZSBub3QgZm91bmQsIGFuZCBub3QgYXQgdGhlIGxlYWYgbm9kZXMsIHJlY3Vyc2l2ZWx5IGdvIHRocm91Z2ggdHJlZVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHJldHVybiByZWN1cnNpdmVGdW5jdGlvbihub2RlLnJpZ2h0LCB2YWx1ZSlcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSByZXR1cm4gcmVjdXJzaXZlRnVuY3Rpb24obm9kZS5sZWZ0LCB2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgICByZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QsIHZhbHVlKVxuICAgIH1cblxuICAgIGxldmVsT3JkZXJJdGVyYXRpdmUoaGVscGVyRnVuY3Rpb24pIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gW11cbiAgICAgICAgcXVldWUucHVzaCh0aGlzLnJvb3QpXG4gICAgICAgIGlmIChoZWxwZXJGdW5jdGlvbikge1xuICAgICAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGhlbHBlckZ1bmN0aW9uKHF1ZXVlWzBdKVxuICAgICAgICAgICAgICAgIGlmIChxdWV1ZVswXS5sZWZ0KSBxdWV1ZS5wdXNoKHF1ZXVlWzBdLmxlZnQpXG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlWzBdLnJpZ2h0KSBxdWV1ZS5wdXNoKHF1ZXVlWzBdLnJpZ2h0KVxuICAgICAgICAgICAgICAgIHF1ZXVlLnNoaWZ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBhcnJheSA9IFtdXG4gICAgICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHF1ZXVlWzBdKTtcbiAgICAgICAgICAgIGlmIChxdWV1ZVswXS5sZWZ0KSBxdWV1ZS5wdXNoKHF1ZXVlWzBdLmxlZnQpXG4gICAgICAgICAgICBpZiAocXVldWVbMF0ucmlnaHQpIHF1ZXVlLnB1c2gocXVldWVbMF0ucmlnaHQpXG4gICAgICAgICAgICBxdWV1ZS5zaGlmdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmVPcmRlcihoZWxwZXJGdW5jdGlvbikge1xuICAgICAgICBpZiAoaGVscGVyRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBoZWxwZXJGdW5jdGlvbihub2RlKVxuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdClcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVjdXJzaXZlRnVuY3Rpb24odGhpcy5yb290KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGxldCByZWN1cnNpdmVWYWx1ZSA9IFtub2RlLmRhdGFdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkgcmV0dXJuIFtub2RlLmRhdGFdXG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHJlY3Vyc2l2ZVZhbHVlID0gcmVjdXJzaXZlVmFsdWUuY29uY2F0KHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdCkpXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSByZWN1cnNpdmVWYWx1ZSA9IHJlY3Vyc2l2ZVZhbHVlLmNvbmNhdChyZWN1cnNpdmVGdW5jdGlvbihub2RlLnJpZ2h0KSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdCkpXG5cbiAgICAgICAgICAgIC8vIGNsZWFuZXIgdmVyc2lvbjsgYmFzZSBjYXNlIGlzIG5vdCBzdGF0ZWQsIGFzIGRvIG5vdCBuZWVkIHRvIHN0YXRlIGlmIG51bGxcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHJlY3Vyc2l2ZVRyYXZlcnNhbChub2RlKSB7XG4gICAgICAgICAgICAvLyBsZXQgYXJyYXkgPSBbbm9kZS5kYXRhXSAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaWYgKG5vZGUubGVmdCkgYXJyYXkgPSBhcnJheS5jb25jYXQocmVjdXJzaXZlVHJhdmVyc2FsKG5vZGUubGVmdCkpIC8vIFwiY29ubmVjdGluZ1wiIGFycmF5c1xuICAgICAgICAgICAgLy8gaWYgKG5vZGUucmlnaHQpIGFycmF5ID0gYXJyYXkuY29uY2F0KHJlY3Vyc2l2ZVRyYXZlcnNhbChub2RlLnJpZ2h0KSkgLy8gXCJjb25uZWN0aW5nXCIgYXJyYXlzXG4gICAgICAgICAgICAvLyByZXR1cm4gYXJyYXlcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlY3Vyc2l2ZVRyYXZlcnNhbCh0aGlzLnJvb3QpKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHJhdmVyc2UgdGhlIGxlZnQgc3VidHJlZSwgdGhlbiB0aGUgcm9vdCwgdGhlbiB0aGUgcmlnaHQgc3VidHJlZS5cbiAgICBpbk9yZGVyKGhlbHBlckZ1bmN0aW9uKSB7XG4gICAgICAgIGlmIChoZWxwZXJGdW5jdGlvbikge1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaXZlRnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkgaGVscGVyRnVuY3Rpb24obm9kZSlcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkgcmVjdXJzaXZlRnVuY3Rpb24obm9kZS5sZWZ0KVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJGdW5jdGlvbihub2RlKVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcmVjdXJzaXZlRnVuY3Rpb24obm9kZS5yaWdodClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWN1cnNpdmVGdW5jdGlvbih0aGlzLnJvb3QpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlY3Vyc2l2ZVZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmxlZnQpIHJlY3Vyc2l2ZVZhbHVlID0gcmVjdXJzaXZlVmFsdWUuY29uY2F0KHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUubGVmdCkpXG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVZhbHVlID0gcmVjdXJzaXZlVmFsdWUuY29uY2F0KFtub2RlLmRhdGFdKVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcmVjdXJzaXZlVmFsdWUgPSByZWN1cnNpdmVWYWx1ZS5jb25jYXQocmVjdXJzaXZlRnVuY3Rpb24obm9kZS5yaWdodCkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWN1cnNpdmVWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdCkpXG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLy8gdHJhdmVyc2UgdGhlIGxlZnQgc3VidHJlZSwgdGhlbiB0aGUgcmlnaHQgc3VidHJlZSwgdGhlbiB0aGUgcm9vdC5cbiAgICBwb3N0T3JkZXIoaGVscGVyRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKGhlbHBlckZ1bmN0aW9uKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSBoZWxwZXJGdW5jdGlvbihub2RlKVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0KSByZWN1cnNpdmVGdW5jdGlvbihub2RlLmxlZnQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLnJpZ2h0KSByZWN1cnNpdmVGdW5jdGlvbihub2RlLnJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICBoZWxwZXJGdW5jdGlvbihub2RlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlY3Vyc2l2ZUZ1bmN0aW9uKHRoaXMucm9vdClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdXJzaXZlVmFsdWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkgcmVjdXJzaXZlVmFsdWUgPSByZWN1cnNpdmVWYWx1ZS5jb25jYXQocmVjdXJzaXZlRnVuY3Rpb24obm9kZS5sZWZ0KSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucmlnaHQpIHJlY3Vyc2l2ZVZhbHVlID0gcmVjdXJzaXZlVmFsdWUuY29uY2F0KHJlY3Vyc2l2ZUZ1bmN0aW9uKG5vZGUucmlnaHQpKVxuICAgICAgICAgICAgICAgICAgICByZWN1cnNpdmVWYWx1ZSA9IHJlY3Vyc2l2ZVZhbHVlLmNvbmNhdChbbm9kZS5kYXRhXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVjdXJzaXZlRnVuY3Rpb24odGhpcy5yb290KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhlaWdodCh2YWx1ZSkge1xuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVGaW5kKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWx1ZSkgcmV0dXJuIG5vZGU7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdmFsdWUgZXhpc3RzIGF0IGxlYWYgb3IgdGhlIGxlYWYgcGFyZW50c1xuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEgJiYgbm9kZS5yaWdodCA9PT0gbnVsbCkgcmV0dXJuXG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IG5vZGUuZGF0YSAmJiBub2RlLmxlZnQgPT09IG51bGwpIHJldHVyblxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPiBub2RlLmRhdGEpIHJldHVybiByZWN1cnNpdmVGaW5kKG5vZGUucmlnaHQsIHZhbHVlKVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUgPCBub2RlLmRhdGEpIHJldHVybiByZWN1cnNpdmVGaW5kKG5vZGUubGVmdCwgdmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWN1cnNpdmVUcmF2ZXJzYWwobm9kZSwgY291bnRlciA9IDAsIGhlaWdodHMgPSBbXSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5sZWZ0ID09IG51bGwgJiYgbm9kZS5yaWdodCA9PSBudWxsKSBoZWlnaHRzLnB1c2goY291bnRlcilcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUubGVmdCkgcmVjdXJzaXZlVHJhdmVyc2FsKG5vZGUubGVmdCwgY291bnRlcisxLCBoZWlnaHRzKVxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5yaWdodCkgcmVjdXJzaXZlVHJhdmVyc2FsKG5vZGUucmlnaHQsIGNvdW50ZXIrMSwgaGVpZ2h0cylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KC4uLmhlaWdodHMpXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgndmFsdWUgbm90IGZvdW5kJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWN1cnNpdmVUcmF2ZXJzYWwocmVjdXJzaXZlRmluZCh0aGlzLnJvb3QsIHZhbHVlKSlcbiAgICB9XG5cbiAgICAvLyBzdWJ0cmFjdCBub2RlSGVpZ2h0IGZyb20gcm9vdEhlaWdodCB0byBvYnRhaW4gbm9kZURlcHRoXG4gICAgZGVwdGgyKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJvb3RIZWlnaHQgPSB0aGlzLmhlaWdodCh0aGlzLnJvb3QuZGF0YSlcbiAgICAgICAgY29uc3Qgbm9kZUhlaWdodCA9IHRoaXMuaGVpZ2h0KHZhbHVlKVxuICAgICAgICBjb25zdCBub2RlRGVwdGggPSByb290SGVpZ2h0IC0gbm9kZUhlaWdodDtcbiAgICAgICAgcmV0dXJuIG5vZGVEZXB0aFxuICAgIH1cblxuICAgIGRlcHRoKHZhbHVlKSB7XG4gICAgICAgIC8vIHRoaXMgbWlnaHQgYmUgc2ltaWxhciB0byBmaW5kLCBuZWVkIHRvIGludHJvZHVjZSBhIGNvdW50ZXIuLi4hXG4gICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2l2ZVRyYXZlcnNhbChub2RlLCB2YWx1ZSwgY291bnRlcj0wKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb3VudGVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChub2RlLmxlZnQgPT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09IG51bGwpIGNvbnNvbGUubG9nKCd2YWx1ZSBub3QgZm91bmQnKVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDwgbm9kZS5kYXRhKSByZXR1cm4gcmVjdXJzaXZlVHJhdmVyc2FsKG5vZGUubGVmdCwgdmFsdWUsIGNvdW50ZXIgKyAxKVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IG5vZGUuZGF0YSkgcmV0dXJuIHJlY3Vyc2l2ZVRyYXZlcnNhbChub2RlLnJpZ2h0LCB2YWx1ZSwgY291bnRlciArIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZVRyYXZlcnNhbCh0aGlzLnJvb3QsIHZhbHVlKVxuICAgIH1cblxuICAgIC8vIGknbSBzdXJlIHRoaXMgaXNuJ3QgYXMgY29tcGxpY2F0ZWQgYXMgaSB0aGluay4uLlxuICAgIC8vIGNvbXBhcmUgaGVpZ2h0IG9mIGxlZnQgc3VidHJlZSwgYW5kIGhlaWdodCByaWdodCBzdWJ0cmVlLi4uIG1heSBuZWVkIHRvIHVzZSByZWN1cnNpdmVMZWZ0IGFuZCByZWN1cnNpdmVSaWdodC4uLlxuICAgIC8vIG1heSBuZWVkIHRvIHJlY3Vyc2l2ZWx5IGdvIHRocm91Z2ggZWFjaCBub2RlIHRob3VnaFxuICAgIGlzQmFsYW5jZWQoKSB7XG4gICAgICAgIGNvbnN0IGxlZnRTdWJ0cmVlSGVpZ2h0ID0gdGhpcy5oZWlnaHQodGhpcy5yb290LmxlZnQuZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cobGVmdFN1YnRyZWVIZWlnaHQpXG4gICAgICAgIGNvbnN0IHJpZ2h0U3VidHJlZUhlaWdodCA9IHRoaXMuaGVpZ2h0KHRoaXMucm9vdC5yaWdodC5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyaWdodFN1YnRyZWVIZWlnaHQpXG4gICAgICAgIGNvbnN0IGhlaWdodERpZmYgPSBNYXRoLmFicyhsZWZ0U3VidHJlZUhlaWdodCAtIHJpZ2h0U3VidHJlZUhlaWdodClcbiAgICAgICAgY29uc29sZS5sb2coaGVpZ2h0RGlmZilcbiAgICAgICAgaWYgKGhlaWdodERpZmYgPT09IDAgfHwgaGVpZ2h0RGlmZiA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBpIHRoaW5rIHRoaXMgaXMgc2ltcGx5IHVzaW5nIGxldmVsT3JkZXIgaGVoXG4gICAgcmViYWxhbmNlKCkge1xuICAgICAgICBcbiAgICB9XG5cblxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVHJlZShhcnJheSkge1xuICAgICAgICBsZXQgc29ydGVkQXJyYXkgPSBtZXJnZVNvcnQoYXJyYXkpXG4gICAgICAgIGxldCByZW1vdmVkRHVwbGljYXRlcyA9IFsuLi4gbmV3IFNldChzb3J0ZWRBcnJheSldXG4gICAgICAgIHJldHVybiByZWN1cnNpdmVCdWlsZFRyZWUocmVtb3ZlZER1cGxpY2F0ZXMpXG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZUJ1aWxkVHJlZShhcnJheSkge1xuICAgIGlmIChhcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7IC8vIHdoYXQgZG8gaSBuZWVkIHRvIHJldHVybj8gYXJyYXk/IG5vZGU/XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbWlkZGxlSW5kZXggPSBNYXRoLmZsb29yKGFycmF5Lmxlbmd0aC8yKVxuICAgICAgICBjb25zdCByb290ID0gbmV3IE5vZGUoYXJyYXlbbWlkZGxlSW5kZXhdKVxuXG4gICAgICAgIHJvb3QubGVmdCA9IHJlY3Vyc2l2ZUJ1aWxkVHJlZShhcnJheS5zbGljZSgwLCBtaWRkbGVJbmRleCkpXG4gICAgICAgIHJvb3QucmlnaHQgPSByZWN1cnNpdmVCdWlsZFRyZWUoYXJyYXkuc2xpY2UobWlkZGxlSW5kZXggKyAxKSlcbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5yaWdodCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gIH1cbiAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICB9XG59OyIsImltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi9CU1RcIjtcbmltcG9ydCB7IGJ1aWxkVHJlZSB9IGZyb20gXCIuL0JTVFwiO1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tIFwiLi9wcmV0dHlQcmludFwiO1xuXG5jb25zdCB0ZXN0QXJyYXkgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdXG5cbmNvbnNvbGUubG9nKHRlc3RBcnJheSlcblxuLy8gYnVpbGRUcmVlKHRlc3RBcnJheSlcbmxldCBuZXdUcmVlID0gbmV3IFRyZWUodGVzdEFycmF5KVxuY29uc29sZS5sb2cobmV3VHJlZSlcbnByZXR0eVByaW50KG5ld1RyZWUucm9vdClcblxubmV3VHJlZS5pbnNlcnQoOSlcbnByZXR0eVByaW50KG5ld1RyZWUucm9vdClcblxubmV3VHJlZS5kZWxldGUoMzIzKVxucHJldHR5UHJpbnQobmV3VHJlZS5yb290KVxuXG5uZXdUcmVlLmZpbmQoNilcbm5ld1RyZWUuZmluZCgxKVxubmV3VHJlZS5maW5kKDUpXG5cbi8vIG5ld1RyZWUubGV2ZWxPcmRlckl0ZXJhdGl2ZSgobm9kZSkgPT4gY29uc29sZS5sb2cobm9kZSkpXG5cbm5ld1RyZWUubGV2ZWxPcmRlckl0ZXJhdGl2ZSgpO1xubmV3VHJlZS5wcmVPcmRlcigpXG5cbi8vIG5ld1RyZWUucHJlT3JkZXIoKG5vZGUpPT4gY29uc29sZS5sb2cobm9kZS5kYXRhKSlcblxuLy8gbmV3VHJlZS5pbk9yZGVyKChub2RlKT0+Y29uc29sZS5sb2cobm9kZS5kYXRhKSlcblxubmV3VHJlZS5wb3N0T3JkZXIoKVxuXG4vLyBjb25zb2xlLmxvZyhcbi8vICAgICBuZXdUcmVlLmhlaWdodCg1MClcbi8vIClcblxuLy8gY29uc29sZS5sb2coXG4vLyAgICAgbmV3VHJlZS5oZWlnaHQoNjM0NSlcbi8vIClcblxuXG5cbi8vIGNvbnNvbGUubG9nKFxuLy8gICAgIG5ld1RyZWUuaXNCYWxhbmNlZCgpXG4vLyApXG5cbm5ld1RyZWUuaW5zZXJ0KDk5OSlcbm5ld1RyZWUuaW5zZXJ0KDMyMilcbm5ld1RyZWUuaW5zZXJ0KDMyMSlcbm5ld1RyZWUuaW5zZXJ0KDMyMClcbm5ld1RyZWUuaW5zZXJ0KDApXG5wcmV0dHlQcmludChuZXdUcmVlLnJvb3QpXG4vLyBjb25zb2xlLmxvZyhcbi8vICAgICBuZXdUcmVlLmhlaWdodCgzMjQ3Nylcbi8vIClcbmNvbnNvbGUubG9nKFxuICAgIG5ld1RyZWUuZGVwdGgoMzIwKVxuKVxuLy8gY29uc29sZS5sb2coXG4vLyAgICAgbmV3VHJlZS5oZWlnaHQoNSlcbi8vIClcbi8vIGNvbnNvbGUubG9nKFxuLy8gICAgIG5ld1RyZWUuaXNCYWxhbmNlZCgpXG4vLyApIl0sIm5hbWVzIjpbIm1lcmdlU29ydCIsImFycmF5IiwibGVuZ3RoIiwiaGFsZiIsIk1hdGgiLCJjZWlsIiwic29ydGVkTGVmdEhhbGYiLCJzbGljZSIsInNvcnRlZFJpZ2h0SGFsZiIsIm1lcmdlZEFycmF5IiwicHVzaCIsInNoaWZ0IiwiTm9kZSIsImNvbnN0cnVjdG9yIiwidmFsdWUiLCJ0aGlzIiwiZGF0YSIsImxlZnQiLCJyaWdodCIsInJlY3Vyc2l2ZUJ1aWxkVHJlZSIsIm1pZGRsZUluZGV4IiwiZmxvb3IiLCJyb290IiwicHJldHR5UHJpbnQiLCJub2RlIiwicHJlZml4IiwiaXNMZWZ0IiwiY29uc29sZSIsImxvZyIsInRlc3RBcnJheSIsIm5ld1RyZWUiLCJzb3J0ZWRBcnJheSIsIlNldCIsImJ1aWxkVHJlZSIsImluc2VydCIsInJlY3Vyc2l2ZUZ1bmN0aW9uIiwibmV3Tm9kZSIsInRlbXAiLCJ0ZW1wUGFyZW50IiwiZmluZCIsImxldmVsT3JkZXJJdGVyYXRpdmUiLCJoZWxwZXJGdW5jdGlvbiIsInF1ZXVlIiwicHJlT3JkZXIiLCJyZWN1cnNpdmVWYWx1ZSIsImNvbmNhdCIsImluT3JkZXIiLCJwb3N0T3JkZXIiLCJoZWlnaHQiLCJyZWN1cnNpdmVUcmF2ZXJzYWwiLCJjb3VudGVyIiwiaGVpZ2h0cyIsIm1heCIsImVyciIsInJlY3Vyc2l2ZUZpbmQiLCJkZXB0aDIiLCJkZXB0aCIsImlzQmFsYW5jZWQiLCJsZWZ0U3VidHJlZUhlaWdodCIsInJpZ2h0U3VidHJlZUhlaWdodCIsImhlaWdodERpZmYiLCJhYnMiLCJyZWJhbGFuY2UiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9