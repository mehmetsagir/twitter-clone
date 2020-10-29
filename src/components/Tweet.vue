<template>
   <div>
      <div class="container" v-for="tweet in tweetData" :key="tweet.tweetID">
         <div class="profileImage">
            <Avatar size="large" :image="tweet.userImage"/>
         </div>
         <div class="tweet">
            <div class="tweetDetail">
               <CustomText tag="span" class="name" font="fw-bold">{{ tweet.user }}</CustomText>
               <CustomText class="username">@{{ tweet.username }}</CustomText>
               <CustomText class="date">{{ tweet.date }}</CustomText>
            </div>
            <div class="tweetText">
               <CustomText font="large">{{ tweet.tweetText }}</CustomText>
            </div>
            <div class="tweetImage" v-if="tweet.img.length > 3">
               <img :src="tweet.img" alt="">
            </div>
            <div class="tweetAction">
               <div><icon class="actionHover comment" name="comment"/> <CustomText class="comment" font="small">{{ tweet.comments }}</CustomText></div>
               <div><icon class="actionHover rt" name="rt"/><CustomText class="rt">{{ tweet.rt }}</CustomText></div>
               <div><icon class="actionHover fav" name="fav"/><CustomText class="fav">{{ tweet.fav }}</CustomText> </div>
               <div><icon class="actionHover share" name="share"/></div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";
export default {
   name: "Tweet",
   data(){
      return{
         tweetData: [
            {tweetID: 1, userImage: "https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png", img: "", user: "Mehmet Sağır", username: "_memetsagir", date: "2h", tweetText: "Twitter Clone!", comments: "125", fav: "964", rt: "221"},
            {tweetID: 2, userImage: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", img: "https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Vue.js-cta-main.jpg", user: "Test User", username: "test_user", date: "9h", tweetText: "Merhaba Twitter!", comments: "59", fav: "786", rt: "158"},
            {tweetID: 3, userImage: "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png", img: "https://i.morioh.com/2019/12/07/dfe65c53c830.jpg", user: "Mustafa", username: "mustafa", date: "19h", tweetText: "Scss / CSS", comments: "12", fav: "151", rt: "15"},
            {tweetID: 4, userImage: "https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png", img: "https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg", user: "Mehmet Sağır", username: "_memetsagir", date: "2d", tweetText: "", comments: "4", fav: "86", rt: "8"},
         ]
      }
   },
   components: {CustomText, Avatar},

}
</script>

<style lang="scss" scoped>
.container{
   width: 100%;
   display: flex;
   padding: 10px;
   border-bottom: 1px solid #38444d;
   cursor: pointer;
   transition: 200ms;
   &:hover{
      background: lighten(#15202B, 2%);
   }
   .profileImage{
      margin-right: 5px;
   }
   .tweet{
      width: 100%;
      .tweetDetail{
         span{
            margin-right: 5px;
         }
         .username, .date{
            color: #8899a6;
         }
         .date:hover{
            text-decoration: underline;
         }
      }
      .tweetImage{
         margin-top: 5px;
         img{
            width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: center;
            border-radius: 20px;
            border: 1px solid rgba(#38444d, .3);
         }
      }
      .tweetAction{
         display: flex;
         width: 100%;
         margin-top: 7px;
         div{
            display: flex;
            align-items: center;
            flex: 1;
            border-radius: 50%;
            width: max-content;
            svg{
               padding: 5px;
               border-radius: 50%;
               width: 30px;
               fill: #8899a6;
               margin-right: 2px;
            }

            .actionHover, svg, span{
               transition: 300ms;
            }

            &:hover{
               .actionHover{
                  padding: 5px;
                  border-radius: 50%;
               }
               svg.comment, svg.share{
                  background: rgba(#1da1f2, .1);
                  fill: #1da1f2;
               }
               span.comment{
                  color: #1da1f2;
               }
               svg.rt{
                  background: rgba(#17bf63, .1);
                  fill: #17bf63;
               }
               span.rt{
                  color: #17bf63;
               }
               svg.fav{
                  background: rgba(#e0245e, .1);
                  fill: #e0245e;
               }
               span.fav{
                  color: #e0245e;
               }
            }
            &.clicked{
               svg.comment, svg.share{
                  fill: #1da1f2;
               }
               span.comment{
                  color: #1da1f2;
               }
               svg.rt{
                  fill: #17bf63;
               }
               span.rt{
                  color: #17bf63;
               }
               svg.fav{
                  fill: #e0245e;
               }
               span.fav{
                  color: #e0245e;
               }
            }
         }
      }
   }
}
</style>