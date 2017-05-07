# Announcements - Thu May 4th

## Code 301: JSON & AJAX - Lab (8th Class)

### Get your reviews in

### Assignments for this Week

* May 1st:  Portfolio 03 for **jquery and the events** due
* May 2nd:  Read 367-408
* May 2nd:  Quiz II due
* May 4th:  Read 530-543


# Review


## Learning Objectives
<!-- the learning objectives from the corresponding class number -->
* Identify when apps need persistence, to improve the UX and isolate the model logic in the code base.
* Understand how the browser uses the request-response (WRRC) cycle to render an HTML file or AJAX call.
  * Review the use of jQuery's Deferred Object (`$.get().then().catch()`)
* Refresh the localStorage object and JSON usage
* Understand the implementation and usage of ES2015 Syntax for `let` and `const`

---

## Resources
<!-- a list of links if any are necessary for the assignment-->
[MDN let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
[MDN const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
[jQuery API Reference (see AJAX Methods and the far right)](https://oscarotero.com/jquery/)

---

# Lecture

* [lecture](./slides/Code 301 - Class 6.pdf)
* [picture](./full-stack-diagram.png)

# Demos

01 - 06


# Pair Programming

### Some prerequisite knowledge

* Github link for tonight's lab:
	* [https://github.com/cfpdx-301night-spring-2017/06-ajax-and-json](https://github.com/cfpdx-301night-spring-2017/06-ajax-and-json)


## Feature Tasks
<!-- a list or description of the feature tasks you want the students to implement -->
1. Start by looking over what's new in the codebase. There is a /data folder! There are some `// REVIEW` comments! Practice your code-reading skills.
1. In `index.html`, after we load all our script tags, we need to kick off the retrieval of data, and rendering of the page. What's the right method to call?
1. Fill in what's needed in article.js, so that all the articles are loaded and rendered, and retrieved with AJAX.
1. Actually, we only need to request the JSON file when we don't already have it, so the conditional check should only do the ajax call when localStorage doesn't have the rawData yet.

### Stretch Goals
1. Coded as above, we won't request a new JSON file if we've already downloaded it once. This cacheing is problematic: if the JSON file is updated (therefore our cache is "invalid"), a new copy won't be requested from the server unless localStorage is cleared. To overcome this, we could use a small and fast AJAX request with a method of `HEAD`, to request just the headers, and not the contents of the file. The HEAD response will contain a key called "eTag". The value of the eTag header is calculated based on the contents of the file. So if a new article is added (or an existing one is edited even slightly), the eTag will be different.
  - If we cache the eTag, then we can compare our cached version of it with a new eTag check, to determine if we need to get the whole file or not.
  - This can introduce some synchronicity issues, so we'll need to carefully control what methods are calling back to what.

Hint: You'll be able to see everything the server returns, if your AJAX success function looks something like this:

```javascript
function(data, message, xhr) {
  console.log(xhr);
}
```


# Class 06 Portfolio assignment

## User Stories: MVP
 1. As a developer, I want to store my project data in a .json file, so that I can keep it organized.
 - As a developer, I want to retrieve that source data file asynchronously, so that my app logic gets the data just when I need it.

### User Stories: Stretch Goals
 - As a reader, I only want to have to fetch data when it's updated (and keep it cached locally), so that I don't make unneeded AJAX calls.

## Technical Requirements and Grading Rubric
 - Transfer your collection of data over to a .json file, replacing your original file.
 - [JSON-Lint](http://jsonlint.com/) to the rescue!
 - Continue to follow good SMACSS principles.
 - Be sure to use the correct jQuery method for each AJAX call.
 - Be thoughtful when functions are executed asynchronously. This is a major source of bugs!

# Questions?












