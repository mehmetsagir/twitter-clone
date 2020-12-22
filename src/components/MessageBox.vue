<template>
  <div class="comp-container">
    <div class="header" @click="messageBoxOpen = !messageBoxOpen">
      <CustomText font="xlarge fw-heavy">Messages</CustomText>
      <div class="icon">
        <icon name="messagePlus" />
        <icon
          name="upTwoArrow"
          :style="
            messageBoxOpen == true
              ? 'transform:rotate(180deg)'
              : 'transform:rotate(0)'
          "
        />
      </div>
    </div>
    <div
      class="messageBox"
      :style="messageBoxOpen == true ? 'height: 475px' : 'height: 0'"
    >
      <div class="messageBox-header">
        <CustomText>Message requests</CustomText>
        <icon name="ArrowRight" />
      </div>
      <div class="messageBox-container">
        <router-link
          tag="div"
          to="/messages"
          class="message"
          v-for="message in messages"
          :key="message.id"
        >
          <Avatar
            class="userImage"
            size="large"
            :image="message.userProfileSendingMessage"
          />
          <div class="user">
            <CustomText tag="p" font="large fw-bold"
              >{{ message.userSendingMessage }}
              <CustomText font="fw-normal" class="username"
                >@{{ message.usernameSendingMessage }}</CustomText
              ></CustomText
            >
            <CustomText tag="p">{{
              message.messageContent.length > 35
                ? message.messageContent.slice(0, 35) + "..."
                : message.messageContent
            }}</CustomText>
          </div>
          <CustomText class="date">{{ message.date }}</CustomText>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
import Avatar from "@/components/Avatar";
export default {
  name: "Messages",
  components: {
    Avatar,
    CustomText
  },
  data() {
    return {
      messageBoxOpen: false,
      messages: [
        {
          id: 1,
          userProfileSendingMessage:
            "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
          userSendingMessage: "Mehmet Sağır",
          usernameSendingMessage: "_memetsagir",
          messageContent: "Hello!",
          date: "Oct 18"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.comp-container {
  background: #15202b;
  box-shadow: 0 0 8px rgba(#ffff, 0.3);
  height: max-content;
  width: 400px;
  position: fixed;
  bottom: 0;
  right: 20px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  .header {
    padding: 0 20px;
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    cursor: pointer;
    svg {
      width: 23px;
      fill: #1da1f2;
      transition: transform 200ms;
      &:first-child {
        margin-right: 15px;
      }
    }
  }
  .messageBox {
    transition: all 400ms;
    &-header {
      background: transparent;
      width: 100%;
      height: 45px;
      border-top: 1px solid #38444d;
      border-bottom: 1px solid #38444d;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 15px;
      cursor: pointer;
      transition: background 300ms;
      &:hover {
        background: lighten(#15202b, 5%);
      }
      svg {
        width: 20px;
        fill: #ffffff;
      }
    }
    &-container {
      min-height: 430px;
      height: 430px;
      width: 100%;
      overflow-y: auto;
      .message {
        height: 80px;
        width: 100%;
        border-bottom: 1px solid #38444d;
        position: relative;
        display: flex;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        transition: background 300ms;
        &:hover {
          background: lighten(#15202b, 5%);
        }
        .userImage {
          margin: 15px;
        }
        .date {
          position: absolute;
          top: 5px;
          right: 15px;
          color: #8899a6;
        }
        .username {
          color: #8899a6;
        }
      }
    }
  }
}
@media (max-width: 1400px) {
  .comp-container {
    width: 350px !important;
  }
}

@media (max-width: 1080px) {
  .comp-container {
    display: none;
  }
}
</style>
