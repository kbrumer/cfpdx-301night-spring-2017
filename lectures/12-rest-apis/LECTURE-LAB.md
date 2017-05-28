# Announcements - Tue May 23th

## Code 301: REST and APIs - Lecture (Topic 12)

### Get your reviews in

### Assignments for this Week




* May 22nd (Mon): Lecture 12: REST. I am in.
*                 No Portfolio 9.

* May 23rd (Tue): Lab 12: REST. I am in.
*                  Read REST links.

* May 24th (Wed): Normal co-working day.
* May 25th (Thu): Co-working day. I am out.
* May 26th (Fri): Portfolio 10 Due

* May 29th (Mon): Memorial Day - No School
*                 Portfolio 11 Due

# Review

## Learning Objectives

- Understand and apply the concepts of REST and how to get data from Github.



---

## Resources

curl -H "Authorization: token 06352f47b2ac30c238d168d7c76fd5ecfb341b03" "https://api.github.com/user/repos?type=owner"

Have class follow along:

1. Go to Github account

https://github.com/kbrumer

2. Settings

3. Personal Access Tokens

4. Generate new token (READ access)

5. Test it !!!

```
# no token
curl -v https://api.github.com/user/repos

# good token
curl -v -H "Authorization: token 02024ed483339c2a6fda104736a0b0f49e0a5b46" "https://api.github.com/user/repos?type=owner"

# bad token
curl -v -H "Authorization: token 02024ed483339c2a6fda104736a0b0f49e0a5b47" https://api.github.com/user/repos

```

---

# Lecture

* [slides](./slides/Code 301 - Class 12.pdf)


# Demos


# Pair Programming

### Some prerequisite knowledge

* Github link for tonight's lab:
  * [https://github.com/cfpdx-301night-spring-2017/12-REST-and-APIs](https://github.com/cfpdx-301night-spring-2017/12-REST-and-APIs)

---

# Pair Assignment for Class 12 - REST and APIs

Now that we understand how applications can handle different URLs, we can write code that communicates with other applications.

## User Stories: MVP
 1. As a developer, I want to treat my GitHub repositories as a resource (with full MVC components), so that I can manage them within my blog.
  - You already have an `aboutController.js`,
  - so we need to add a `repo.js` model file,
  - and a `repoView.js` presentation layer.
  - GitHub API credentials should be stored in a local file (`githubToken.js`), but not committed to GitHub. Use `.gitignore` to prevent the file from being tracked (get help in lab if you don't know how to use `.gitignore`).
 - As the site owner, I want to highlight certain repos on my `/about` page so that everyone can see the great projects I am working on.
  - Retrieve and manipulate repo info in your model file.
  - You can choose exactly what API end point to use.
  - Craft an API query to return repos that you want to highlight.
  - Create a template in your view file to display these repos. You can build your template with either plan jQuery (string concatenation), or with Handlebars.

## User Stories: Stretch goals
 1. As the site owner, I want my lists of GitHub activity well designed, so visitors like looking at my page.
 1. As the site owner, I also want to show off other recent GitHub activity, so that everyone knows how active I am on GitHub.
  - Get creative with the data available to you via the GitHub API!
  - Want to create links to your gists?
  - Maybe highlight your GitHub followers, or whom you follow?


# Portfolio Assignment

In our blog, we used RESTful routes to interact with the Github API.  It's time to take this a step further and integrate this functionality into your portfolio project.

To get started, you will need to create a controller that includes a call to the Github API. This call should grab data about your individual account, and render portions of the returned content to the page, **once the data has been loaded**.  This is fairly open ended, so use whatever data you deem fit and be sure to separate your concerns.

# Questions?












