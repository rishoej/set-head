# setHead
A vanilla javascript function to set the page title, description and keywords on the client-side.
# How to:
ES6
```
import setHead from './setHead.js';

setHead('My Title', 'My Description', 'My Keywords');
```
Will turn into
```
<head>
  <title>My Title</title>
  <meta name="Description" content="My Description">
  <meta name="keywords" content="My Keywords">
</head>
```
