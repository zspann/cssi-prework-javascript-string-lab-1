# String Manipulation - L337

Since you are gaining entry into the nerd universe, it's time to learn l33t (leet). l33t is encoding of sorts that manipulates strings using certain rules [l33t on Wikipedia](https://en.wikipedia.org/wiki/Leet).

For this lab, we will 2 basic l33t rules.

1. Substitute the vowels a,e,i and o.
 * a becomes 4
 * e becomes 3
 * i becomes 1
 * o becomes 0

2. Replace all whitespace with a `$`

 ** Note on replacement:** The `.replace()` function in javascript will only replace the first instance of the substring that is being searched for. For example, if I use `.replace()` to replace "o" with "0" in "Food" the return value will be "F0od". To replace a substring globally, you can either string together a bunch of `.replace()` methods, which is inefficient, or you can use Regular Expressions (We'll learn more about these in Python). Regular expressions are a way of searching for patterns in strings, and are delineated by forward slashes. To replace all of the "o"s in "food", we'd write:

 ```
 "food".replace(/o/g, "0")
 ```
The content inside // is what is the pattern being searched for, and the "g" afterwards stands for for "global" - this means we're looking for every instance of 'o' in the string.

Use this as a template when you build out your l33t converter!


## Instructions

1. Fork and clone this lab (either through github or by clicking on the 'open' button in Learn). `cd` into the lab directory.

2. Open `index.html` in the browser. You can open html files by using the command line or by using Finder.

3. Open the JavaScript console within the browser to see any messages.

4. Press the "l33t It" button and you'll see the encoder just returns the original `userString`.

5. Open `encoder.js`. Follow the instructions in the comments to add code that translates `userString` into basic l33t before it is returned.

6. Run `learn` to make sure the function passes the tests!