# GCH-WebDevJavaScript
This is a repository for a GitHub Copilot for Business Hackathon with web dev technologies (e.g. HTML, CSS, JavaScript, React)

## What are we building?
We are building a website for trainers that have some components that can be used for workshops. These include:
* a timer for a coffee / lunch break
* a page where the names of participients can be pasted into a textbox and upon click one participient is selected (e.g. for introducing each other)

 Additionally the page should have
* a header with a headline
* a footer

## Prepare this Sample
Before we get started, please create a react application locally on your machine via
```
npm create vite@latest
```
select React and JavaScript and give the project a meaningful name (e.g. YOURCOMPANYNAMETrainerTools).

On the command prompt start VS Code via
```
code .
```

Then delete the body contents in App.jsx, so we can start fresh.
Then add a folder "components"

## Scenario 0: Start with Copilot
Task: Get yourself familiar with Copilot inline code and Copilot chat. Try out Slash commands 
```
/help
```
and ask copilot some questions about code / coding.

## Scenario 1: Create a header for the page
Task: Use Copilot chat to create a react header component for your application. The header should have a light grey background color and have the name of the application written in Bold.
Hint: If you don't know how to add this component to your project, ask Copilot. Try out the header, see if it meets your prompt and task requirements.

## Scenario 2: Create a footer for the page
Task: Use Copilot chat to create a react footer component for your application. The footer should have a light grey background color and have the following text in a small font "Made with ❤️ on a GitHub Copilot hackathon."

## Scenario 3: Build the first functional component
Here we create the first real functional component. Please read through the whole scenario before you enter your prompt.

Task: Create the coffee timer component. This component should have buttons with default time values (e.g. 5 min, 10 min, etc.), have a start button. If you click on the start button the timer with the selected time range should start to count down. When the timer is up there should be an alert.

Idea: Read through the task and create a prompt for this one. After you have created the prompt, read through the task again and see if you have missed something (from your developer experience). If you think you have not missed anything, ask Copilot to create the component for you. Then add this component to App.jsx and test it. Is there anything missing? 
If you have missed a functionality, ask copilot to create that missing functionality for you.

Additionally: Ask copilot for CSS styling.




## Sample prompts


