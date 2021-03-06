![CF](https://i.imgur.com/7v5ASc8.png)  Class 02: jQuery and the DOM
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->
Students typically have little to no jQuery experience coming into the 301 course, and this is by design. In Code 201, students are taught to manage DOM behaviors through vanilla JavaScript methods on the **document** object. Please be sure to navigate through the jQuery [docs](https://api.jquery.com/) at least once, showing how a student should problem solve any task as it relates to the jQuery API. Unfortunately, the docs can be a common source of confusion, so please be sure to clear up how one should approach the examples they provide.

---

## Learning Objectives
<!--
ABCD:
  Audience: Program participants
  Behavior: Expected learning/behavior changes/results
  Condition:
    Circumstances that lead to change/result
    When change/result are expected to occur
  Degree: How much change occurs (%) for how many participants (#)
-->
* Understand why the jQuery library is useful and how to include it (local vs CDN).
* What is a dependency?
* Perform DOM manipulations using `append`, `remove`, `clone`, `data`, `html`, `text`.
* Traverse the DOM tree, with `parents`, `children`, `find`.
* Understand the use of event delegation for dynamic element selection.
* Differentiate between certain methods & the process of chaining.
* Understand proper `<script>` loading order in HTML.

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->
* Javascript & jQuery: pages 293-325
  * (Context: 293-301; Essential: 310-325; Reference: 302-309)

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->
* [Agile & MVC Slides](https://www.icloud.com/keynote/000Uuh6ukOlH8Z_Mo53wp8fmg#Code_301_-_Class_1_Slides_Agile_%26_MVC)
* [jQuery & DOM Slides](https://www.icloud.com/keynote/000lkj_JepVjXS9izEO8qq0Dg#Code_301_-_Class_1_Dom_-_jQuery)

## Lecture <Topic>
<!-- List any high level topics, as well as any sub-topic, and associated details or notes that instructors may require to deliver this content -->
### Topic 1 - Agile and MVC
* Overview
  * Agile Web Development
    34. Compared with the ‘Waterfall’ process
    35. Importance of stand-ups and pair programming (driver & navigator roles) in relation to this course
    36. Daily Sprints
    37. ‘MVP’ & ‘Stretch’ Goals
    38. User (or project stakeholder) stories & Developer stories
    39. Iterative Development
    40. Agile buzzwords (backlog, sprint demos, retrospective, etc)
  * MVC
    41. Why do developers care about separating these concerns?
    42. What are some other architectural design patterns?
    43. What does each MVC layer do?
    44. How does each MVC layer tie together in a modern web application?

### Topic 2 - DOM & jQuery / Assignment Prep
* Overview
  * Including jQuery from CDN/locally sourced
  * Vanilla DOM selection & manipulation review
  * Basic jQuery syntax
  * Waiting for DOM load using `$(document).ready()`;
  * Basic CSS selector review - how this works with jQuery selection
    45. Each jQuery selection attempts to return a set of matched elements, and if it cannot, will return an empty array-like object.
  * Chaining methods
    46. Why are we able to chain in jQuery?
      * Each method returns a jQuery object
  * Understanding the "getter" and “setter” differences between single and double parameter jQuery method calls
    47. Ex:`$(‘.el’).data(‘some-data-attribute’)`- gets the data
    48. Ex:`$(‘.el’).data(‘some-data-attribute’, ‘some val’)`- sets the data
  * Basic project setup review
    49. Inclusion of reset stylesheet
    50. Basic HTML semantics
    51. Project structure

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab-02: jQuery & DOM](../../labs/02-jquery/README.md)
