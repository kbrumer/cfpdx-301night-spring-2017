# Announcements - Thu Apr 20th

## Code 301: jQuery and the DOM - Lab (4th Class)

### Get your reviews in

### Assignments for this Week

* Portfolio for **jquery and the DOM** due Thursday


# Review

### jQuery methods
```
  $myTemplate.find('h1').html('New improved');
  $myTemplate.find('li:first').html(model.mytext);
  $myTemplate.find('li:last').find('a').attr('href', model.mylink);

```



# Learning Objectives
<!-- the learning objectives from the corresponding class number -->
* Execute event bindings with jQuery’s `.on()` method.
* Comprehend when event delegation is appropriate.
* Be able to configure event bindings using delegation.
* Familiarity with `data-<attributes>` & string concatenation.
* Build dynamic jQuery selector strings.
* Use of `$(document).ready()`
* Integration of icon fonts through the use of icomoon.

# Lecture

[lecture 1](./slides/Code_301_Class_2_Slides.pdf)

[lecture 2](./slides/Code_Fellows_jQuery_Events.pdf)


# Demo

```


```


# Pair Programming

1. Driver: fork the CF Lab 03 repository if you haven't done so already.
1. Your **forked repo** on GitHub will be your "origin" repo. Clone **your fork** to your local development environment:
  1. If you haven't done so yet, create a directory named "301" - `mkdir 301/` (This will be your parent 301 directory and set you up for organizational success!)
  1. Next, `cd 301/`
  1. `git clone` this repo.
  1. `cd` into this repo.
  1. Immediately `git checkout -b <driverName-navigatorName>` (ex: `git checkout -b rick-brian`). 

### Some prerequisite knowledge

* Github link for tonight's lab:
	* [https://github.com/cfpdx-301night-spring-2017/03-jQuery-and-events](https://github.com/cfpdx-301night-spring-2017/03-jQuery-and-events) 

### Feature Tasks  
<!-- a list or description of the feature tasks you want the students to implement -->
1. Add any new script tags to your HTML.
2. Complete the new requirements for setting `data-<attributes>` in your `toHtml()` method.
3. Review and understand the new JS file, `articleView.js`
4. Complete the methods for handling filter events when selecting an option from a drop down menu via Authors and Categories.
5. Complete the method for handling tab-based event navigation on the page.
6. Add an event to reveal a complete article if the user would like to see more than just a two-line teaser.


# Portfolio assignment for class 3

Continue building and improving your portfolio site. Here's how you can leverage events:

Adapt these stories as necessary to fit how you want to build your portfolio.

## User Stories: MVP
  1. As the creator, I want the Home and About nav links to act as tabs, so my story is revealed FAST.
    - This means your links do NOT navigate to a new page.
    - Instead, your "single page app" shows only the section related to the navigation tab that is selected.
    - You can use 'data-' attributes to associate a content section with a particular tab
    - Then use jQuery so when the tab is clicked, you hide all the sections, then reveal the associated section only.
  1. As a reader, I want the portfolio to use a nice color scheme, so that it stands out visually.

## Technical Requirements and Grading Rubric
  - Use event delegation whenever appropriate.
  - Add click handlers to at leat one nav section.
  - Do as much work as you can with advanced selectors, rather than littering your markup with classes and ids.
  - When classes and IDs are needed, pick semantic names. There is to be no `$('#content .content')` nonsense!


# Questions?





  






