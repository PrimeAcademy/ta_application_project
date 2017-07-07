# Prime Academy TA Application Project

## Instructions
This assessment is intended to see how you are progressing with Angular, Mongo, Node, and Express. It is open-notes and open-book. No talking is allowed for the duration.
Once you are complete, check your work into a new repo and post it on GitHub. Submit this link with your assignment.

A friendly reminder that this is simply a way for us to see how you are individually doing with the technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit. This assessment is not an indicator of how you will perform post Prime or a measure of overall success thus far. It just gives us an idea of where you are at.
Just relax and show us what you know!

Thanks and good luck!

# Your Hero Tracker
The Department of Superhero Knowledge needs an app to help track super hero aliases and powers. You are going to build them this app with Angular and MongoDB. This app will have the following features. Please do not add anything. Focus on the functionality listed.

### Views and Controllers
Your app will have two views, two routes, and two controllers: one each for Hero entry and one each for Hero listing and removal. The use of a Factory or Service is optional.

### Hero Entry
This view will have a form to fill out and create new heroes. Each hero will have the following information on their record:
- `alias` (this is their superhero name)
- `first_name`
- `last_name`
- `city`
- `power_name`

Store these in a Collection called `Heroes`.

Super Power Select
Both views will utilize a list of known super powers to populate a select list drop down. These powers should be entered into your MongoDB in a Collection called `SuperPowers`. Each super power has just one field called: `power_name`
Enter the following into your database of super powers:
- Invisibility
- Flight
- Super Speed
- Heat Vision
- Super Strength
- Accelerated Healing
- Power Blast
- Animal Affinity

Use the power_name string field as the value in your option elements. This would store the string on the Hero object. Don't store the _id.

### Hero Listing & Removal
This view will have the same select drop down list as Hero Entry. When a power is selected, the view needs to display all heroes with that power. Your list should have an option for viewing all super heroes.
Each listing should have a button to delete the listing from the database.

### Node Server
Your app will need a Node/Express server that can serve static files. It should make use of route modules and run on port 4242.

### Database
If you follow the naming guidelines above for your Collections, there is no need to submit any information about your database.
