<template>
  <div class="container">
    <h1>Customer Details</h1>
    <form>
      <div class="form-group">
        <label for="name">Customer Name:</label>
        <input type="text" class="form-control" id="email">
      </div>
      <div class="form-group">
        <label for="contactNum">Contact Number:</label>
        <input type="text" class="form-control" id="contactNum">
      </div>
      <div class="form-group">
        <label for="address">Address:</label>
        <input type="text" class="form-control" id="pwd">
      </div>
      <button type="submit" class="btn btn-primary">Save</button>
    </form>`
  </div>
</template>
<style scoped lang='scss'>
.container {
  width: 50%;
}
</style>