import wepy from 'wepy'

export default class text extends wepy.mixin {
    computed = {
        Lang() {
            return this.text[wepy.getStorageSync('cache*&^Lang') || 1];
        }
    }
    methods = {
        toggleTranslate(e) {
            let iLang = parseInt(wepy.getStorageSync('cache*&^Lang') || 0);
            iLang = (iLang + 1) % 2;
            console.log('ilang', iLang);
            wepy.setStorageSync('cache*&^Lang', iLang);
        }
    }
    data = {
        text: [{
                index: {
                    menu: {
                        ChatRoom: '聊天室',
                        Album: '活动相簿',
                        TransactionHistory: '交易记录',
                        RunningGame: '摇一摇赛跑',
                        Infomation: '活动信息',
                        Deposit: '充值',
                        Help: '帮助',
                        CheckIn: '签到',
                        Register: '注册',
                        Login: '登陆授权',
                        Blocking: '阻拦页面',
                        Admin: '管理员',
                        Translate: 'To English',
                        ContactMe: '联系我'
                    },
                    bullet: {
                        Title: '发送弹幕',
                        SendToMain: '发送弹幕到主屏幕',
                    },
                    help: {
                        Title: '帮助信息',
                        PayMoney: '付款',
                        RecieveMoney: '首款',
                        TransDesc1: '扫码付款',
                        TransDesc2: '发送弹幕/聊天信息',
                        TransDesc3: '收款二维码',
                        ChatRoom: '聊天室',
                        ChatRoomUrl: 'http://ellist.cn/wmtan/bullet.html',
                        ChatRoomDesc: '打开以上链接主屏幕，聊天信息同时会作为弹幕发送到主屏幕',
                        Album: '活动相册',
                        AlbumDesc: '活动相册，可以上传相片与他人分享',
                        RunningGame: '摇一摇赛跑',
                        RunningGameUrl: 'http://ellist.cn/wmtan/race.html',
                        RunningGameDesc: '打开以上链接赛跑页面，然后手机上点击“开始”开始赛跑，参与者可以在摇一摇赛跑中点击“准备”参加赛跑',
                        Deposit: '充值',
                        DepositDesc: '摇一摇手机充值，点击“开始”开始摇手机充值，5秒内摇的次数即为充值金额，倒数结束后可以重试，但是您只有一次机会点击充值，充值确认后该菜单将关闭'
                    }
                },
                shake: {
                    BtnStart: '开始比赛',
                    BtnReady: '就位',
                    Desc1: '按下按钮开始比赛',
                    WaitSignal: '等待比赛开始',
                    ClickReady: '点击就位按钮参加比赛',
                    Url: '电脑上打开http://ellist.cn/wmtan/race.html'
                }
            },
            {
                index: {
                    menu: {
                        ChatRoom: 'Chat Room',
                        Album: 'Album',
                        TransactionHistory: 'Transaction History',
                        RunningGame: 'Running Game',
                        Infomation: 'Party Infomation',
                        Deposit: 'Deposit Money',
                        Help: 'Help',
                        CheckIn: 'CheckIn for Party',
                        Register: 'Register for Party',
                        Login: 'Login Page',
                        Blocking: 'Blocking Page',
                        Admin: 'Admin',
                        Translate: '切换中文',
                        ContactMe: 'Contact Me'
                    },
                    bullet: {
                        Title: 'Send Live Chat',
                        SendToMain: 'Send to Big Screen',
                    },
                    help: {
                        Title: 'GD MiniApp Help',
                        PayMoney: 'Pay',
                        RecieveMoney: 'Recieve',
                        TransDesc1: 'scan QR code to Pay or transfer point to others',
                        TransDesc2: 'Send live chat to big screen/chat room',
                        TransDesc3: 'Your QR code to recieve P2P transfer',
                        ChatRoom: 'Chat Room',
                        ChatRoomUrl: 'http://ellist.cn/wmtan/bullet.html',
                        ChatRoomDesc: 'Send messages or photos to chat with others. The messages will also be sent to the big screen as 弹幕.',
                        Album: 'Album',
                        AlbumDesc: 'Send annual party photos to share with others.',
                        RunningGame: 'Running Game',
                        RunningGameUrl: 'http://ellist.cn/wmtan/race.html',
                        RunningGameDesc: 'Participate in the lucky draw during the dinner party. More details to be shared after dinner begins.',
                        Deposit: 'Deposit Money',
                        DepositDesc: 'Shake you cell phone within 5 seconds to deposit to your balance. You can try unlimited times to go for as much as possible. But you can only choose to deposit the money for one time.'
                    }
                },
                shake: {
                    BtnStart: 'Start',
                    BtnReady: 'Ready',
                    Desc1: 'click button to start race',
                    WaitSignal: 'Wait for Start Signal...',
                    ClickReady: 'Click Ready Button',
                    Url: 'open http://ellist.cn/wmtan/race.html'
                }
            }
        ]
    }
}