<template>
  <div>
    <div class="logo-container">
      <img src="@/assets/x-logo.png" class="logo" />
    </div>
    <InputField
      :type="'text'"
      :placeholder="'Emil'"
      v-model="email"
      :error-msg="'이메일을 입력하세요'"
    />
    <InputField
      :type="'password'"
      :placeholder="'Password'"
      v-model="password"
      :error-msg="'비밀번호을 입력하세요'"
    />
    <button class="button" @click="login">로그인하기</button>
    <div>
      계정이 없으신가요?
      <RouterLink class="signup-button" to="/signup">가입하기</RouterLink>
    </div>
  </div>
</template>

<script>
import { api } from "@/api";
import InputField from "@/components/InputField.vue";
import { useUserStore } from "@/store/UserStore";

export default {
  name: "LoginPage",
  components: { InputField },
  data() {
    return {
      userstore: useUserStore(),
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.password) {
        alert("모든필드 입력하주세요");
        return;
      }

      const payload = {
        email: this.email,
        password: this.password,
      };
      try {
        const response = await api.post("/users/login", payload);
        this.userstore.setUser(response.data);
        this.userstore.saveToken(response.data.access_token);
        this.$router.push("/main");
      } catch (error) {
        console.error("로그인 실패", error);
        alert("로그인 실패");
      }
    },
  },
};
</script>

<style scoped>
.signup-button {
  color: aqua;
  cursor: pointer;
}
</style>
