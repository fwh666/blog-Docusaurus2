---
slug: No-window-found-How-to-debug-can-not-find-the-problem!---Software-Usage-Issues---Shadow-Blade-RPA-Developer-Community
title: 未找到窗口 怎么调试都找不到问题！-软件使用问题-影刀RPA开发者社区
date: 2023-11-13
authors: wenhao
tags: ['Default']
keywords: ['Default']
---
https://www.yingdao.com/community/detaildiscuss?id=23b3feae-fff1-413e-bd6f-58165d757168 

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/4305d2ab-2c6a-4ca2-9efe-a3f6db7fe2c0/019337f37d5e4b142df23297cf06.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072020Z&X-Amz-Expires=3600&X-Amz-Signature=1eaa3bbf049fee92af7a7081155a88686a2baaa01e23a44faa2d3c1dc9623d51&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/6f039b31-7bd5-4475-a58b-4518f6c720cd/ec0db85a766f04e650fbc6feba52.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072020Z&X-Amz-Expires=3600&X-Amz-Signature=2348bd643ecd38a9fd9e422f0fd376f2cb694b2e11a2b04b981ac5f7d8ec184b&X-Amz-SignedHeaders=host&x-id=GetObject)
Traceback (most recent call last): 
File "/Applications/影刀.app/Contents/Resources/app/node_modules/xbot-engine/lib/lib/python3.7/runpy.py", line 193, in _run_module_as_main 
"__main__", mod_spec) 
File "/Applications/影刀.app/Contents/Resources/app/node_modules/xbot-engine/lib/lib/python3.7/runpy.py", line 85, in _run_code 
exec(code, run_globals) 
File "/Applications/影刀.app/Contents/Resources/app/node_modules/xbot-engine/lib/lib/python3.7/site-packages/xbot_interpreter.py", line 87, in <module> 
main() 
File "/Applications/影刀.app/Contents/Resources/app/node_modules/xbot-engine/lib/lib/python3.7/site-packages/xbot_interpreter.py", line 47, in main 
try: 
File "/Users/jack/Library/Application Support/Shadowbot/users/109081897741340673/apps/38522d1e-a278-403d-bfa7-3c48eb0168ac/xbot_robot/main.py", line 17, in main 
xbot_visual.web.element.click(browser=web_page2, element=package.selector("斜体文本_weui-desktop-icon-radio"), simulate=True, move_mouse=False, clicks="click", button="left", keys="null", delay_after="1", anchor_type="center", sudoku_part="MiddleCenter", offset_x="0", offset_y="0", timeout="20", _block=("main", 8, "点击元素(web)")) 
File "<string>", line 89, in wrapper 
File "<string>", line 84, in wrapper 
File "<string>", line 56, in click 
File "<string>", line 240, in click 
File "<string>", line 21, in _invoke 
File "<string>", line 859, in _invoke 
File "<string>", line 115, in execute 
File "<string>", line 88, in execute 
xbot.errors.UIAError: 未找到窗口 
你好，把高级里的 模拟人工的勾选去掉就行了 感谢反馈哦 



 > 在遵循创作的康庄大道上，若我的文字不慎踏入了他人的花园，请告之我，我将以最快的速度，携带着诚意和尊重，将它们从您的视野中撤去。
