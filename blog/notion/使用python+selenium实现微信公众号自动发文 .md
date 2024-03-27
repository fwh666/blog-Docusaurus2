---
slug: Automatic-posting-on-WeChat-official-account-using-python-+-selenium
title: 使用python+selenium实现微信公众号自动发文 
date: 2023-11-23
authors: wenhao
tags: ['Python']
keywords: ['Python']
---
https://juejin.cn/post/7083147111897923614 

目的：每天都要通过微信公众号进行发送文章，但是每次仅仅是修改图文信息，其他设置并无不同，故通过自动化可节省大量时间，实现一键发文。 
在这过程中，也遇到了一些问题，总结如下： 
（1）切换窗口操作时遇到 wd.title的名字一模一样（暂时使用了选择最近打开窗口解决） 
（2）不能准确定位到元素，后来通过copy_xpath解决，之前一直手写，后续要加强手写能力 
（3）有一个输入框一直定位不到，原来是iframe中的，切换了一下就解决了 
（4）下拉选项元素定位不到，要加等到时间（sleep（3）） 
（5）一个元素定位不到，原因是不处于可视界面，将滚动条拖动到元素位置，便可以定位到 
<!-- truncate -->
```plain text
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time
wd = webdriver.Chrome()
wd.maximize_window()
wd.implicitly_wait(5)
#浏览器打开微信公众号平台
wd.get('https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=835840104')
#点击登录
element = wd.find_element(By.ID,'jumpUrl')
element.click()
#点击使用账号密码登录
element = wd.find_element(By.XPATH,"//a[@class='login__type__container__select-type']")
element.click()
#输入账号
element = wd.find_element(By.CSS_SELECTOR,"input[name='account']")
element.send_keys('账号')
#输入密码
element = wd.find_element(By.CSS_SELECTOR,"input[name='password']")
element.send_keys('密码')
#点击登录
element = wd.find_element(By.CLASS_NAME,'btn_login')
element.click()
#等待10秒给用户扫码验证时间（微信公众号平台登录需要使用微信扫码）
time.sleep(10)
#点击图文消息
element = wd.find_element(By.XPATH,"//*[@id='app']/div[2]/div[4]/div[2]/div/div[1]/div")
element.click()
#窗口跳转，切换到新窗口
handles = wd.window_handles  #获取句柄，得到的是一个列表
wd.switch_to.window(handles[-1]) #切换至最新句柄
#可以开始定位新窗口的元素了
#点击输入标题  //*[@id="title"]
element = wd.find_element(By.XPATH,"//*[@id='title']")
#这里是标题
element.send_keys('标题')
#这里输入作者 //*[@id="author"]
element = wd.find_element(By.XPATH,"//*[@id='author']")
element.send_keys('作者')
#切换到iframe小窗口
wd.switch_to.frame(wd.find_element(By.XPATH,'//*[@id="ueditor_0"]'))
#这里输入文章内容
element = wd.find_element(By.XPATH,"/html/body/p")
element.send_keys('文章内容')
#跳出iframe
wd.switch_to.default_content()
#拖动滚动条，到可见的元素去
target = wd.find_element(By.XPATH,'//*[@id="js_cover_area"]/div[1]/span')
wd.execute_script("arguments[0].scrollIntoView();", target)
#鼠标悬停在’拖拽或者选择封面‘
ac = ActionChains(wd)
#//*[@id="js_cover_area"]/div[1]
ac.move_to_element(wd.find_element(By.XPATH,'//*[@id="js_cover_area"]/div[1]/span')).perform()
time.sleep(1)
# #冻结页面，选择’从图片库选择‘  setTimeout(function(){debugger}, 5000)  //*[@id="js_cover_null"]/ul/li[2]/a
element = wd.find_element(By.XPATH,'//*[@id="js_cover_null"]/ul/li[2]/a')
time.sleep(5)
element.click()
#选择第一张图片
element = wd.find_element(By.XPATH,'//*[@id="js_image_dialog_list_wrp"]/div/div[1]/i')
element.click()
# #点击下一步
element = wd.find_element(By.XPATH,'//*[@id="vue_app"]/div[2]/div[1]/div/div[3]/div[1]/button')
element.click()
#点击完成
element = wd.find_element(By.XPATH,'//*[@id="vue_app"]/div[2]/div[1]/div/div[3]/div[2]/button')
element.click()
#清除简介信息 因为需求是不需要填写简介信息从而预知文章的
element = wd.find_element(By.XPATH,'//*[@id="js_description"]')
element.clear()
#鼠标悬停在新建消息
ac = ActionChains(wd)
ac.move_to_element(wd.find_element(By.XPATH,'//*[@id="js_add_appmsg"]/i')).perform()
#点击’写新图文‘ /html/body/div[18]/div/ul/li[1]/a
element = wd.find_element(By.XPATH,'/html/body/div[18]/div/ul/li[1]/a')
element.click()

#点击群发
element = wd.find_element(By.XPATH,'//*[@id="js_send"]/button/span')
element.click()

```



 > 在遵循创作的康庄大道上，若我的文字不慎踏入了他人的花园，请告之我，我将以最快的速度，携带着诚意和尊重，将它们从您的视野中撤去。
