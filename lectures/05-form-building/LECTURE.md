# Announcements - Sun Apr 30th

## Code 301: Form Building - Lecture/Lab (6th Class)

### Get your reviews in

### Assignments for this Week

* May 1st:  Portfolio 03 for **jquery and the events** due
* May 2nd:  Read 367-408
* May 2nd:  Quiz II due
* May 4th:  Read 530-543


# Review

### jQuery events
```
articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      /* DONE: If the select box changes to an option that has a value, we should:
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was aselected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

```

```
  <script id="template" type="text/x-handlebars-template">
    <!-- Review the syntax -->
    <section>
      <p>{{ title }}</p>
      <ul>
        <li>{{ name }}</li>
        <li>{{ age }}</li>
        <li>{{{ favorite }}}</li>
      </ul>
    </section>
  </script>

...

  <script type="text/javascript">
    var myobj = {
      name: 'Scott',
      title: 'Beard.js',
      age: 33,
      favorite: '<h1>Jingle-beard</h1>',
    };

    // create a data object
    // Grab the template
    // Compile the template
    // Append the results to the DOM

    var template = $('#template').html();
    var fn1 = Handlebars.compile(template);
    var newDOM1 = fn1(myobj);
    $('#results').append(newDOM1);
  </script>
```

Template literals (ES6 syntax)

```
$('#author-filter').change(function(){
	var value = $(this).val();
	$(`input[data-atribute="${value}"]`).hide();
});
```

Ugh
```
	$(`input[data-atribute="${$(this).val()}"]`).hide();
```

## Learning Objectives
<!-- the learning objectives from the corresponding class number -->
* Primarily this class is a recap of what we have learned, with some time to focus on your portfolio and catch up on any topics which are still confusing to you
* The pair assignment will be done in class as a demo. You will *NOT* need to turn it in. Instead, spend time peer reviewing with others and working on your protfolio
* Recap the primary concepts discussed throughout the week.
    * Ask the students "What have you learned so far?"
    * Ask "What has been challenging?"
    * Ask "What has been helpful?"
* Work through a form-based inputs to build out a JSON string export of a new blog article.
* Implement 3rd party library integration for dynamic code highlighting and markdown creation.

---

## Resources  
<!-- a list of links if any are necessary for the assignment-->
[HighlightJS Docs](https://highlightjs.org/)
[MarkedJS Docs](https://github.com/chjj/marked)

---


# Demos

In class pair programming

# Pair Programming

### Some prerequisite knowledge

* Github link for tonight's lab:
	* [https://github.com/cfpdx-301night-spring-2017/05-form-building-workshop](https://github.com/cfpdx-301night-spring-2017/05-form-building-workshop) 
		

## Feature Tasks  
<!-- a list or description of the feature tasks you want the students to implement -->
1. We have two new libraries that we'll be working with today; highlight.js and marked.js
1. Focusing on the functionality of adding a new article through a form submission, complete the TODOs in articleView.js.
  * The body field of your form should be able to accept formatting via Markdown syntax, including code blocks and snippets.
1. *Reminder: use template literals rather than string concatenation where applicable*

## Stretch Goals

- We will not do anything with the tab navigation on **new.html** in the workshop; if you want, get this navigation working as either show/hide like we did on the **index.html** page, or have it work with an anchor tag that will scroll down to the preview when that is selected.
- Rather than simply making copy-paste JSON readily available, have the new articles created with the form populate into the rawData array when the "Publish" box is clicked. Think carefully about how to make this user-friendly; it might require rethinking or refactoring how the "Publish" box works, or perhaps adding another button.


# Portfolio Assignment for Class 5 - Form Building

Work in pairs to improve your portfolio.

No need to add each other as collaborators, just share a link to your portfolio repo with your partner.

Start with code review. Spend the first 30 minutes looking over your partner's portfolio code. Look for opportunities to improve the code base according to the best practices and concepts that we've covered in class so far.

Remember, good code review:
 - Focuses on the code, not the author
 - Asks "Why is it this way?" rather than criticizing
 - Will nitpick the details
 - Seeks to make the code more understandable
 - Embraces and congratulates best practices
 - Respects the work that went into the current product

Create descriptive issues for the most important issues that should be addressed. In the issue, describe what you see, ask clarifying questions as needed, and link to the related line of code in the repo.

Once you both have a few issues logged, start writing code together.

The Driver will work on the Navigator's codebase. The Navigator can talk them through what is where, and how changes should be made, and the Driver can implement them.

Switch after you've worked through a few issues. Switch back again (and again) if time allows.


# Questions?





  






