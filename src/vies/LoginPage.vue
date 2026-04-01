<template>
  <div>
    <div class="logo-container">
      <img src="@/assets/x-logo.png" class="logo" />
    </div>
    <InputField
      :type="'text'"
      :placeholder="'Emil'"
      :model-value="email"
      v-model="email"
    />
    <InputField
      :type="'password'"
      :placeholder="'Password'"
      :model-value="password"
      v-model="password"
    />
    <button class="button" @click="login">로그인하기</button>
    <div>
      계정이 없으신가요?
      <RouterLink class="signup-button" to="/signup">가입하기</RouterLink>
    </div>
  </div>
</template>

<script>
import InputField from "@/components/InputField.vue";
export default {
  name: "LoginPage",
  components: { InputField },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.email, this.password);
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
