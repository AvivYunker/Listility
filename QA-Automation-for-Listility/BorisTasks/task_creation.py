class TaskCreation: # definition of class, it's PascalCasing.
    def __init__(self, driver): # this is a constructor ("banai") that's used to initialize every class.
        self.driver = driver # we're giving 'driver' from outside the class to the 'driver' of inside the class.
        self.url = "http://localhost:3000/landing" # giving the class the URL that we want to work with
        # localhost:3000 is the port that we've opened, in order to view the application in our computer
        return None # if the function doesn't need to return anything, then we type "return None" just that there will be a return statement

    def go(self): # this function will go to the URL that we've specified.
        self.driver.get(self.url) # the driver will access the URL, and the URL already exists in self.url.
        # "get" - this will access the website.
        # "self.url" - this is parameter that stores the URL.
        return None # if the function doesn't need to return anything, then we type "return None" just that there will be a return statement
    
    def click_login_register(self): # this function will find the button "Login / Register", and will click on it
        login_register_button = self.driver.find_element_by_id('LoginRegister') # defining a variable - that receives the button, that appears in the website.
        login_register_button.click() # this will click on the button
        return None # if the function doesn't need to return anything, then we type "return None" just that there will be a return statement

    def enter_username_password(self, username, password): # this function will enter the username and password from the function-call, and inserts into text-boxes
        username_field = self.driver.find_element_by_id('EmailLoginRegister') # defining a variable - that receives the text-box, that appears in the website.
        password_field = self.driver.find_element_by_id('PasswordLoginRegister') # defining a variable - that receives the text-box, that appears in the website.
        username_field.send_keys(username) # take the 'username' that we've received in the function-call, insert into the text-box
        password_field.send_keys(password) # take the 'password' that we've received in the function-call, insert into the text-box
        return None # if the function doesn't need to return anything, then we type "return None" just that there will be a return statement
    
    def submit_username_password(self): # this function will find the "submit" button, and will click it.
        submit_button = self.driver.find_element_by_id('SubmitLoginRegister') # defining a variable - that receives the button, that appears in the website.
        submit_button.click() # this will click on the button
        return None # if the function doesn't need to return anything, then we type "return None" just that there will be a return statement

    # def confirm_login_success(self, confirmation_text): # this function will confirm that the user registration had succeeded.
    #     time.sleep(5) # wait till the application loads, and then continue with the Python code (this code)
    #     welcome_header = self.driver.find_element_by_id('WelcomeUser').text # defining a variable - that receives the text, that appears in the website.
    #     welcome_header = welcome_header.text # get the text-content from the element
    #     return (welcome_header == confirmation_text) # if the welcome_header (element) is equal to the string that we've received from the function-call, then return "true", otherwise, return "false"

    def go_to_all_lists(self): # this function will go to the "all-lists" page
        time.sleep(3) # wait till the application loads, and then continue with the Python code (this code)
        self.driver.get("http://localhost:3000/all-lists") # go to "all-lists" page.
    
    def create_new_list(self, list_name): # this function will create a new list
        list_topic_text_box = self.driver.find_element_by_id('NewListTitle') # defining a variable - that receives the button, that appears in the website.
        list_topic_submit = self.driver.find_element_by_id('SubmitListTitle') # defining a variable - that receives the button, that appears in the website.
        list_topic_text_box.send_keys(list_name) # take the 'list_name' that we've received in the function-call, insert into the text-box
        list_topic_submit.click() # this will click on the button
    
    # def confirm_list_creation(self, list_name): # this function will create a new list
    #     time.sleep(5) # wait till the application loads, and then continue with the Python code (this code)
    #     actual_list_topic = self.driver.find_element_by_id('listTitle').text # defining a variable - that receives the text, that appears in the website.
    #     print("The actual_list_topic is: " + actual_list_topic) # debugging print
    #     print("The expected topic is: " + list_name) # debugging print
    #     return (actual_list_topic == list_name) # if the actual_list_topic (element) is equal to the string that we've received from the function-call, then return "true", otherwise, return "false"

    def create_new_task(self, task_name): # this function will create a new task
        time.sleep(2) #  # wait till the application loads, and then continue with the Python code (this code)
        create_task_button = self.driver.find_element_by_id('AddTaskButton') # defining a variable - that receives the button, that appears in the website.
        create_task_button.click() # this will click on the button
        # and now - for the task model:
        new_task_textbox = self.driver.find_element_by_id('NewTaskTitle') # defining a variable - that receives the button, that appears in the website.
        new_task_add = self.driver.find_element_by_id('NewTaskSubmit') # defining a variable - that receives the button, that appears in the website.
        new_task_textbox.send_keys(task_name) # take the 'list_name' that we've received in the function-call, insert into the text-box
        new_task_add.click() # this will click on the button
    
    def confirm_new_task(self, expected_text): # this function will confirm the creation of the task
        task_item = self.driver.find_element_by_id('TaskItem').text # defining a variable - that receives the text, that appears in the website.
        print("Expected results: " + expected_text) # debugging print
        print("Actual results: " + task_item) # debugging print
        return (task_item == expected_text) # if the task_item (element) is equal to the string that we've received from the function-call, then return "true", otherwise, return "false"

        


# Out Test
import time # import time module, so that it's possible to use time.sleep, to delay python code
from selenium import webdriver # webdriver allows to control the website in the browser

# Test Setup
browser = webdriver.Chrome() # creates "browser" object, to allow to execute functions in website

# Test
test_object = TaskCreation(browser) # defining the object to be an object of the class "TaskCreation", and pass "driver" (declared on line 48) to the constructor ("banai")
test_object.go() # here - we're calling the "go" method of the class "TaskCreation" (making the "go" function run)
test_object.click_login_register() # here - we're calling the "click_login_register" method of the class "TaskCreation" (making the "click_login_register" function run)
test_object.enter_username_password("test@gmail.com", "123123") # here - we're calling the "enter_username_password" method of the class "TaskCreation" (making the "enter_username_password" function run)
# also - we're passing the 2 parameters, which are: "test@gmail.com" and "123123"
test_object.submit_username_password() # here - we're calling the "submit_username_password" method of the class "TaskCreation" (making the "submit_username_password" function run)
test_object.go_to_all_lists() # here - we're calling the "go_to_all_lists" method of the class "TaskCreation" (making the "submit_username_password" function run)
test_object.create_new_list("Sample List") # here - we're calling the "create_new_list" method of the class "TaskCreation" (making the "submit_username_password" function run)
test_object.create_new_task("Sample Task 1") # here - we're calling the "create_new_task" method of the class "TaskCreation" (making the "submit_username_password" function run)
is_success = test_object.confirm_new_task("Sample Task 1") # here - we're calling the "create_new_task" method of the class "TaskCreation" (making the "submit_username_password" function run)

print(is_success) # print the value that had been stored inside "is_success" (whether test had succeeded or not)

browser.close() # this closes the browser, because we've finished writing the test.