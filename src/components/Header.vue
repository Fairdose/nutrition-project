<script setup>
import { ref, watch } from "vue";
import router from "../routes/index.js";

import { productList } from "../data/product_list.js";

const { productName, navigateProductPage } = productOptions()

function productOptions () {
  const productName = ref()

  const navigateProductPage = () => {
    const product = productList.find((product) => product.name === productName.value)

    if (product) {
      router.push({ name: 'detailProduct', params: { id : product.id }})
    }
  }

  return { productName, navigateProductPage }
}

function searchBehaviour () {

}

</script>

<template>
  <header class="header">
    <div class="top-panel">
      <div class="container">
        <div class="header-left">
          <router-link to="/">Nutrition Project</router-link>
        </div>
        <div class="header-right">
          <form class="search-form" @submit.prevent="navigateProductPage">
            <input type="search" list="nutrition-list" class="search-form__field" placeholder="Search"
                   v-model="productName"
                   @focus="productName = ''"
                   autocomplete="off">
            <datalist id="nutrition-list">
              <option v-for="product in productList">{{ product.name }}</option>
            </datalist>
            <button type="submit" class="search-form__submit"><i class="fa fa-search" aria-hidden="true"></i></button>
          </form>
          <div class="user-container">
            <nav>
              <ul class="nav-list">
                <li class="dropdown">
                  <i class="fa fa-user-circle"></i>
                </li>
              </ul></nav>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0">
  </header>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  background: #202020;
  .top-panel {
    display: flex;
    justify-content: center;

    & > .container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 2rem;
      max-width: 1280px;

      .user-container {
        i {
          color: #f23849;
          cursor: pointer;
        }
      }
    }
  }
  input[name="nutrition-list"] {
    position: relative;
    left: 0;
    &:focus {
      padding: 0 0.5rem;
      & ~ datalist {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        option {
          background-color: red;
        }
      }
    }
  }
}
</style>
