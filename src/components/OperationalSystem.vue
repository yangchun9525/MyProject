<template>
    <div id="OperationSystem" style="display: flex; min-height:100%">
        <div id="leftMenu" style="flex: 0 0 200px; background-color: #495060">
            <Menu active-name="1" theme="dark" width="auto" @on-select="selectOrderViewType">
                <div class="layout-logo-left">
                    <!-- <img src="img/indexlogo_03.png" /> -->
                    <p><font color="yellow">车城快车中台系统</font></p>
                </div>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        订单管理
                    </template>
                    <Menu-item name="1-1">订单列表</Menu-item>
                    <Menu-item name="1-2">运营概况</Menu-item>
                    <!--<Menu-item name="1-2">未接订单列表</Menu-item>
                    <Menu-item name="1-3">虚拟订单列表</Menu-item>-->
                </Submenu>

                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        车辆管理
                    </template>
                    <!-- <Menu-item name="2-1">车辆列表</Menu-item>-->
                    <Menu-item name="2-2">车辆录入</Menu-item>
                    <Menu-item name="2-3">司机列表</Menu-item>
                    <Menu-item name="2-4">司机位置地图</Menu-item>
                </Submenu>

                <!-- <Submenu name="3" v-show="isButtonShow">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        公司管理
                    </template>
                    <Menu-item name="3-1">公司列表</Menu-item>
                    <Menu-item name="3-2">保单设置</Menu-item>
                    <Menu-item name="3-3">结账单</Menu-item>
                    <!--<Menu-item name="3-2">2</Menu-item>-->
                    <!--<Menu-item name="3-3">3</Menu-item>-->
                </Submenu> -->
            </Menu>
        </div>
        <div id="rightContent" style="flex: 0 0 1200px;">
            <div class="layout-header">
                <div class="layout-logo-right">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                    <div style="position: relative;float: right; top:10px; right: 20px;font-size:14px">
                        <p v-if="isUserNameSaved">
                            <i><img style="width:16px;height:16px;" src="http://kc.com/collection_order.png"></i>
                            <i>|</i>
                            <i><img style="width:16px;height:16px;" src="http://kc.com/collection_car.png"></i>
                            <i>|</i>
                            <i><img style="width:16px;height:16px;" src="http://kc.com/collection_percentage.png"></i>
                            <i>|</i>
                            <i><img id="bell-order" style="width:16px;height:16px;" src="http://kc.com/bell.png"></i>
                            <i>|</i>
                            <font color="#1c2438">车城快车欢迎您,{{userName}}</font>
                            <i>|</i>
                            <router-link to="/OperationalSystem/modifyPassword">
                                <font color="#1c2438">修改密码</font>
                            </router-link>
                            <i>|</i>
                            <router-link to="/">
                                <font color="#1c2438">登出</font>
                            </router-link>
                        </p>
                        <p v-else="isUserNameSaved">
                            <router-link to="/">
                                <font color="#1c2438">登录</font>
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
            <!--<div class="layout-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb-item href="/OperationalSystem">首页</Breadcrumb-item>

                    <Breadcrumb-item href="/"+currentPage.path>{{currentPage}}</Breadcrumb-item>
                </Breadcrumb>
            </div>-->
            <div class="layout-content">
                <div class="layout-content-main">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div style="flex: 1 1 1px; height: 100%"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isClick: true,
                spanLeft: 3,
                spanRight: 21,
                userName: this.$store.state.userName,
                currentPage: this.$route,
                isShow: true,
                // isButtonShow: this.$store.state.viewData.CarRentalCompanies.length == 1 ? false : true,
            }
        },
        computed: {
            iconSize() {
                return this.spanLeft === 3 ? 1 : 14;
            },
            isUserNameSaved() {
                return this.userName == "" ? false : true
            }
        },
        methods: {
            toggleClick() {
                if (this.spanLeft === 3) {
                    this.spanLeft = 1
                    this.spanRight = 24
                    this.isShow = false
                } else {
                    this.spanLeft = 3
                    this.spanRight = 21
                    this.isShow = true
                }
            },
            selectOrderViewType(name) {
                switch (name) {
                    case "1-1":
                        this.$router.push('/Chart')
                        break
                    case "1-2":
                        this.$router.push('/picture')
                        break
                    case "1-3":
                        this.$router.push('/OperationalSystem/chart')
                        break
                    case "2-2":
                        this.$router.push('/OperationalSystem/DriverEntry')
                        break
                    case "2-3":
                        this.$router.push('/OperationalSystem/DriverList')
                        break
                    case "2-4":
                        this.$router.push('/OperationalSystem/DriverLocation')
                        break
                    case "3-1":
                        this.$router.push('/OperationalSystem/CompanyManage')
                        break
                    case "3-2":
                        this.$router.push('/OperationalSystem/PolicySetting')
                        break
                    case "3-3":
                        this.$router.push('/OperationalSystem/Reckoning')
                        break
                }
            },
            logOut() {
                this.$store.commit("getAccessToken", "")
                this.$router.push("/")
            },
            modifyPassword() {
                this.$router.push("/modifyPassword")
            }
        },
        // components: {
        //     CarOrderPanel,
        // },
        created() {
            // this.selectOrderViewType('1-2');
            // console.log(this.isButtonShow);
        }

    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }

    .layout-userinfo {
        border-radius: 3px;
        position: relative;
        float: right;
        right: 20px;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-menu-left {
        background: #464c5b;
        min-height: 1200px;
    }

    .layout-header {
        height: 60px;
        background: #FDC235;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }

    .layout-logo-left {
        width: 90%;
        height: 40px;
        /*background: #5b6270;*/
        border-radius: 3px;
        margin: 15px auto;
        text-align: center;
    }

    .layout-logo-right {
        width: 100%;
        height: 60px;
        /*background: #5b6270;*/
        border-radius: 3px;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }
</style>
