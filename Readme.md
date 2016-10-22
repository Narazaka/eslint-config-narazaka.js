eslint-config-narazaka
======================

a strict eslint config

like below

```javascript
const hash = {
  a:   "a",
  bbb: "b",
};

export class MyClass extends BaseClass {
  /**
   * foo
   * @param {number} arg1 arg 1
   * @return {string} foo
   */
  foo(arg1) {
    if (arg1 > this.baz()) {
      const bar = this.bar(); // bar
      return `${bar} ${arg1}`;
    } else {
      return this.isBar() ? hash.a : hash.bbb;
    }
  }
}
```

Usage
-----

```
npm install --save-dev eslint-config-narazaka
```

write .eslintrc
```
{
  "extends": "narazaka"
}
```

License
-------
This is released under [MIT License](http://narazaka.net/license/MIT?2016).
