<template>
  <div class="container">
    <div class="profile">
      <Avatar size="large" />
    </div>
    <div class="tweetContent">
      <textarea
        @click="clickedTextArea = true"
        v-model="tweetText"
        placeholder="What's happening?"
      ></textarea>
      <div class="whoCanSee" v-if="clickedTextArea === true">
        <icon name="earth" />
        <CustomText font="fw-bold small">Everyone can reply</CustomText>
      </div>
      <div class="actions">
        <div class="list">
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style="display: none"
          />
          <div class="action hover">
            <label for="imageInput"><icon name="gallery"/></label>
          </div>
          <input
            type="file"
            id="gifInput"
            accept="image/gif"
            style="display: none"
          />
          <div class="action hover">
            <label for="gifInput"><icon name="gif"/></label>
          </div>
          <div class="action hover">
            <icon name="statistics" />
          </div>
          <div class="action hover">
            <icon name="emoji" />
          </div>
          <div class="action hover">
            <icon name="date" />
          </div>
        </div>
        <div class="sendTweet">
          <CustomButton :disabled="tweetText.length > 0 ? false : true"
            >Tweet</CustomButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import CustomText from "@/components/CustomText";
import CustomButton from "@/components/CustomButton";
export default {
  name: "tweetSendArea",
  data() {
    return {
      tweetText: "",
      clickedTextArea: false
    };
  },
  components: { CustomButton, CustomText, Avatar }
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  min-height: 118px;
  max-height: 160px;
  padding: 10px;
  .profile {
    float: left;
    height: 100%;
    width: 50px;
    margin-right: 10px;
  }
  .tweetContent {
    display: flex;
    flex-direction: column;
    textarea {
      margin-top: 5px;
      background: none;
      resize: none;
      border: none;
      font-size: 20px;
      color: #ffffff;
      outline: none;
      width: 100%;
      height: 44px;
      padding: 5px;
      &::placeholder {
        color: #8899a6;
      }
    }
    .whoCanSee {
      margin-top: 4px;
      display: flex;
      align-items: center;
      padding: 0 5px 15px 5px;
      border-bottom: 1px solid #38444d;
      color: #1da1f2;
      cursor: pointer;
      svg {
        width: 20px;
        fill: #1da1f2;
        margin-right: 5px;
      }
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 10px 10px 0;
      .list {
        display: flex;
        .action {
          padding: 10px;
          border-radius: 50%;
          label {
            display: flex;
          }
          svg {
            fill: #1da1f2;
            width: 22px;
            cursor: pointer;
          }
        }
      }
      .sendTweet {
        button {
          padding: 10px 17px;
        }
      }
    }
  }
}
</style>
