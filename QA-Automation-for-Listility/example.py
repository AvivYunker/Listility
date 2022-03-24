import time
from selenium import webdriver
from selenium.webdriver.common.alert import Alert
browser = webdriver.Chrome()

browser.get('http://localhost:3000/landing')
time.sleep(100)
