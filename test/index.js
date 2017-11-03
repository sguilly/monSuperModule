import test from "tape"
import monSuperModule from "../dist"

test("monSuperModule", (t) => {
  t.plan(1)
  t.equal(true, monSuperModule(), "return true")
})

test('timing test', function (t) {
  t.plan(1);
  
  t.equal(typeof Date.now, 'function');
  
  
  // var start = Date.now();
  
  // setTimeout(function () {
  //     t.equal(Date.now() - start, 100);
  // }, 100);
});
