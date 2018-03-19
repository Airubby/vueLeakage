<template>
    <div class="loncom_topnav">
        <div class="loncom_topnav_logo loncom_fl">
            <router-link to="/">
                <img src="static/images/logo.png">
            </router-link>
        </div>
        <ul>
            <li>
                <router-link to="/">
                    <em><img src="static/images/home.png"></em>
                    <p>网站首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="/realControl">
                    <em><img src="static/images/home.png"></em>
                    <p>实时监控</p>
                </router-link>
            </li>
            <li>
                <router-link to="/opsManage">
                    <em><img src="static/images/home.png"></em>
                    <p>运维管理</p>
                </router-link>
            </li>
            <li>
                <router-link to="/alarmCen">
                    <em><img src="static/images/home.png"></em>
                    <p>告警中心</p>
                </router-link>
            </li>
            <li>
                <router-link to="/reportCen">
                    <em><img src="static/images/home.png"></em>
                    <p>报表中心</p>
                </router-link>
            </li>
            <li>
                <router-link to="/sysManage">
                    <em><img src="static/images/home.png"></em>
                    <p>系统管理</p>
                </router-link>
            </li>
            <li>
                <router-link to="/test">
                    <em><img src="static/images/home.png"></em>
                    <p>测试</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>


