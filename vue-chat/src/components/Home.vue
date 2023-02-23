<template>
  <form className="home__container">
    <!-- /*onSubmit="{handleSubmit}"*/ -->
    <h2 className="home__header">Sign in to Open Chat</h2>
    <label htmlFor="username">Username</label>
    <input
      type="text"
      minLength="6"
      name="username"
      id="username"
      className="username__input"
    />
    <!-- /* value={userName} onChange={(e) => setUserName(e.target.value)} */ -->
    <button className="home__cta">SIGN IN</button>
  </form>
</template>
<script>
export default {
  name: "Home",
  handleSubmit(e) {
    e.preventDefault();
    // localStorage.setItem("userName", userName);
    // socket.emit("newUser", { userName, socketID: socket.id });
    // navigate("/chat");
  },
};
</script>

<style></style>
