---
slug: IDM-VTON
title: AI一键换衣神器 终于把老黄的黑皮夹克给换了
date: 2024-05-03
authors: wenhao
tags: [AI, 软件工具]
keywords: [AI, 软件工具, 声音克隆]
# image: /img/blog/vue-chrome-extension.png
# sticky: 6
---
![SCR-20240503-tbjh](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/SCR-20240503-tbjh.jpeg)

<!-- truncate -->

## 要求



```
git clone https://github.com/yisol/IDM-VTON.git
cd IDM-VTON

conda env create -f environment.yaml
conda activate idm
```



## 数据准备



### VITON-HD



您可以从 VITON-HD 下载 VITON [-](https://github.com/shadow2496/VITON-HD) HD 数据集。

下载 VITON-HD 数据集后，将 vitonhd_test_tagged.json 移动到测试文件夹中。

数据集目录的结构应如下所示。

```
train
|-- ...

test
|-- image
|-- image-densepose
|-- agnostic-mask
|-- cloth
|-- vitonhd_test_tagged.json
```



### 着装要求



您可以从[DressCode](https://github.com/aimagelab/dress-code)下载 DressCode 数据集。

[我们在这里](https://kaistackr-my.sharepoint.com/:u:/g/personal/cpis7_kaist_ac_kr/EaIPRG-aiRRIopz9i002FOwBDa-0-BHUKVZ7Ia5yAVVG3A?e=YxkAip)提供预先计算的密集姿势图像和服装标题。

我们使用[detectorron2](https://github.com/facebookresearch/detectron2)来获取密集姿态图像，请参阅[此处](https://github.com/sangyun884/HR-VITON/issues/45)了解更多详细信息。

下载 DressCode 数据集后，放置图像密集目录和标题文本文件，如下所示。

```
DressCode
|-- dresses
    |-- images
    |-- image-densepose
    |-- dc_caption.txt
    |-- ...
|-- lower_body
    |-- images
    |-- image-densepose
    |-- dc_caption.txt
    |-- ...
|-- upper_body
    |-- images
    |-- image-densepose
    |-- dc_caption.txt
    |-- ...
```



## 推理



### VITON-HD



使用带参数的 python 文件进行推理，

```
accelerate launch inference.py \
    --width 768 --height 1024 --num_inference_steps 30 \
    --output_dir "result" \
    --unpaired \
    --data_dir "DATA_DIR" \
    --seed 42 \
    --test_batch_size 2 \
    --guidance_scale 2.0
```



或者，您可以简单地使用脚本文件运行。

```
sh inference.sh
```



### 着装要求



对于 DressCode 数据集，通过类别参数输入要生成图像的类别，

```
accelerate launch inference_dc.py \
    --width 768 --height 1024 --num_inference_steps 30 \
    --output_dir "result" \
    --unpaired \
    --data_dir "DATA_DIR" \
    --seed 42 
    --test_batch_size 2
    --guidance_scale 2.0
    --category "upper_body" 
```



或者，您可以简单地使用脚本文件运行。

```
sh inference.sh
```



## 启动本地渐变演示[![img](https://camo.githubusercontent.com/f8b88bb760ab03bce3155f04a55d4b0b3fc3e4a5b982fcb0fc97283c0ac94fde/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f73746172732f67726164696f2d6170702f67726164696f)](https://github.com/gradio-app/gradio)



[在此处](https://huggingface.co/spaces/yisol/IDM-VTON-local/tree/main/ckpt)下载用于人工解析的检查点。

将检查点放置在 ckpt 文件夹下。

```
ckpt
|-- densepose
    |-- model_final_162be9.pkl
|-- humanparsing
    |-- parsing_atr.onnx
    |-- parsing_lip.onnx

|-- openpose
    |-- ckpts
        |-- body_pose_model.pth
    
```



运行以下命令：

```
python gradio_demo/app.py
```

## 软件工具资料已经打包好!!
👆🔼**领取添加VX: wenhaofree **🔼👆

![SCR-20240426-jtrc](https://leanoss.fuwenhao.club/3JY2Mt0bpJYfuojus25wbqXupdABr5AU/%E6%96%87%E6%B5%A9%E5%BE%AE%E4%BF%A103.png)



[详情介绍](https://wenhaofree.com/IDM-VTON)：https://wenhaofree.com/IDM-VTON
