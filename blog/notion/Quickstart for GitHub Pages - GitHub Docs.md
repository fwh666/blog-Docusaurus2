---
slug: Quickstart-for-GitHub-Pages---GitHub-Docs
title: Quickstart for GitHub Pages - GitHub Docs
date: 2023-11-07
authors: wenhao
tags: ['Default']
keywords: ['Default']
---
https://docs.github.com/en/pages/quickstart 

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/03f84a45-45c3-4225-ace5-f9b3b1a79ccb/github-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072050Z&X-Amz-Expires=3600&X-Amz-Signature=bfcb63492e788b48509857e5b0687c2e0bd15c831d27c4bbba957fd12034178b&X-Amz-SignedHeaders=host&x-id=GetObject)
You can use GitHub Pages to showcase some open source projects, host a blog, or even share your résumé. This guide will help get you started on creating your next website. 
GitHub Pages is available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see " GitHub’s plans ." 
## Introduction

<!-- truncate -->

GitHub Pages are public webpages hosted and published through GitHub. The quickest way to get up and running is by using the Jekyll Theme Chooser to load a pre-made theme. You can then modify your GitHub Pages' content and style. 
This guide will lead you through creating a user site at  username.github.io . 
## Creating your website

<!-- truncate -->

- 
-  
- 
In the upper-right corner of any page, select , then click  New repository . 
- 
- 
Enter  username.github.io  as the repository name. Replace  username  with your GitHub username. For example, if your username is  octocat , the repository name should be  octocat.github.io . 
- 
-  
- 
Under your repository name, click  Settings . If you cannot see the "Settings" tab, select the dropdown menu, then click  Settings . 
- 
- 
In the "Code and automation" section of the sidebar, click   Pages . 
- 
- 
Under "Build and deployment", under "Source", select  Deploy from a branch . 
- 
- 
Under "Build and deployment", under "Branch", use the branch dropdown menu and select a publishing source. 
- 
- 
Optionally, open the  README.md  file of your repository. The  README.md  file is where you will write the content for your site. You can edit the file or keep the default content for now. 
- 
- 
Visit  username.github.io  to view your new website. Note that it can take up to 10 minutes for changes to your site to publish after you push the changes to GitHub. 
## Changing the title and description

<!-- truncate -->

By default, the title of your site is  username.github.io . You can change the title by editing the  _config.yml  file in your repository. You can also add a description for your site. 
- 
- 
Click the  Code  tab of your repository. 
- 
- 
In the file list, click  _config.yml  to open the file. 
- 
- 
Click to edit the file. 
- 
-  
- 
The  _config.yml  file already contains a line that specifies the theme for your site. Add a new line with  title:  followed by the title you want. Add a new line with  description:  followed by the description you want. For example: 
```plain text
theme: jekyll-theme-minimal
title: Octocat's homepage
description: Bookmark this to keep an eye on my project updates!

```
- 
- 
When you are done editing the file, click  Commit changes . 
## Next Steps

<!-- truncate -->

For more information about how to add additional pages to your site, see " Adding content to your GitHub Pages site using Jekyll ." 
For more information about setting up a GitHub Pages site with Jekyll, see " About GitHub Pages and Jekyll ." 



 > 在遵循创作的康庄大道上，若我的文字不慎踏入了他人的花园，请告之我，我将以最快的速度，携带着诚意和尊重，将它们从您的视野中撤去。
