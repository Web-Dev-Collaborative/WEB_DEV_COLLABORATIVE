// Node.js is used to write this to the README.md file.
// CommonJS-style export used for compatibility with Node.js
module.exports = `
# Markdown Slides

---

## Code Snippets

* Supports in-line code \`snippets\` with backticks
* Or, use multi-line code blocks with automatic syntax highlighting:

\`\`\`js
for (let i = 0; i < 10; i++) {
  console.log('hello world!');
}
\`\`\`

---

## Tables

* Tables are supported as well

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---

## Presenting

Click the screen icon in the navbar or press F5.

* Use arrow keys (or PgUp/PgDn) to navigate through slides.
* Home/End go to the beginning/end of the deck.
* Press Escape or F5 to switch back to edit mode.
* Most standard wireless remotes are supported.

---

## Slides Preview

* The markdown is automatically converted into slides that you can see and scroll through to the right.
* When the editor is not selected, the same keyboard shortcuts work to advance the slide as in presentation mode.
* You can also click on slides to select them.

Note:
* Anything after \`Note:\` is not rendered in the slide.
* But it does show up in the notes preview section below.

---

## State is Synced

* The slides are persisted even if you navigate away from site.
* All changes are immediately synced to all open tabs, including which slide is active.
* This means you can view and edit your slides in a separate window while your present.

---

## Cursor Position Syncs

When the **Sync editor position** option is checked...

* The current slide adjusts to follow your cursor when editing.
* The text for the current slide is highlighted in the editor when it is not active.
* **Warning:** this can have some *weird* consequences if you have two edit views syncing their position at the same time.

---

## Credits

* [Claire Rogers](https://github.com/clairekrogers) adapted the app from [the original](https://github.com/jacksingleton/hacker-slides).
* [Jon Wolverton](https://github.com/clairekrogers) refactored and updated it to support multiple screens.
`;
