/**
 * Created by kdkjPC on 2018/4/14.
 */
//首页
import index from '@/pages/index/index'
//就业
import employment from '@/pages/3_employment/0_activeH/activeH'
import recruitment from '@/pages/3_employment/1_recruitment/recruitment'
import job from '@/pages/3_employment/2_job/job'
import family from '@/pages/3_employment/3_family/family'
import jobDetail from '@/pages/3_employment/1_1_jobDetail/jobDetail'
import getJob from '@/pages/3_employment/2_1_getJob/getJob'
import getJobForm from '@/pages/3_employment/2_2_getJobForm/getJobForm'
import familyDetail from '@/pages/3_employment/3_1_familyDetail/familyDetail'
import familyForm from '@/pages/3_employment/3_2_familyForm/familyForm'
//活动
import activeH from '@/pages/10_active/0_activeH/activeH'
import affiche from '@/pages/10_active/1_affiche/affiche'
import luckDraw from '@/pages/10_active/2_luckDraw/luckDraw'
import vote from '@/pages/10_active/3_vote/vote'
import affichedetails from '@/pages/10_active/4_affichedetails/affichedetails'
import voteSign from '@/pages/10_active/3_1_voteSign/voteSign'
import voteSignForm from '@/pages/10_active/3_2_voteSignForm/voteSignForm'
import voteRanking from '@/pages/10_active/3_3_voteRanking/voteRanking'
import voteAffiche from '@/pages/10_active/3_4_voteAffiche/voteAffiche'
import voteVipDetail from '@/pages/10_active/3_5_voteVipDetail/voteVipDetail'
// 快讯
import fast from '@/pages/2_fast/fast/fast'
import fastdetails from '@/pages/2_fast/details/details'
// 视频
import video from '@/pages/4_video/video'
import wonderfulfilm from '@/pages/4_video/wonderfulfilm/wonderfulfilm'
import recommendfilm from '@/pages/4_video/recommendfilm/recommendfilm'
// 音乐
import music from '@/pages/5_music/music'
import phonograph from '@/pages/5_music/phonograph/phonograph'
import musicDetail from '@/pages/5_music/musicDetail/musicDetail'
import musicOrder from '@/pages/5_music/musicOrder/musicOrder'
// 探城
import citySearcher from '@/pages/9_citySearcher/citySearcher'
import cityDetail from '@/pages/9_citySearcher/cityDetail/cityDetail'
//跳蚤
import flea from '@/pages/8_flea/flea'
import fleaDetail from '@/pages/8_flea/fleaDetail/fleaDetail'
//网红
import netred from '@/pages/6_netred/0_activeH/activeH'
import personal from '@/pages/6_netred/1_personal/personal'
import information from '@/pages/6_netred/3_information/information'
import atlas from '@/pages/6_netred/2_atlas/atlas'
import personaldetails from '@/pages/6_netred/4_personaldetails/personaldetails'
import atlasdetails from '@/pages/6_netred/5_atlasdetails/atlasdetails'
import imforDetails from '@/pages/6_netred/6_imformationdetails/imformationdetails'

// 许愿树
import wish from '@/pages/7_wish/0_activeH/activeH'
import wishtree from '@/pages/7_wish/1_wishtree/wishtree'
import treeWar from '@/pages/7_wish/2_treeWar/treeWar'
import store from '@/pages/7_wish/3_store/store'

//个人中心
import personalcenter from '@/pages/personalcenter/personalcenter'


// 首页
let indexRoute = {
  path:"/",
  name:"index",
  component:index
};
// 快讯
let fastRoute = {
  fast:{
    path:"/fast",
    name:"fast",
    component:fast
  },
  fastdetails:{
  path: '/fastdetails',
    name: 'fastdetails',
  component: fastdetails
  }
};
// 就业
let employmentRoute = {
  employment:{
    path: '/employment',
    name: 'employment',
    component: employment,
    redirect: '/employment/recruitment',
    children: [
      {
        path: '/employment/recruitment',
        name: 'recruitment',
        component: recruitment
      },{
        path: '/employment/job',
        name: 'job',
        component: job
      },{
        path: '/employment/family',
        name: 'family',
        component: family
      } ]
  },
  jobDetail:{
    path:"/employment/jobDetail",
    name:"jobDetail",
    component:jobDetail
  },
  getJob:{
    path:"/employment/getJob",
    name:"getJob",
    component:getJob
  },
  getJobForm:{
    path:"/employment/getJobForm",
    name:"getJobForm",
    component:getJobForm
  },
  familyDetail:{
    path:"/employment/familyDetail",
    name:"familyDetail",
    component:familyDetail
  },
  familyForm:{
    path:"/employment/familyForm",
    name:"familyForm",
    component:familyForm
  }
};
// 视频
let videoRoute = {
  video:{
    path: "/video",
    name: "video",
    component: video
  },
  wonderful:{
  path: '/videoFilm',
  name: 'videoFilm',
  component: wonderfulfilm
  },
  recommendfilm:{
    path: '/videoReFilm',
    name: 'videoReFilm',
    component: recommendfilm
  }
};
// 音乐
let musicRoute = {
  music: {
    path: "/music",
    name: "music",
    component: music,
  },
  phonograph:{
    path: '/phonograph',
    name: 'phonograph',
    component: phonograph
  },
  musicDetail:{
    path: '/musicDetail',
    name: 'musicDetail',
    component: musicDetail
  },
  musicOrder:{
    path: '/musicOrder',
    name: 'musicOrder',
    component: musicOrder
  },
};
// 网红
let netRedRoute = {
  netRed:{
    path: '/netred',
    name: 'netred',
    component: netred,
    redirect: '/netred/personal',
    children: [
      {
        path: '/netred/personal',
        name: 'personal',
        component: personal
      },{
        path: '/netred/information',
        name: 'information',
        component: information
      },{
        path: '/netred/atlas',
        name: 'atlas',
        component: atlas
      }
    ]
  },
  personDetail:{
    path: '/netRedDetails',
    name: 'netRedDetails',
    component: personaldetails
  },
  atlasdetails:{
    path: '/atlasdetails',
    name: 'atlasdetails',
    component: atlasdetails
  },
  imforDetails: {
    path: '/imforDetails',
    name: 'imforDetails',
    component: imforDetails
  }

};
//许愿
let wishRoute = {
  path: '/wish',
  name: 'wish',
  component: wish,
  redirect: '/wish/wishtree',
  children: [
    {
      path: '/wish/wishtree',
      name: 'wishtree',
      component: wishtree
    },{
      path: '/wish/treeWar',
      name: 'treeWar',
      component: treeWar
    },{
      path: '/wish/store',
      name: 'store',
      component: store
    }
  ]
};
// 跳蚤
let fleaRoute = {
  flea:{
    path: '/flea',
    name: 'flea',
    component: flea
  },
  fleaDetail:{
    path: '/fleaDetail',
    name: 'fleaDetail',
    component: fleaDetail
  }

};
//探城
let cityRouter={
  city:{
    path: '/citySearcher',
    name: 'citySearcher',
    component: citySearcher
  },
  cityDetail:{
    path: '/cityDetail',
    name: 'cityDetail',
    component: cityDetail
  }
};
// 活动
let activeRouter = {
  active:{
    path:"/active",
    name:"activeH",
    component:activeH,
    redirect:'/active/affiche',
    children:[{
      path:'/active/affiche',
      name:"affiche",
      component:affiche
    },{
      path:'/active/luckDraw',
      name:"luckDraw",
      component:luckDraw
    },{
      path:'/active/vote',
      name:"vote",
      component:vote
    },
    ]
  },
  affichedetails: {
    path: '/activeAffDetails',
    name: 'activeAffDetails',
    component: affichedetails
  },
  voteSign:{
    path:"/voteSign",
    name:"voteSign",
    component:voteSign
  },
  voteSignForm:{
    path:"/voteSignForm",
    name:"voteSignForm",
    component:voteSignForm
  },
  voteRanking:{
    path:"/voteRanking",
    name:"voteRanking",
    component:voteRanking
  },
  voteAffiche:{
    path:"/voteAffiche",
    name:"voteAffiche",
    component:voteAffiche
  },
  voteVipDetail:{
    path:"/voteVipDetail",
    name:"voteVipDetail",
    component:voteVipDetail
  }
};
//个人中心
let psersonalRoute = {
  path: '/personalcenter',
  name: 'personalcenter',
  component: personalcenter
};

export default {
  routes: [
    indexRoute,
    fastRoute.fast,fastRoute.fastdetails,
    employmentRoute.employment,
    employmentRoute.jobDetail,
    employmentRoute.getJob,
    employmentRoute.getJobForm,
    employmentRoute.familyDetail,
    employmentRoute.familyForm,
    videoRoute.video,videoRoute.wonderful,videoRoute.recommendfilm,
    musicRoute.music,musicRoute.phonograph,musicRoute.musicDetail,musicRoute.musicOrder,
    netRedRoute.netRed,netRedRoute.personDetail,netRedRoute.atlasdetails,netRedRoute.imforDetails,
    wishRoute,
    fleaRoute.flea,fleaRoute.fleaDetail,
    cityRouter.city,cityRouter.cityDetail,
    activeRouter.active,
    activeRouter.affichedetails,
    activeRouter.voteSign,
    activeRouter.voteSignForm,
    activeRouter.voteRanking,
    activeRouter.voteAffiche,
    activeRouter.voteVipDetail,
    psersonalRoute
  ],
}
