class LogoutTest: # definition of class, it's PascalCasing.
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

    def enter_username_password(self, username, password): # this function will enter the name, username and password from the function-call, and inserts into text-boxes
        username_field = self.driver.find_element_by_id('EmailLoginRegister') # defining a variable - that receives the text-box, that appears in the website.
        password_field = self.driver.find_element_by_id('PasswordLoginRegister') # defining a variable - that receives the text-box, that appears in the website.
        username_field.send_keys(username) # take the 'username' that we've received in the function-call, insert into the text-box
        password_field.send_keys(password) # take the 'password' that we've received in the function-call, insert into the text-box
        return None # if the function doesn't need to return anything, then we type "return None" just that there will be a return statement
    
    def submit_username_password(self): # this function will find the "submit" button, and will click it.
        submit_button = self.driver.find_element_by_id('SubmitLoginRegister') # defining a variable - that receives the button, that appears in the website.
        submit_button.click() # this will click on the button
        return None # if the function doesn't need to return anything, then we type "return None" just that there will be a return statement

    def confirm_login_success(self, confirmation_text): # this function will confirm that the user login had succeeded.
        time.sleep(5) # wait till the application loads, and then continue with the Python code (this code)
        welcome_header = self.driver.find_element_by_id('WelcomeUser') # defining a variable - that receives the text, that appears in the website.
        welcome_header = welcome_header.text # get the text-content from the element
        return (welcome_header == confirmation_text) # if the welcome_header (element) is equal to the string that we've received from the function-call, then return "true", otherwise, return "false"

    def logout_user(self):
        time.sleep(5) # wait till the application loads, and then continue with the Python code (this code)
        profile_button = self.driver.find_element_by_id('ProfileButton') # defining a variable - that receives the text, that appears in the website.
        profile_button.click() # this will click on the button
        logout_button = self.driver.find_element_by_id('LogoutButton') # defining a variable - that receives the text, that appears in the website.
        logout_button.click() # this will click on the button
    
    def confirm_logout(self, logout_header_text): # this function will confirm that the user logout had succeeded.
        dashboard_header = self.driver.find_element_by_id('DashboardHeader') # defining a variable - that receives the text, that appears in the website.
        dashboard_header = dashboard_header.text # get the text-content from the element
        return (dashboard_header == logout_header_text) # if the welcome_header (element) is equal to the string that we've received from the function-call, then return "true", otherwise, return "false"



# Out Test
import time # import time module, so that it's possible to use time.sleep, to delay python code
from selenium import webdriver # webdriver allows to control the website in the browser

# Test Setup
browser = webdriver.Chrome() # creates "browser" object, to allow to execute functions in website

# Test
test_object = LogoutTest(browser) # defining the object to be an object of the class "LogoutTest", and pass "driver" (declared on line 48) to the constructor ("banai")
test_object.go() # here - we're calling the "go" method of the class "RegisterTest" (making the "go" function run)
test_object.click_login_register() # here - we're calling the "click_login_register" method of the class "RegisterTest" (making the "click_login_register" function run)
test_object.enter_username_password("test@gmail.com", "123123") # here - we're calling the "enter_username_password" method of the class "RegisterTest" (making the "enter_username_password" function run)
test_object.submit_username_password()# here - we're calling the "submit_username_password" method of the class "RegisterTest" (making the "submit_username_password" function run)
test_object.logout_user() # here - we're calling the "submit_username_password" method of the class "logout_user" (making the "logout_user" function run)
is_success = test_object.confirm_logout("List Creating App") # the "confirm_logout" returns a value. This value will be stored in "is_success" for future use 

print(is_success) # print the value that had been stored inside "is_success" (whether test had succeeded or not)

browser.close() # this closes the browser, because we've finished writing the test.