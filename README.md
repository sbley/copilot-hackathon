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

After than run these 3 prompts
```
cd YOURCOMPANYNAMETrainerTools
npm install
npm rum dev
```

Open a browser on the link that is in the terminal.

On the command prompt start VS Code via
```
code .
```

Then delete the body contents in App.jsx, so we can start fresh. The App.jsx should look like this now:
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App
```
Then add a folder "components" in the src folder.

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

After you have created the component, add this componnt to the App.jsx file

Additionally: Ask copilot for CSS styling.

## Scenario 4: Create the second functional component.
Here we create the second functional component. Please read through the whole scenario before you enter your prompt.

Task: create a component with a textare field, where you paste in the names of people (seperated by comma or semicolon). The component should have a button called "select next participient". Upon click, a name should be selected and removed from the text box. That name should appear in Bold letters underneath the button.

After you have created the component, add this component to the App.jsx file.

## Bonus Scenario: Add to source control and deploy to Azure and
You now have a simple react app, that you can deploy to Azure. 

Steps needed:
 - Create a GitHub repo and add your code to the repository.

Then you could do one of the following:
 - Create an Azure WebApp and deploy to (via GitHub)
 - Create an Azure Static Web App and deploy to it (via GitHub)

# SPOILER ALERT: Here are some sample prompts if you get stuck!

## Sample prompts (currently untested)

### Scenario 0
Say Hello
```
Hello Copilot. Please answer in english.
```

Try these commands
```
/help
/fix
@Workspace
#file
/explain
```

### Scenario 1
```
Please create a header component in React for me. The header should be on top of the page. It should have the name of this web app in bold letters. The Background Color should be light grey, go from left to right with no margin. The color of the text should be black. The font size should be bigger than normal text.
```
### Scenario 2
```
Please create a footer component in React for me. The footer should stick to the bottom of the page. It should have the sentences "Made with ❤️ on a GitHub Copilot hackathon.". The Background Color should be light grey, go from left to right with no margin. The color of the text should be black. The font size should be small.
```
### Scenario 3
```
I am going to build a website for trainers that can be used during IT Workshops. This website should have a couple of smaller tools that you can pull up in between the sessions.

The website is being built in React with JavaScript.

The first component that I want to build is a timer for a coffee break. Please help me building that timer. Here are the features:
 - Customizable duration for a break
 - Some buttons for a default break duration (5 min, 10 min, 15 min, 45 min, 1 hour)
 - A Button "Timer Start"
 - Upon clicking "Timer Start" the timer should start and count down.
 - When the timer is up an alarm should go off.

Can you build that component for me?
```
See what is missing?

```
Please toggle the button to "Timer Stop" after the timer has started. Also change the javascript code to stop the timer once the "timer Stop" Button has been pushed.
```

### Scenario 4
```
I am going to build a website for trainers that can be used during IT Workshops. This website should have a couple of smaller tools that you can pull up in between the sessions.

The website is being built in React with JavaScript.

The next component that I want to build should do the following: 
 - There is a large textarea where the trainer can put in the names of the participients, seperated by comma or semicolon.
 - There is a button underneath the textarea with the text "Select next participient"
 - Upon clicking this button one participient gets randomly selected. Their name is shown in bold underneath the button and the name is removed from the text area.
 
Can you build that component for me?
```


