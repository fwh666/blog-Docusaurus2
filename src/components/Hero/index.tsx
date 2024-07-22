import React from 'react'

import { useTrail, animated } from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import { useThemeConfig} from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'

import Link from '@docusaurus/Link'

import HeroMain from './img/hero_main.svg'

import JuejinIcon from '@site/static/svg/juejin.svg'
import { Icon } from '@iconify/react'

import styles from './styles.module.scss'

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  })

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">你好! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">文浩Marvin👋</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>
          <Translate id="homepage.hero.text">
            {`探索有趣好用APP和网站的博主,分享各类技术栈和AIGC项目解决方案,带你了解最新的技术以及实际需求中如何应用，并希望我的开发经历对你有所帮助。`}
          </Translate>
          <br />
          <br />
          <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs/skill">
                  <Translate id="hompage.hero.note">技术笔记</Translate>
                </Link>
              ),
              idea: (
//                 <Link to="/tags/Life">
                <Link to="/archive">
                  <Translate id="hompage.hero.idea">历史博客</Translate>
                </Link>
              ),
            }}
          >
            {/*{`你可以随处逛逛，查看{note}、{project}、{link}、以及我的{idea}。`}*/}
            {`你可以随处逛逛，查看{note}、以及我的{idea}。`}
          </Translate>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./about'}>
            <Translate id="hompage.hero.introduce">自我介绍</Translate>
          </a>
        </animated.div>
      </div>
      <div className={styles.bloghome__image}>
        <HeroMain />
      </div>
    </animated.div>
  )
}

export function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    juejin: string
    csdn: string
    qq: string
    wx: string
    cloudmusic: string
    zhihu: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href={socials.github} target="_blank">
        <Icon icon="ri:github-line" />
      </a>
      <a href={socials.juejin} target="_blank">
        <JuejinIcon />
      </a>
      <a href={socials.qq} target="_blank">
        <Icon icon="ri:qq-line" />
      </a>
      <a href={socials.twitter} target="_blank">
        <Icon icon="ri:twitter-line" />
      </a>
      <a href={socials.zhihu} target="_blank">
        <Icon icon="ri:zhihu-line" />
      </a>
      <a href="/rss.xml" target="_blank">
        <Icon icon="ri:rss-line" />
      </a>

    </animated.div>
  )
}

export default Hero
