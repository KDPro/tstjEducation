/**
 * Created by kdkjPC on 2018/4/27.
 */
const Interface = {};

/**
 * login
 */
Interface.login = 'login';
Interface.logout = 'logout';
/**
 * user
 */
Interface.userAdd = "user/add";  //注册
Interface.userUpdate = "user/update"; //忘记密码
Interface.userInformation = "user/selectOption" ; //个人用户信息
/**
 * upload
 */
Interface.uploadFile = 'uploadFile';     //上传单个图片，换取地址
Interface.uploadImgFiles = 'uploadImgFiles'; //上传多个图片，换取地址
Interface.uploadUnionFile = 'uploadUnionFile'; //上传视频文件，或者音乐文件，换取地址
/**
 * 所有以及页面查询信息
 */
Interface.newsQuery = 'news/query';  //所有一级页面查询接口
Interface.findOneById = 'news/findOneById';  //所有一级页面详情
Interface.newAdd = 'news/add';

/**
 * 网红页面查询信息
 */
Interface.memeQuery = 'meme/query'; //网红个人展示
Interface.memeQueryImgs = 'meme/queryImgs'; //网红个人图集
Interface.memefindOneById = 'meme/findOneById'; //网红个人展示 详情
Interface.findImgsById = 'meme/findImgsById'; //网红个人图集 详情
Interface.memeAdd = 'meme/add'; //添加网红  或者添加报名者

/**
 * 招聘信息
 */
Interface.hireQuery = 'hire/query'; //招聘信息列表
// Interface.hirefindOneById='hire/findOneById' ;  //招聘信息查询详情

/**
 * 家教求职信息
 */
Interface.tutorQuery = 'tutor/query';  //家教求职信息列表
Interface.tutorfindOneById = 'tutor/findOneById';  //家教求职查询详情
Interface.tutorAdd = 'tutor/add';  //家教求职信息添加

/**
 * 活动信息
 */
Interface.activeQuery = 'activity/query';
Interface.activeFindOneById = 'activity/findOneById';
Interface.activeAdd = 'activity/add';
Interface.queryCommentsByActId='message/queryCommentsByActId';
Interface.addComment='message/addComment';
Interface.addVote='activity/addVote';




/**
 * 许愿树接口
 */
Interface.wishingTree = 'wishingTree/addWishes';    //开始许愿
Interface.getLeaves = 'wishingTree/getLeaves';  //获取许愿内容
Interface.getTreeHole = 'wishingTree/query';   //获取神秘树洞列表

/**
 * 发布评论接口
 */ 
Interface.addMessage = 'message/addComment';   //发布评论接口

export default Interface;
