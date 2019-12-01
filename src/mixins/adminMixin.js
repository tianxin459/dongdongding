import wepy from 'wepy'

export default class AdminMixin extends wepy.mixin {
    computed = {
        isAdmin() {
            return this.$parent.isAdmin();
        },
        isDebug() {
            return this.$parent.isDebug();
        },
        isWinning() {
            let winningInfo = this.$parent.globalData.userInfo.winningInfo || {};
            return !winningInfo.claimed;
        }
    }
    methods = {

        nav(e) {
            this.$navigate(e.target.dataset.url);
        },
    }
    data = {

    }
}