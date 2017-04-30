# Announcements - Thu Apr 27th

## Code 301: Handlebars - Lab (6th Class)

### Get your reviews in

### Assignments for this Week

* Read JS & jQ: pp 326-366
* Apr 27th: Quiz 1 Due
* Apr 28th: Portfolio 02 for **jquery and the DOM** due
* May 1st:  Portfolio 03 for **jquery and the events** due


# Review

### Handlebars
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

# Learning Objectives
<!-- the learning objectives from the corresponding class number -->

* What is typography and why is it important?
* Templates have some advantages over direct DOM manipulation. Leverage those strengths in the blog, and in your portfolio application!
* As we get more sophisticated, this is a good time to ensure our CSS styles are well organized. We'll follow the SMACSS system for keeping everything in it's proper place.
* Identify different approaches to reusable HTML templates
* Effectively use templates to present user-entered (or server-provided) data (methods on the Handlebars object)
* Distinguish between the different Handlebars expression types (`{{}}` vs `{{{}}}`)
* Modify and style typographic components (serif, san-serif fonts, font-size, font-family, color, font-weight, etc)
* Understand the application and use of string literals, interpolation, and introduction to ES2015 syntax


## Useful Resources
 - [Handlebars Docs](http://handlebarsjs.com/)
 - [Template Literals MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
 - [Google Fonts](www.google.com/fonts)
 - [Treehouse: Web Typography Course](teamtreehouse.com/library/web-typography)
 - [Practical Topography Site](practicaltypography.com/)
 - [A More Modern Scale for Web Typography via typecast.com](typecast.com/blog/a-more-modern-scale-for-web-typography)
 - [Type Scale Tool via type-scale.com](type-scale.com)


# Lecture

* [lecture 1](./slides/301-04-templates.pdf)
* [lecture 2](./slides/Code 301- Typography.pdf)



# Demos

```


```


# Pair Programming

### Some prerequisite knowledge

* Github link for tonight's lab:
	* [https://github.com/cfpdx-301night-spring-2017/04-templates](https://github.com/cfpdx-301night-spring-2017/04-templates)


## Feature Tasks
1. Include the Handlebars.js file in your project.
1. Convert your existing template html code into a Handlebars template.
1. Update your article `.toHtml()` method to use Handlebars.
1. You may find it useful to attach some additional properties to your article object, before you hand it off to the template.
1. Ensure the proper use of template literals, when applicable. *No more string concatenation!*

#### Stretch Goals
1. Look at all that duplicated markup inside your `#filter` list items! Looks like a good opportunity to use a template. Make a small template for each filter, and re-render the list once you have data to populate it with.


# Portfolio Assignment for Class 4 - Templates

Use what you learned in the class 4 lecture to improve the structure of your Portfolio app codebase.

## User Stories: MVP
1. As a developer, I want to use Handlebars for my project template, so that I can include new projects more easily.
- As a developer, I want my CSS styles to follow SMACSS organization, so that I know where to look for creating and editing styles.

## User Stories: Stretch Goal
1. As a visitor, I want the site to use great typography, so that I have an enjoyable reading experience.
  - Set up your h1, h2, h3 elements according to a [type scale](http://type-scale.com/)(another good [type scale article](http://typecast.com/blog/a-more-modern-scale-for-web-typography)).
  - Include some good fonts, that work well together.

## Technical Requirements and Grading Rubric
 - Add Handlebars to your blogging system.
 - Organize your CSS code according to SMACSS, with at least a file for base, layout, and modules.

## Helpful Resources
 - Handlebars: http://handlebarsjs.com
 - SMACSS: https://smacss.com/




# Questions?












