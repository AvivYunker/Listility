import time
from selenium import webdriver
from selenium.webdriver.common.alert import Alert
browser = webdriver.Chrome()

class RegisterTest:
    def __init__(self, driver):
        self.driver = driver
        self.url = "http://localhost:3000/landing"

    def go(self):
       self.driver.get(self.url) 
    
    def click_login_register(self):
        login_register_button = self.driver.find_element_by_id('LoginRegister')
        login_register_button.click()
        return None

    def go_to_register(self):
        toggle_button = self.driver.find_element_by_id('ToggleLoginRegister')
        toggle_button.click()
        return None

    def enter_username_password(self, name, username, password):
        name_field = self.driver.find_element_by_id('NameLoginRegister')
        username_field = self.driver.find_element_by_id('EmailLoginRegister')
        password_field = self.driver.find_element_by_id('PasswordLoginRegister')
        name_field.send_keys(name)
        username_field.send_keys(username)
        password_field.send_keys(password)
        return None
    
    def submit_username_password(self):
        submit_button = self.driver.find_element_by_id('SubmitLoginRegister')
        submit_button.click()
        return None

    def confirm_login_success(self, confirmation_text):
        time.sleep(5)
        welcome_header = self.driver.find_element_by_id('WelcomeUser').text
        return (welcome_header == confirmation_text)

# Out Test
from selenium import webdriver

# Test Setup
browser = webdriver.Chrome()
test_value = "it worked"

# Test
test_object = RegisterTest(browser)
test_object.go()
test_object.click_login_register()
test_object.go_to_register()
test_object.enter_username_password("Test4", "test4@gmail.com", "123123")
test_object.submit_username_password()
is_success = test_object.confirm_login_success("Welcome, Test4!")

print(is_success)
browser.close()