import React, { Component } from 'react';
import { Button } from 'antd';
import '../../../styles/set.less'

export default class userManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogObj: {
        1: {
          date: '0401',
          url: 'https://m.weibo.cn/status/4356372487773217?'
        },
        2: {
          date: '0405',
          url: 'https://m.weibo.cn/status/4357856284748803?'
        },
        3: {
          date: '0406',
          url: 'https://m.weibo.cn/status/4358142802233201?'
        },
        4: {
          date: '0407',
          url: 'https://m.weibo.cn/status/4358484168251102?'
        },
        5: {
          date: '0413',
          url: 'https://m.weibo.cn/status/4360406488974960?'
        },
        6: {
          date: '0414',
          url: 'https://m.weibo.cn/status/4360779375061001?'
        },
        7: {
          date: '0416',
          url: 'https://m.weibo.cn/status/4361845256612226?'
        },
        8: {
          date: '0418-1',
          url: 'https://m.weibo.cn/status/4362499052435283?'
        },
        9: {
          date: '0418-2',
          url: 'https://m.weibo.cn/status/4362499157239574?'
        },
        10: {
          date: '0418-3',
          url: 'https://m.weibo.cn/status/4362533403914337?'
        },
        11: {
          date: '0419',
          url: 'https://m.weibo.cn/status/4362901886766678?'
        },
        12: {
          date: '0421',
          url: 'https://m.weibo.cn/status/4363582835047587?'
        },
        13: {
          date: '0423',
          url: 'https://m.weibo.cn/status/4364294675584363?'
        },
        14: {
          date: '0426',
          url: 'https://m.weibo.cn/status/4365311681985851?'
        },
        15: {
          date: '0429',
          url: 'https://m.weibo.cn/status/4366413525463478?'
        },
        16: {
          date: '0430',
          url: 'https://m.weibo.cn/status/4366822184881906?'
        },
        17: {
          date: '0501',
          url: 'https://m.weibo.cn/status/4367110606143348?'
        },
        18: {
          date: '0502',
          url: 'https://weibo.com/2189944002/HsmWT4yhU?from=page_1005052189944002_profile&wvr=6&mod=weibotime&type=comment#_rnd1556811783826'
        },
        19: {
          date: '0503',
          url: 'https://weibo.com/2189944002/Hsu6hyHBr?from=page_1005052189944002_profile&wvr=6&mod=weibotime&type=comment#_rnd1556869922585'
        },
        20: {
          date: '0107',
          url: 'https://weibo.com/2189944002/HaPTEkRzK?type=comment#_rnd1556702262217'
        },
        21: {
          date: '0215',
          url: 'https://m.weibo.cn/status/4339953679220527?'
        },
        22: {
          date: '0308',
          url: 'https://weibo.com/2189944002/HjZuTeqRj?type=comment'
        },
        23: {
          date: '0313',
          url: 'https://weibo.com/6870452244/HkHQK7HzS?type=comment#_rnd1556702303010'
        },
        24: {
          date: '0326',
          url: 'https://weibo.com/2189944002/HkRgwpdWf?from=page_1005052189944002_profile&wvr=6&mod=weibotime&type=comment'
        },
        25: {
          date: 'finish',
          url: 'https://weibo.com/'
        }
      },
      status: 'unStart',
      env: 'prod'
    };
  }
  componentWillMount() {
    const url = window.location.href,
      arr = url.split('//'),
      arr2 = arr[1].split(':');
    if (arr2.length === 1) {
      this.setState({ env: 'prod' });
    }
    else if (arr2.length === 2) {
      this.setState({ env: 'dev' });
    }
  }
  loginBlog = () => {
    window.open('https://weibo.com/');
  };
  readOrdinaryPositive() {
    const {blogObj} = this.state;
    this.setState({ status: 'reading' });
    for (let index in blogObj) {
      if (+index !== 25) {
        setTimeout(() => {
          if (blogObj.hasOwnProperty(index)) {
            window.open(blogObj[index].url);
            // console.log(index);
          }
        }, +index * (3 + 2 * Math.random()) * 1000);
      }
      else {
        setTimeout(() => {
          if (blogObj.hasOwnProperty(index)) {
            window.open(blogObj[index].url);
            // console.log(index);
            this.setState({ status: 'finished' });
            this.finishPlay();
          }
        }, +index * (3 + 2 * Math.random()) * 1000 + 5000);
      }
    }
  }
  finishPlay() {
    const {env} = this.state;
    if (env === 'prod') {
      this.refs.finishSongProd.play();
    }
    else if (env === 'dev') {
      this.refs.finishSongDev.play();
    }
  }
  resetBtn() {
    this.setState({ status: 'unStart' });
  }
  render() {
    const {status, env} = this.state;
    return (
      <div className="kl-content">
        <div className="kl-content-bg">
          <div className="kl-content-bg1" />
          <div className="kl-content-bg2" />
          <div className="kl-content-bg3" />
          <div className="kl-content-bg4" />
        </div>
        <div className="kl-content-body">
          <div className="kl-content-body-">
            <div className="kl-content-body-login">
              <Button className="kl-content-body-login-btn" onClick={() => this.loginBlog()}>登录/退出微博</Button>
            </div>
            <div className="kl-content-body-blog">
              {
                status === 'unStart' ? [
                  <p key="a-1"><Button className="kl-content-body-login-btn" onClick={() => this.readOrdinaryPositive()}>阅读微博(19+5)</Button></p>
                ] : [
                  status === 'reading' ? [
                    <p key="a-2"><Button className="kl-content-body-login-btn-reading">阅读中...</Button></p>
                    ] : [
                    <p key="a-3"><Button className="kl-content-body-login-btn-reading">已完成(19+5)</Button></p>
                    ]
                ]
              }
              <p key="a-4"><Button className="kl-content-body-login-btn" onClick={() => this.resetBtn()}>重置</Button></p>
              {
                env === 'prod' ? [
                  <audio
                    key="b-1"
                    src="../../../../static/finishSong.mp3"
                    ref="finishSongProd"
                  />
                ] : [
                  <audio
                    key="b-2"
                    src="../../../audios/finishSong.mp3"
                    ref="finishSongDev"
                  />
                ]
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
