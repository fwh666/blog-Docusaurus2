---
slug: concurrent-volatile
title: JMM和Volatile详解
date: 2021-09-02
authors: wenhao
tags: [concurrent,Volatile]
keywords: [concurrent,Volatile]
---

## JMM的概念

JMM（Java Memory Model）是Java内存模型的缩写，它定义了Java程序中多线程并发访问共享内存时的行为规范。JMM中的核心概念包括：

1. 主内存：主内存是所有线程共享的内存区域，所有变量都存储在主内存中。

2. 工作内存：工作内存是每个线程独有的内存区域，线程执行时会将主内存中的变量复制到自己的工作内存中进行操作。

3. 内存屏障：内存屏障是一种同步机制，用于保证多线程之间对共享变量的可见性和有序性。在JMM中，读屏障和写屏障分别用于保证读操作和写操作之间的顺序性和可见性。

4. 原子性：原子性指一个操作不可被中断或分割，要么全部执行成功，要么全部不执行。在JMM中，对基本数据类型（如int、long等）的读写操作具有原子性。

5. 可见性：可见性指当一个线程修改了某个共享变量后，其他线程能够立即看到这个修改。在JMM中，由于每个线程都有自己独立的工作内存，在修改完共享变量后需要通过同步机制（如锁、volatile关键字等）来保证可见性。

6. 有序性：有序性指程序执行的顺序与代码编写的顺序一致。在JMM中，由于指令重排的存在，程序执行的顺序可能与代码编写的顺序不一致，需要通过内存屏障来保证有序性。

<!-- truncate -->


 

## volatile内存语义

在JMM中，volatile关键字具有特殊的内存语义，它可以保证对volatile变量的读写操作具有以下特性：

1. 可见性：对一个volatile变量的写操作会立即刷新到主内存中，对一个volatile变量的读操作会从主内存中读取最新的值。

2. 有序性：对一个volatile变量的读写操作不会被指令重排优化，保证了程序执行的顺序与代码编写的顺序一致。

3. 不保证原子性：虽然volatile变量的读写操作具有可见性和有序性，但并不具有原子性。如果多个线程同时对一个volatile变量进行写操作，可能会出现竞态条件的问题。

因此，在使用volatile关键字时需要注意以下几点：

1. 不要依赖volatile变量的原子性，如果需要保证原子性，应该使用synchronized关键字或者Lock接口。

2. 不要过度依赖volatile变量，如果一个变量的读写操作非常频繁，使用volatile关键字可能会导致性能问题。

3. 不要将volatile变量与其他同步机制混用，这可能会导致死锁等问题。



## volatile为什么不能保证原子性

在JMM中，volatile关键字虽然可以保证对变量的读写操作具有可见性和有序性，但并不具有原子性。这是因为volatile变量的读写操作虽然具有同步机制，但并没有像synchronized关键字或者Lock接口那样的互斥性，因此多个线程同时对一个volatile变量进行写操作时，可能会出现竞态条件的问题。因此，在使用volatile关键字时，需要注意不要依赖volatile变量的原子性，如果需要保证原子性，应该使用synchronized关键字或者Lock接口。




 **举例说明volatile的可见性**
```java
public class VolatileDemo {
    private volatile boolean flag = false;

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
    
    public boolean isFlag() {
        return flag;
    }
    
    public static void main(String[] args) {
        VolatileDemo demo = new VolatileDemo();
    
        // 线程1：修改flag的值
        new Thread(() -> {
            demo.setFlag(true);
            System.out.println(Thread.currentThread().getName() + " set flag to true");
        }).start();
    
        // 线程2：读取flag的值
        new Thread(() -> {
            while (!demo.isFlag()) {
                // do nothing
            }
            System.out.println(Thread.currentThread().getName() + " read flag as true");
        }).start();
    }
}

```


 **举例说明volatile禁止重排优化**
```java
public class VolatileDemo {
    private volatile int a = 0;
    private volatile boolean flag = false;

    public void writer() {
        a = 1;          // 语句1
        flag = true;    // 语句2
    }
    
    public void reader() {
        if (flag) {     // 语句3
            int i = a;  // 语句4
            System.out.println(i);
        }
    }
}
```

以上代码中，如果没有volatile关键字修饰变量a和flag，那么语句1和语句2的执行顺序是不确定的，可能会出现重排的情况。如果语句2先于语句1执行，那么在语句3中flag的值为true，但是变量a的值还没有被修改，因此语句4输出的值可能为0。但是如果使用volatile关键字修饰变量a和flag，那么语句1和语句2的执行顺序就不会被重排，保证了语句4输出的值一定为1。



 

**举例说明内存屏障的作用**
```java
public class MemoryBarrierDemo {
    private int a = 0;
    private volatile boolean flag = false;

    public void writer() {
        a = 1;          // 语句1
        flag = true;    // 语句2
    }
    
    public void reader() {
        if (flag) {     // 语句3
            int i = a;  // 语句4
            System.out.println(i);
        }
    }
    
    public static void main(String[] args) {
        MemoryBarrierDemo demo = new MemoryBarrierDemo();
    
        // 线程1：修改flag的值
        new Thread(() -> {
            demo.writer();
        }).start();
    
        // 线程2：读取flag的值
        new Thread(() -> {
            while (!demo.flag) {
                // do nothing
            }
            demo.reader();
        }).start();
    }
}
```
以上代码中，如果没有内存屏障，那么语句1和语句2的执行顺序是不确定的，可能会出现重排的情况。如果语句2先于语句1执行，那么在语句3中flag的值为true，但是变量a的值还没有被修改，因此语句4输出的值可能为0。但是如果在语句1和语句2之间插入一个写屏障，那么就可以保证语句1和语句2的执行顺序不会被重排，保证了语句4输出的值一定为1。

