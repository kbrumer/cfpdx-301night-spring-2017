![CF](https://i.imgur.com/7v5ASc8.png)  Class 01: Mobile-First Design & SMACSS
=======
## Overview
<!-- Provide a general overview of the daily concepts and processes that will be covered in lectures and labs -->
This lesson should focus on the fundamentals of mobile first design and development and should include the discussion of CSS modularity (using SMACSS), layout development, media queries for *desktop* styling, and overall design best practices.  It may help to include elements of these topics by demonstrating their components, either in the browser or in an online code editor tool, such as codepen.io.

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
* What is Mobile First design
* What is Responsive Web Design vs. Adaptive Web Design - Discuss the difference between the two
* Formula for flexible layouts
  * Percentage-based Media
  * Media Queries: include logical operators, and media types
  * Fluid Layout
* Viewport and initial-scale meta tag
* Demo via live-server (allow students to connect to your IP via local network). Comment out viewport tag, show students what happens when the device-width is unset vs set.
  * Also provide this as a way for students to test their own portfolio on mobile by starting live-server and connecting to their own IP locally.
* Review embedded media in RWD; challenges, etc.
* Understanding SMACSS and benefits
* Breakdown common SMACSS stylesheets and usage
* Introduction to icomoon icon fonts, how to setup, and usage
* Introduction to students about the use of a vendor directory, as some may not be familiar with the  regular use of third-party code.
* Understand the basics of the :before and :after pseudo elements - these will be used to display icons on the front end.

---

## Readings
<!-- List of readings required for this content; readings being completed by the start of this lecture -->
* [Shay Howe’s intro to RWD](http://learn.shayhowe.com/advanced-html-css/responsive-web-design/) (Essential)
* [Dale Sande's Intro to SMACSS](http://www.anotheruiguy.com/ux-design-dev/_book/smacss/README.html) (Essential)
* [SMACSS Official Documentation](https://smacss.com/) (Reference)
* In-Depth (optional) [Dale Sande’s intro](http://www.anotheruiguy.com/ux-design-dev/_book/rwd/README.html) to RWD (Reference)

---

## Resources / Slides
<!-- Provide any links to external slides or other resources that will support the delivery of content. These can also be student-facing docs! -->
* CSS Review - Use this to help facilitate your CSS teachings: [http://codepen.io/briannations/pen/bperqP](http://codepen.io/briannations/pen/bperqP)

## Lecture
<!-- List any high level topics, as well as any sub-topic, and associated details or notes that instructors may require to deliver this content -->
### Topic 1 - KICKOFF
* Overview
  * Welcome to Code 301
    1. Presented by campus manager
    2. Includes details about code of conduct, facilities, stacked learning overview
  * Student Introductions
    3. Keep this time-boxed to 15 sec per student
    4. What is your name? (and how can we remember it?)
    5. Why are you here? (What is the why behind the why?)
    6. Fun fact?
  * TA Introductions
    7. What is your name? (and how can we remember it?)
    8. Why are you here? (What is the why behind the why?)
    9. Fun fact?
  * Instructor & Assistant Instructor Introductions
    10. Previous experience.
    11. Technologies you are passionate about.
    12. Random fun facts.

### Topic 2 - Responsive Web Design
* Overview
  * RWD
    13. Responsive web design
    14. Discuss flexible vs. adaptive layouts
    15. Discuss importance of responsive development
      * Larger coverage area
      * Multiple device support
    16. Discuss Chrome device emulation (and other emulation options - ie: x-code device simulator)
  * Viewports
    17. Discuss the meta viewport tag and it’s width and scale options
  * Flexible Layouts
    18. Discuss modern 960px grid systems
    19. Discuss common responsive frameworks (Bootstrap, Foundation)
    20. Discuss width based resizing and scalability of elements
  * Media Queries
    21. Discuss min-width media query usage for mobile first design and development
    22. High level overview of other media queries and options
  * Flexible Media
    23. Discuss max-width based creation of scalable images
  * CSS Fundamentals
    24. Discuss display types
      * Block vs Inline vs Inline-block
    25. Discuss the box model
      * Overview (or whiteboard) the differences between margin, padding, content, border
    26. Discuss positioning
      * Static, relative, absolute, fixed, inherit
      * Demonstrate the creation of an overlay by using a relative parent for the container and an absolutely positioned child for the overlay
  * SMACSS
    27. Discuss the importance of modular CSS
    28. Discuss base, layout, module, state, and theme concepts
  * Implementation and use of an icon font
    29. [icomoon.io](https://icomoon.io/)
  * Design basics and setting up a simple color palate
    30. [Adobe Color CC](https://color.adobe.com/)
      * Other color combination tools are fine to show as well.
* Demo - What & Why
  * [Example viewport demo](https://docs.google.com/a/codefellows.com/document/d/10w3DQNrwfi-JbQoiI8FaOs8Qb-BN4-hvUgiznbIpQkQ/edit?usp=sharing)
    31. Understanding how SMACSS breaks down a site’s CSS into categories.
    32. Understanding foundational CSS display types and positioning properties
    33. Creation of modular CSS components by styling the wrapper’s for each article instance (on the front end)

### Topic 3 - Git Flow
* Mission: This section will guide students through the process of working within the 301 class repo each day, specifically relating to their pair programming time-block of lab.
* Talk about "what is a remote even?"
  * "What remotes do we have?" (origin is default)
  * Review:
    * What does git pull upstream master do?
    * Example git flow for pair assignments are located further down in the Setup Your Repo section.

---

## Lab
<!-- Provide a link to the daily lab README in the Labs directory, and review this document as part of the lecture -->
[Lab-01 Mobile First Design](../../labs/01-mobile/README.md)
