class LoginTest:
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

    def confirm_login_success(self, confirmation_text):
        time.sleep(5)
        welcome_header = self.driver.find_element_by_id('WelcomeUser').text
        return (welcome_header == confirmation_text)

    def logout_user(self):
        time.sleep(5)
        profile_button = self.driver.find_element_by_id('ProfileButton')
        profile_button.click()
        logout_button = self.driver.find_element_by_id('LogoutButton')
        logout_button.click()
    
    def confirm_logout(self, logout_header_text):
        dashboard_header = self.driver.find_element_by_id('DashboardHeader').text
        return (dashboard_header == logout_header_text)



# Out Test
import time
from selenium import webdriver

# Test Setup
browser = webdriver.Chrome()

# Test
test_object = LoginTest(browser)
test_object.go()
test_object.click_login_register()
test_object.enter_username_password("test@gmail.com", "123123")
test_object.submit_username_password()
test_object.logout_user()
is_success = test_object.confirm_logout("List Creating App")
# is_success = test_object.confirm_logout("List Creating Application")


print(is_success)

browser.close()