---
id: github-actions-examples
slug: github-actions-examples
title: git常见使用场景
date: 2021-10-01
authors: wenhao
tags: [git]
keywords: [git]
---


# 一、应景场景：

## 提交代码：

* git add ***    
  * 添加文件
* git commit -m '备注'
  * 提交代码
* git push
  * 推送代码

## 拉取分支：

*  git checkout -b develop1.0 origin/develop1.0 
   * 拉取develop1.0的远程分支到本地并命名develop1.0 ，创建关联关系。
   * 举例：git checkout -b 本地分支名x origin/远程分支名x

## 创建分支：

*  git branch -a
   * 查看所有分支
*  git branch develop
   * 创建develop分支
*  git checkout develop
   * 切换分支
*  git push --set-upstream origin develop
   * 推送分支develop
*  **在分支基础上创建分支：**
   * **参考**：
     * git checkout current_branch      切换到当前分支current_branch
     * git pull     拉取最新的
     * git checkout -b new_branch    基于当前的分支，创建new_branch分支
     * git push origin new_branch      推送到线上
   * 举例：
     * 在指定的分支上创建新分支
     * git checkout -b develop2.0
       * 1.0上创建2.0
     * git push origin develop2.0
       * 2.0推送远端
*  **修改分支名-并推送：**
   * git branch -m oldBranchName newBranchName
   * 重命名： git branch -m develop3.0 release3.0
   * 推送到远程：git push --set-upstream origin release3.0

## 删除分支：

* 删除本地分支：git branch -d develop 
* 删除远程分支：git push origin --delete develop3.0 

## 合并分支：

* **合并到主分支：**
  * git checkout master
  * git merge develop
    * 合并develop代码到主分支

## 回滚上一个提交：

* git reset --hard HEAD^        回退到上个版本
* git reset --hard commit_id    退到/进到 指定commit_id
* git push origin HEAD --force


参考地址：[https://www.cnblogs.com/yu-hailong/p/10681905.html](https://www.cnblogs.com/yu-hailong/p/10681905.html)

# 

## 命令操作：

**git revert commit 作用以及如何撤销操作**

# 二、问题情景:

1. 本地未更新,提交推送报错, 重新更新后,无冲突,是否继续推送已经提交的?
2. 分支拉取

## 01-变更remote地址

    1.   [https://github.com/wenhaofree/fwh-parent.git](https://github.com/wenhaofree/fwh-parent.git)

```plain
# 列出已经存在的远程仓库
$ git remote

# 列出远程仓库的详细信息，在别名后面列出URL地址
$ git remote -v
$ git remote --verbose

# 添加远程仓库
$ git remote add <远程仓库的别名> <远程仓库的URL地址>

# 修改远程仓库的别名
$ git remote rename <原远程仓库的别名> <新的别名>

# 删除指定名称的远程仓库
$ git remote remove <远程仓库的别名>

# 修改远程仓库的 URL 地址
$ git remote set-url <远程仓库的别名> <新的远程仓库URL地址>
举例：
git remote set-url origin https://github.com/wenhaofree/fwh-parent.git
git remote set-url origin git@github.com:fwh666/fwh-parent.git

```


## 02-代码迁移：

```plain
gitlab 项目代码迁移
将原来服务器上的项目代码迁移到另一台服务器上。

首先新建一个空文件，将原服务器代码取下来。
git clone http://***(原服务器代码地址)
进入到取下来的git项目文件夹中：
cd *****(取下来的项目文件夹路径)

下面可以参照gitlab给出的提示，首先将原来的origin重命名一下：
git remote rename origin old-origin
再指定需要迁移到的目标地址：
git remote add origin http://***(新服务器代码需要存放的地址)

上传到新服务器：
git push origin --all
上传tag:
git push origin --tags
假如有多个分支的话，就切换到另一个分支，再切换到另一个分支提交：
git checkout dev(分支名称)
不知道的话可以通过 git branch -a  查看分支
切换到dev分支后，再次提交
git push origin -all
```

## 03-GitHub仓库快速导入Gitee及同步更新


[https://gitee.com/help/articles/4284#article-header0](https://gitee.com/help/articles/4284#article-header0)  方案


## 04-Git代码迁移？

>如何从一个仓库把现有代码迁移到另一个仓库？

## 05-git-fls上传大文件到gitee

* 2-1. 安装，我是用的是Macbook Pro，所以选择macOS用户安装方式 Homebrew 安装
  * brew install git-lfs
* 2-2. 打开终端，cd到git仓库本地路径，初始化lfs
  * git lfs install
* 2-3. 追踪单个文件
  * git lfs track
  * **eg:git lfs track "*.psd"    注意：要选择匹配上传的文件类型**
* 2-4. 添加lfs追踪文件，提交仓库（此处一定要先提交追踪文件到仓库，在提交其他文件）
  * git add .gitattributes
  * git commit -m "track *.psd files using Git LFS"
  * git add .
  * git commit -m "submit other files"
* 2-5. 验证是否追踪大文件，如果输入后不显示则追踪不成功
  * git lfs ls-files
* 2-6. 推送至远程仓库
  * git push origin master
    注意：

* 目前使用的是GitHub的仓库测试。Gitee待验证。
* [https://git-lfs.github.com/](https://git-lfs.github.com/) 下载地址
* [https://blog.csdn.net/wang1992326/article/details/89680533](https://blog.csdn.net/wang1992326/article/details/89680533)  操作说明

## 06-本地代码初始上传到码云？

* [https://blog.csdn.net/tongluren381/article/details/106615356/](https://blog.csdn.net/tongluren381/article/details/106615356/) 参考地址

## 07-解决码云出现git@gitee.com: Permission denied (publickey).

* 生成ssh的key
* 将key重新添加到sshkey中
* 参考地址: [https://blog.csdn.net/dyy_csdn/article/details/81508809](https://blog.csdn.net/dyy_csdn/article/details/81508809)
