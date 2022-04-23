# GroupVacationPlanner


  <p align="center">
    This is a Group Vacation Planner, built to allow a group to effectively plan a vacation together.
    <br />
    <a href="https://github.com/PlusUltra404/GroupVacationPlanner"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/PlusUltra404/GroupVacationPlanner">View Demo</a>
    ·
    <a href="https://github.com/PlusUltra404/GroupVacationPlanner/issues">Report Bug</a>
    ·
    <a href="https://github.com/PlusUltra404/GroupVacationPlanner/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#scrum-master">Scrum Master</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is a vacation planner that allows for groups to develop a plan together, featuring live weather updates, flight and hotel data, comprehensive voting, and a login funciton. 

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* React.js
* Docker
* Kayak API
* Others

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites


### Installation


<p align="right">(<a href="#top">back to top</a>)</p>
<b>How to run a project from GitHub locally</b> 

In order to properly run and test the code, you'll need to move the files in the repository to your local machine. You can do this by cloning the repository. First go ahead and fork the repository. This will be your own project. You should find the fork command in the top right of your screen.  Go ahead and click the code button to clone the repo. If you have Github Desktop installed, you can click Open with Github Desktop. This allows you to clone repos to your local machine with minimal hassle. If you do not have Github desktop head to a terminal and issue the command: 
<br />
![alt text](https://github.com/PlusUltra404/GroupVacationPlanner/blob/main/Wireframes/GITCOMMAND.jpg)
<br />


with the copied HTTPS URL after git clone. You have now cloned the repo to your local Machine 

 

 

 

<b>Install Dependencies</b> 

In order to run your project, you need to install the dependencies located in the package.json folder. Navigate to the frontend folder in the project and run the command: 
<br />
![alt text](https://github.com/PlusUltra404/GroupVacationPlanner/blob/main/Wireframes/NPMINSTALL.jpg)
<br />


This will install all necessary dependencies. If an error occurs use the command "npm install --legacy-peer-deps" instead.  

<b>Update configurations (optional)</b> 

You Shouldn't need to update any folders. There are environmental configurations inside the env.dev folder that may need to be updated for your machine.  

You will need to create your own virtual environment to run the flask application.  

<b>Windows</b> 

Go to your backend/src folder in the project. Make sure you have Python3 installed, and pip installed on your device. run the commands:  

 > pip install virtualenv  

 > virtualenv "name of your virtual environment" 

> “name_of_environment”\Scripts\activate 

> pip install -r requirements.txt 

> deactivate 

This will install a virtual environment into your code, install the necessary dependencies, then close the virtual environment. Note, these commands must be run in the folder that you made the virtual environment in.  

<b>Linux</b> 

Go to your backend/src folder in the project. Make sure you have Python3 installed, and pip installed on your device. run the commands:  

$ sudo apt-get install python-pip 

$ pip install virtualenv 

$ virtualenv virtualenv_name$ virtualenv virtualenv_name 

$ source virtualenv_name/bin/activate 

$ pip3 install -r requirements.txt 

$ deactivate 

<b>Start any dependent applications</b> 

For this application the database is being run through a docker container. In order to run the database, you must download Docker on your local machine and run it. You may also find it helpful to use a database viewer of your choice. We recommend using TablePlus a free database viewing and manipulation tool.  

<b>Start development server</b> 

To start the flask server, go to the location you made the virtual environment and activate it. After type the command: flask run.  

To start the database, go to the root folder of the project and run the command: docker-compose up in the terminal 

Finally start the react frontend by running the command npm start in your frontend folder. 

 

 

 


<!-- USAGE EXAMPLES -->
## Usage


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Weather API implemented
- [ ] Voting feature implemented
    - [X ] Login feature implemented
- [X ] Local hotel price API implemented
    - [X ] Flight cost API implemented

See the [open issues](https://github.com/PlusUltra404/GroupVacationPlanner/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- WIREFRAMES -->
## Wireframes
**SignUp**
<br />
![alt text](https://github.com/PlusUltra404/GroupVacationPlanner/blob/main/Wireframes/signup.png?raw=true)
<br />
**Login**
<br />
![alt text](https://github.com/PlusUltra404/GroupVacationPlanner/blob/main/Wireframes/login.png?raw=true)
<br />
**HomePage**
<br />
![alt text](https://github.com/PlusUltra404/GroupVacationPlanner/blob/main/Wireframes/HomePage.png?raw=true)
<br />
**Group Messaging**
<br />
![alt text](https://github.com/PlusUltra404/GroupVacationPlanner/blob/main/Wireframes/GroupMessagingWireframe.png?raw=true)
<br />
**Polling Feature**
<br />
![poll wireframe](https://github.com/PlusUltra404/GroupVacationPlanner/blob/main/Wireframes/Wireframe1-poll.png?raw=true)
<br />




<!-- LICENSE -->
## License

Distributed under the Apache License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Hunter Stone - hunter.stone1002@gmail.com
<br />
Adrian Searles - asearle@g.clemson.edu
<br />
Chaitanya Mandru - cmandru@g.clemson.edu
<br /> 
Ryan Le - rfle@clemson.edu

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []() Inspiration from - https://medium.com/brisk-voyage/how-we-scrape-300k-flight-prices-per-day-from-google-flights-79f5ddbdc4c0

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Scrum Master -->
## Scrum Master
Hunter Stone - hunter.stone1002@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>
