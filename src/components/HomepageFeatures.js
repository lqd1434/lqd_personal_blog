import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '前端程序员👨🏻‍💻',
    Svg: require('../../static/img/undraw_Website_builder_re_ii6e.svg').default,
    description: (
      <>
        我是一个前端程序员,喜欢前端的开放和表现力,也深深被前端广大的世界所折服,愿倾尽一生去学习前端
      </>
    ),
  },
  {
    title: '平平无奇单身狗',
    Svg: require('../../static/img/undraw_With_love_re_1q3m.svg').default,
    description: (
      <>
        自从第一次恋爱经历失败后,我就潜心学习编程,从开始的<code>python</code>,到后来的<code>java</code>,最后确定了我的方向--前端,希望在未来的日子里,我能收获一份美好的爱情💑
      </>
    ),
  },
  {
    title: '南昌大学学生',
    Svg: require('../../static/img/undraw_exams_g4ow.svg').default,
    description: (
      <>
        我现在是一名南昌大学通信工程大三学生,并将在接下来的两年里,努力完成学业,毕业以后投身前端领域
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
