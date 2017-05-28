# Announcements - Sun May 28th

## Code 301: Deployments - Lecture (Topic 13)

### Get your reviews in

### Assignments for this Week

* May 29th (Mon): Memorial Day - No School
*                 Portfolio 11 Due

* Start thinking about projects !

**Rules:**

Your team must adhere to the following requirements.

* There can be no more than 4 people per team.
* Each person must make meaningful contributions in HTML, CSS, and JavaScript.
* Your web site must have at least 3 interlinked pages and clear navigation.
* Your web site must have at least 2 pages that accept and process user input.
* Your web site's state must persist between page reloads.
* Your web site must be deployed live on the Internet.

**Process:**

Here's the process that we'll be using for project week.

1. On the first day of project week, your team must submit a proposal to an instructor.
2. During project week, your team must work on-campus so we can help whenever your team is stuck.
3. On the last day of project week, your team must present your project in front of the class.




# Review

## Learning Objectives

Deployment:

* Be able to push a dev site to production, so the world can see it. 
* Understand the difference between a static page and a dynamically generated app page

---

## Resources

Set up Heroku account

---

# Lecture

* [Heroku](./slides/Code301Class13.pdf)
* [deployments](./slides/Code301_Day13.pdf)


* Dev vs Production environment
* What we look for in production env
* What to do with the GitHub token?
* How to deploy to Heroku (step by step)

Deployment-workshop directory: 

* Walk through an application deployment

Walk thru this [tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction):

### Add a new application

1. Create Heroku Login
2. Download and install toolbelt
3. Login in via command line `heroku login`
4. Clone `git clone https://github.com/heroku/node-js-getting-started.git`
5. `cd node-js-getting-started`
6. Create the hroku app `heroku create kbrumer-cf-001`. Note both the URL and the git repo:
	* `https://kbrumer-cf-001.herokuapp.com/`
	* `https://git.heroku.com/kbrumer-cf-001.git`
7. Deploy `git push heroku master`
8. Check dynamos `heroku ps:scale web=1`
9. Tail the logs `heroku logs --tail`. `Ctrl+C` to stop.
10. Check your `Procfile`. [source](https://devcenter.heroku.com/articles/procfile)
11. Scale the app `heroku ps`
12. Undertand the role of `package.json`. This is not only just for Heroku, but for all `node` apps.
13. Run it locally `heroku local web`. This may need an `npm install`
14. Push local changes 
15. Set a config variable `heroku config:set TIMES=2`


### Add an existing application
1. `cd /Work/github.com/kbrumer` 
2. `mkdir heroku-demo`
3. `cd heroku-demo`
4. `git init`
5. `git add .`
6. `git commit -a "First Commit."`
7. Create a new repo in GitHub `https://github.com/kbrumer/heroku-demo-completed`
8. `git remote add origin git@github.com:kbrumer/heroku-demo-completed.git`
9. `git push -u origin master`
10. `heroku create kbrumer-cf-003`. Note the url and git repo
	* `https://kbrumer-cf-003.herokuapp.com/`
	* `https://git.heroku.com/kbrumer-cf-003.git`
11. `git remote -v`
12. `git push heroku master`
13. `heroku open`
14. `Procfile` anyone? 



# Pair Programming

### Some prerequisite knowledge

* Github link for tonight's lab:
	* [https://github.com/cfpdx-301night-spring-2017/13-deployment](https://github.com/cfpdx-301night-spring-2017/13-deployment) 

---

# Pair Assignment for Class 13 - Deployment

---

### Aside

We want to deploy our app out to the world. BUT, we don't want to expose our Github token. AND we can only configure the Github token on the server if we want to hide it. So we need to create a `proxy` to accept requests from the client, add the appropriate HEADER info, and send to Github.

Client -> Proxy / Server -> Github

The is an example of `middleware` - the proxy sits between the Client and the requests to Github, adding the necessary information which is only configured on the server, NOT sent to the client and NOT kept in source code.

---

Ready to share what you've made with the world? Yes!

Then you need to push your code to a web server accessible to the whole Internet. This is your "production environment".

We'll be using Heroku as our production server. Heroku is a "Platform as a Service": your code is plugged in to pre-configured servers, which are started up for the world to access.

## Heroku Deployment

1. Follow your standard Fork & Clone process to set up today's lab
2. Once you've set up your standard workflow, you will need to create a new Heroku app within your repository
3. Don't forget to set your Github Token as an environment variable in the Heroku app
4. Deploy to your new instance!
5. Let your brilliance shine unto the world!


## User Stories: MVP
 1. As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.
  - Create a new Heroku app for deployment.
 1. As a developer, I want my app to run in a development environment that matches production, so that I can reduce bugs related to infrastructure surprises.
  - Start your app with `node server.js`
  - TODO: Refactor your AJAX request to proxy your GitHub API calls through the server
 1. As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.
  - Set the proper env vars on your local system.

## User Stories: Stretch Goals
 1. As a site owner, I want [blog.my-own-domain-name.io] hooked up to my Heroku app, so that I don't have to explain to people how to spell "myblog.herokuapp.com" over the phone.

# Portfolio Assignment

Ready to share your portfolio with the world? Yes! Your mom will be so proud.

Use what you practiced in pairs to deploy your portfolio site. The user stories are basically the same.

## User Stories: MVP
 1. As a developer, I want my portfolio to run in a development environment that closely matches production, so that I can reduce bugs related to infrastructure surprises.
  - You'll need to create a new Heroku app, and link it to your portfolio
 1. As a site owner, I want my site running on a robust hosting platform, so that I don't have to hire a sysadmin.
  - You'll need to get your app deployed and running on Heroku.
  - Heroku will need to know what kind of app you are running, and how to run it.
  - You can create a new package.json file, or copy over `package.json` and `server.js` from the blog project.
 1. As a developer, I want my secret tokens accessed only through environment variables, so that I can keep them secure.
  - You'll need to configure an environment variable on your production server, so the server.js file can access your token when it's running.


## User Stories: Stretch Goals
 1. As a site owner, I want [www.my-own-domain-name.io] hooked up to my Heroku app, so that I don't have to explain to people how to spell "my-site-name.herokuapp.com" over the phone.
 - As a site owner, I want my root domain to redirect to the `www` subdomain, so people can type in either one to load my app.

# Questions?












