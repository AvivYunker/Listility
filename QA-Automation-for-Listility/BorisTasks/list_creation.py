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

    # def confirm_login_success(self, confirmation_text):
    #     time.sleep(5)
    #     welcome_header = self.driver.find_element_by_id('WelcomeUser').text
    #     return (welcome_header == confirmation_text)

    def go_to_all_lists(self):
        time.sleep(3)
        self.driver.get("http://localhost:3000/all-lists")
    
    def create_new_list(self, list_name):
        list_topic_text_box = self.driver.find_element_by_id('NewListTitle')
        list_topic_submit = self.driver.find_element_by_id('SubmitListTitle')
        list_topic_text_box.send_keys(list_name)
        list_topic_submit.click()
    
    def confirm_list_creation(self, list_name):
        time.sleep(5)
        actual_list_topic = self.driver.find_element_by_id('listTitle').text
        print("The actual_list_topic is: " + actual_list_topic)
        print("The expected topic is: " + list_name)
        return (actual_list_topic == list_name)        


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
test_object.go_to_all_lists()
test_object.create_new_list("Sample List")
is_success = test_object.confirm_list_creation("Sample List")

print(is_success)

browser.close()