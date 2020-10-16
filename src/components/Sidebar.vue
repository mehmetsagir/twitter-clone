<template>
   <div class="page">
      <div class="app">
         <div class="container">
            <router-link tag="div" to="/home" class="logo hover">
               <IconTwitter/>
            </router-link>
            <nav>
               <router-link tag="a" to="/home" active-class="active">
                  <div class="linkBox homeIcon">
                     <IconHome v-if="$route.name == 'home'"/>
                     <IconHomeFill v-else/>
                     <CustomText font="xlarge fw-bold">Home</CustomText>
                  </div>
               </router-link>
               <router-link to="/explore" tag="a" active-class="active">
                  <div class="linkBox">
                     <IconExplore/>
                     <CustomText font="xlarge fw-bold">Explore</CustomText>
                  </div>
               </router-link>
               <router-link to="/notifications" tag="a" active-class="active">
                  <div class="linkBox">
                     <IconNotification v-if="$route.name != 'notifications'"/>
                     <IconNotificationFill v-else/>
                     <CustomText font="xlarge fw-bold">Notifications</CustomText>
                  </div>
               </router-link>
               <router-link to="/messages" tag="a" active-class="active">
                  <div class="linkBox">
                     <IconMessages v-if="$route.name != 'messages'"/>
                     <IconMessagesFill v-else/>
                     <CustomText font="xlarge fw-bold">Messages</CustomText>
                  </div>
               </router-link>
               <router-link to="/bookmarks" tag="a" active-class="active">
                  <div class="linkBox">
                     <IconBookmarks v-if="$route.name != 'bookmarks'"/>
                     <IconBookmarksFill v-else/>
                     <CustomText font="xlarge fw-bold">Bookmarks</CustomText>
                  </div>
               </router-link>
               <router-link to="/lists" tag="a" active-class="active">
                  <div class="linkBox">
                     <IconList v-if="$route.name != 'lists'"/>
                     <IconListFill v-else/>
                     <CustomText font="xlarge fw-bold">Lists</CustomText>
                  </div>
               </router-link>
               <router-link to="profile" tag="a" active-class="active">
                  <div class="linkBox">
                     <IconProfile v-if="$route.name != 'profile'"/>
                     <IconProfileFill v-else/>
                     <CustomText font="xlarge fw-bold">Profile</CustomText>
                  </div>
               </router-link>
               <a>
                  <div class="linkBox">
                     <IconMore/>
                     <CustomText font="xlarge fw-bold">More</CustomText>
                  </div>
               </a>
            </nav>
            <CustomButton class="modalTweetButton"></CustomButton>
            <div class="user">
               <div class="userBox">
                  <Avatar image="https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png"/>
                  <div class="userDetail">
                     <CustomText tag="p" font="fw-bold">Mehmet Sağır</CustomText>
                     <CustomText tag="p" font="large" class="username">@_memetsagir</CustomText>
                  </div>
               </div>
               <IconDown/>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import IconTwitter from "@/icons/IconTwitter";
import IconHomeFill from "@/icons/IconHome";
import IconHome from "@/icons/IconHomeFill";
import IconExplore from "@/icons/IconExplore";
import IconNotification from "@/icons/IconNotification";
import IconNotificationFill from "@/icons/IconNotificationFill";
import IconMessages from "@/icons/IconMessage";
import IconMessagesFill from "@/icons/IconMessageFill";
import IconBookmarks from "@/icons/IconBookmarks";
import IconBookmarksFill from "@/icons/IconBookmarksFill";
import IconList from "@/icons/IconList";
import IconListFill from "@/icons/IconListFill";
import IconProfile from "@/icons/IconUser";
import IconProfileFill from "@/icons/IconUserFill";
import IconMore from "@/icons/IconMore";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
import Avatar from "@/components/Avatar";
import IconDown from "@/icons/IconDown";
export default {
   name: "Sidebar.vue",
   components : {
      Avatar,
      CustomButton,
      CustomText,
      IconTwitter,
      IconHome,
      IconHomeFill,
      IconExplore,
      IconNotification,
      IconNotificationFill,
      IconMessages,
      IconMessagesFill,
      IconBookmarks,
      IconBookmarksFill,
      IconList,
      IconListFill,
      IconProfile,
      IconProfileFill,
      IconMore,
      IconDown,
   }
}
</script>

<style lang="scss" scoped>
   .page{
      width: 600px;
      height: 100vh;
   }
   .app{
      width: 600px;
      height: 100vh;
      position: fixed;
      .container{
         width: 273px;
         height: 100%;
         margin-left: auto;
         border-right: 1px solid #38444D;
         svg{
            fill: #FFFFFF;
         }
         .logo{
            display: flex;
            align-items: center;
            justify-content: center;
            width: max-content;
            margin: 2px 0 0 2px;
            padding: 10px;
            border-radius: 50%;
            svg{
               width: 30px;
            }
         }
         nav{
            a{
               display: flex;
               align-items: center;
               height: 60px;
               cursor: pointer;
               &:first-child{
                  margin-top: 2px;
               }
               .linkBox{
                  display: flex;
                  width: max-content;
                  align-items: center;
                  padding: 10px 25px 10px 12px;
                  border-radius: 99px;
                  transition: background 300ms;
                  svg{
                     width: 27px;
                     margin-right: 20px;
                  }
               }

               &.active{
                  * {
                     color: #1DA1F2;
                     fill: #1DA1F2;
                  }
               }
               &:hover, .hover{
                  .linkBox{
                     color: #1DA1F2;
                     background: #162D40;
                  }
                  svg{
                     fill: #1DA1F2;
                  }
               }
            }
         }
         .modalTweetButton{
            margin-top: 23px;
            margin-left: 3px;
            padding: 16px 93px;
            letter-spacing: .3px;
            &::before{
               content: 'Tweet';
            }
         }
         .user{
            position: absolute;
            bottom: 10px;
            right: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 260px;
            border-radius: 99px;
            padding: 8px 10px;
            cursor: pointer;
            transition: 300ms;
            &:hover{
               background: #162D40;
            }
            &::before{
               content: '';
               position: absolute;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               z-index: 2;
               border-radius: 99px;
            }
            svg{
               width: 20px;
            }
            .userBox{
               display: flex;
               align-items: center;
               .userDetail{
                  margin-left: 10px;
                  p.username{
                     color: #8899A6;
                  }
               }
            }
         }
      }
      .homeIcon{
         position: relative;
         &::before{
            content: '';
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            top: 7px;
            left: 32px;
            background: #1DA1F2;
         }
      }
   }

</style>