# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency ReactJS Fundamentals and your command of the concepts and techniques in the Function Components and Class Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [X] What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React is a User Interface component library.  It helps build UI components for a web page and apps.  It allows UI code to be scalable, reusable, and fun to write.   A good example is creating a NewsFeed like in Facebook. React allows a programmer to easily break out the feed and the cards into components.

- [ ] What does it mean to _think_ in react?

    It means to plan out apps as you build them by breaking them down into smaller pieces.  React forces a programmer to mock up what an app should look like.  From there, you can break the UI into a component hierarchy, i.e. modular pieces that allow for scale and reuse.  It’s DRY programming in a nut-shell.  It makes apps easier to work on and maintain.

- [ ] Describe state.

    State is an object that determines how a component renders and behaves.  It’s what allows for dynamic and interactive components.

- [ ] Describe props.

    Props is an abstract vehicle used to pass information from one component to another.

- [ ] What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are anything that affects something outside the scope of a function being executed.  In essence, they are externalities, or intended or unintended consequences of running functions.  A good example is fetching data from an API, timers, logging, and/or manipulating the DOM.  Side effects are synced by using dependency arrays and leaving them blank.  This tells the side effects when it should be synced and prevents infinite loops.

## Project Set Up

Follow these steps to set up and work on your project:

- [X] Create a forked copy of this project.
- [X] Add PM as collaborator on Github.
- [X] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [X] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [X] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.
- [X] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [X] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [X] Implement the project on this Branch, **committing progress & changes often.**
- [X] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [X] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [X] Add your Project Manager as a Reviewer on the Pull-request.
- [X] PM then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [X] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen. 
- [X] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [X] Set the data you fetch to state.
- [X] Map over the list and render a component for each character on the page.
- [X] You must display at least one element for each star wars character in the data set.
- [ ] The elements must be styled with either SemanticUI or styled-components - don't rely on browser default styles.

#### Required best practices:

- [X] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [X] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [X] Consistent quotation usage.
- [X] Spell-check.
- [X] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems

- [ ] Add at least one test using a testing tool:
  - [react-testing-library](https://github.com/testing-library/react-testing-library#basic-example)
  - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

- [ ] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
