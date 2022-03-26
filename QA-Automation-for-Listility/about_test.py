from argparse import Action


class AboutTest:
    def __init__(self, driver):
        self.driver = driver
        self.url = "http://localhost:3000/landing"

    def go(self):
        self.driver.get(self.url) 
    
    def click_login_register(self):
        login_register_button = self.driver.find_element_by_id('LoginRegister')
        login_register_button.click()
        return None

    def enter_username_password(self, username, password):
        username_field = self.driver.find_element_by_id('EmailLoginRegister')
        password_field = self.driver.find_element_by_id('PasswordLoginRegister')
        username_field.send_keys(username)
        password_field.send_keys(password)
        return None
    
    def submit_username_password(self):
        submit_button = self.driver.find_element_by_id('SubmitLoginRegister')
        submit_button.click()
        return None

    def go_to_about(self):
        time.sleep(5)
        browser.get('http://localhost:3000/about')
        return None


    def confirm_about_page(self, confirmation_text):
        time.sleep(5)
        welcome_header = self.driver.find_element_by_id('AboutHeader').text
        return (welcome_header == confirmation_text)

# Out Test
import time
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

# Test Setup
browser = webdriver.Chrome()

# Test
test_object = AboutTest(browser)
test_object.go()
test_object.click_login_register()
test_object.enter_username_password("test@gmail.com", "123123")
test_object.submit_username_password()
test_object.go_to_about()
is_success = test_object.confirm_about_page("About Listility")

print(is_success)
browser.close()