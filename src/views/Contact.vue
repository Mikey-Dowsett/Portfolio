<template>
  <Card id="card">
    <template #title>
      <h1>Contact Me</h1>
      <Divider></Divider>
    </template>
    <template #content>
      <form ref="form" @submit.prevent="sendEmail">
        <FloatLabel class="label">
          <InputText
            id="username"
            name="from_name"
            v-model="name"
            required
          ></InputText>
          <label for="username">Name</label>
        </FloatLabel>
        <FloatLabel class="label">
          <InputText
            type="email"
            id="email"
            name="reply_to"
            v-model="email"
            required
          ></InputText>
          <label>Email</label>
        </FloatLabel>
        <FloatLabel class="label">
          <Textarea
            id="email"
            name="message"
            autoResize
            rows="5"
            cols="25"
            v-model="message"
            required
          ></Textarea>
          <label>Message</label>
        </FloatLabel>
        <Button
          type="submit"
          value="Send"
          icon="pi pi-envelope"
          label="Send Message"
          rounded
        ></Button>
      </form>
    </template>
  </Card>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm("service_9qg1m6k", "template_ugfs1jj", this.$refs.form, {
          publicKey: "0gUxLo6U8t0rp94Uh",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            this.name = "";
            this.email = "";
            this.message = "";
            this.showToast();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
    showToast() {
      this.$toast.add({
        severity: "success",
        summary: "Email Sent",
        detail: "Your message was sent successfully!",
        life: 3000,
      });
    },
  },
};
</script>

<style scoped>
#card {
  width: 90%;
  margin: 50px auto;
}
.label {
  margin: 30px auto;
}
@media only screen and (min-width: 768px) {
  #card {
    width: 30%;
  }
}
</style>
