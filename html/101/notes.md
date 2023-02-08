# HTML 101

## HTML forms the structure of all web pages

HTML -> hyper text markup langugage

The '<head>' tag configures the page and is not rendered by the browser.
The '<title>' contains the name of the page and is rendered in the browser's tab
Tags that have opening and closing elements are known as container elements, because they contain something 
Tags that do not have opening and closing elements are not container elements and are called self-closing tags. ('/>').
To make reading an HTML file easier, lines are nested within their parent element.
Browsers read HTML and in a sense, HTML is like a big, long string.
Browsers can read files or you can start a server in VS Code with "Go Live"

### Some of the most common elements are
#### Semantic elements include
'''
<ul> - unordered list
<ol> - ordered list
<li> - list item, must be contained by a '<ul>' or an '<ol>'
<header> - the header area of the page
<main> - the main area of a page
<body> - contains all other rendering HTML elements
<footer> - the footer area of a page
<nav> - contains navigation element, usually found inside of '<header>'
<p> - used for a single paragraphs of text. Use more '<p>' tags for multiple paragraphs.
<img /> Used for images (not that this is self-closing), must have a 'src' attribute
<a> - anchor tag, used to hyperlink elements with the 'href' attribute
<h1> - header text 
<h2> - header text 
<h3> - header text 
<h4> - header text 
<h5> - header text 
<h6> it goes all the way to 6
'''
#### generic elements include
<div> - generic containing element. "Generic" as in you don't really know what's in there since anything can be in there.
<section> - defines a section area for child elements
'''
#### tags used inside of '<head>'
<link> - used to link a stylesheet, only found in the '<head>'

Semantic html means the tag denotes what's inside of it. NOT <div> or <section>, but everything else under it in the list above.
Non-semantic html means search engines like "Google" can't find it. Semantic html means search engines can find it. Think "search optimization".

<!-- ## Ctrl ']' indents the line to the right, and '[' to the left -->
<!-- Ctrl left arrow/right arrow will let you move to the end of each word
<!-- Ctrl shift left arrow/right arrow will let you highlight and move to the left and right of each word --> -->
<!-- Shift and left/right arrows will let you highlight multiple cursors -->
<!-- ## No server on bottom --> Solution is installing "Live Server" on extensions. Looks like "iHeartRadio" but purple


<!-- Ask how to setup Playground -->

<!-- Git Steps:
1. Git Status (to check status) 
2. Git add "filename/folder" (to send it up)
3. Git Status (just to double check)
4. Git commit -m 'message you want it to read'
5. Git log (to see the commit message)
6. Git push, or git push origin main, as a self-check, making sure it's pushing it all the way so it changes the main, and not just a branch.

/The only thing that can be in a <ul> is an <li>
<span> is an inline element, which means

Node Shell - Playground to experiment w/ Javascript. 
<!-- Ask about node function, and how to exit node -->
<!-- '.exit or .quit to exit node or ctrl + c -->



CSS Note
adding !important places priority to the style in that line