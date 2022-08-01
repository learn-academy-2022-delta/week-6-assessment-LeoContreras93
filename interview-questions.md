# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: when you create an entry in your Cohort Model a primary key is assigned by default. The foreign key always goes on the belongs_to side and it will be placed on the Student Model which connects the two tables, its data will be the primary key of the table we are connecting 

Researched answer:  Rails automatically adds a primary key id to each entry in our database of your first Model, when creating a second model to associate the two tables together we need to describe the relationship between the two. Using the foriegn key, to create a new entry of Student we have to create a variable and assign it Cohort.first - the student entry cannot exist unless its attacted to a Cohort.

2. Which RESTful routes must always be passed params? Why?

Your answer: show, delete and update since these actions require grabbing a single instance from the database.

Researched answer:

3. Name three rails generator commands. What is created by each? 

Your answer: Rails G 
Controller - creates a new controller, rails g model - creates a new model, rails generate rspec:install - adds dependencies for rspec

Researched answer: rails g model - The generate command for model takes the name of the model we intend to create, the name of each column, and the data type of each column as arguments. rails g respec:install - wil add dependencies for rspec which cab used to implement TDD and Validations. rails g ne controller - to handle requests and retrieve the data from the model, and views for handling graphical user interface objects and presentation.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students : will show all the students/index

action: "POST" location: /students : creating a new student to be added to all students/create

action: "GET" location: /students/new : will show newly created student/new

action: "GET" location: /students/2 : will show student information with ID of 2 only/show

action: "GET" location: /students/2/edit : will show you the option to edit the information of student with ID of 2/edit

action: "PATCH" location: /students/2 : will allow you to update the information of student./update

action: "DELETE" location: /students/2 : removes student with ID of 2 from the database or page entirely./destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see all the things listed on my to do list

2. As a user, I can click on my to do list items and be routed to a page I can see an more information of that particular item.

3. As a user, I can navigate back towards my landing page 

4. As a user, I see a form where I can add to my to do list

5. As a user, I see a button I can click in order to create a newly listed chore to my to do list

6. As a user, I can navigate back towards my landing page from the form page.

7. As a user, I can click a button to submit my entry on my to do list

8. As a user, When I submit my entry and remidirected to my landing page.

9. As a user, I can update my to list

10. As a user, I can delete and entry from my to do list
