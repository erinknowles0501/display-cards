
# Dynamic card display with React and the WP API
### Overview:
Posts are pulled with a function that is called on construct and whenever the radio changes, with different parameters selecting only certain tags.
Note that there is functionality here to, for example, only display pets in the 'adoptable' category - or to add more parameters like "good with kids", "fixed", "has shots" etc. 
For the purposes of this demo I have just hard-coded the tag id but you could definitely pull that in without too much trouble with `wp/v2/sites/[yoursite]/tags`.

----

### Editing:
#### General
Download/clone this repo. Run `npm install` and then `npm start`.  (Requires Node.)
WordPress posts here require a title, content (description), and featured image - with option to add tags (`'dog'` or `'cat'` ) and categories.

#### Editing styling
See `index.scss` - SCSS compiles to CSS.

#### Editing the blog the posts come from
`myBlog` in `getCards()` in *App.js*.
Note: `https://www` should NOT be included.

----

### Further questions?
Contact me! Always happy to lend a hand. 