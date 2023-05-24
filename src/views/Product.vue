<script setup>
import { useRoute } from "vue-router"
import { productList } from "../data/product_list.js";
import {watch} from "vue";

const route = useRoute()

const { productName, calories } = getProductDetails()

function getProductDetails () {
  const product = productList.find((product) => `${product.id}` === route.params.id)

  return { productName : product.name, calories: product.cal}
}
</script>

<template>
  <section class="s-header-title">
    <div class="container">
      <h1 class="title text-capitalize">{{ productName }}</h1>
    </div>
  </section>
  <section class="s-news">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-9 blog-cover">
          <div class="post-item-cover">
            <div class="post-header">
              <div class="post-thumbnail">
                <img src="@/assets/img/blog-1.jpg" alt="img">
              </div>
            </div>
            <div class="post-content">
              <div class="meta">
                <span class="post-by"><i class="fa fa-user" aria-hidden="true"></i><a href="#">By Rovadex</a></span>
                <span class="post-date"><i class="fa fa-calendar" aria-hidden="true"></i>October 31, 2019</span>
                <span class="post-category"><i class="fa fa-tag" aria-hidden="true"></i><a href="#">Fitness</a></span>
              </div>
              <h2 class="title">Sed ut perspiciatis unde omnis</h2>
              <div class="text">
                <p>Cras pulvinar mattis nunc sed blandit libero volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Amet consectetur adipiscing elit pellentesque. Ultricies tristique nulla aliquet enim tortor.</p>
                <p>Ultricies tristique nulla aliquet enim tortor. Arcu bibendum at varius vel pharetra vel turpis nunc eget. Et leo duis ut diam quam nulla. Cras pulvinar mattis nunc sed blandit libero volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Amet consectetur adipiscing elit pellentesque.</p>
                <blockquote>
                  <p>Arcu bibendum at varius vel pharetra vel turpis nunc eget. Et leo duis ut diam quam nulla. Cras pulvinar mattis nunc sed blandit libero volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Amet consectetur adipiscing elit pellentesque.</p>
                  <cite>By <a href="#">Kerry Ashman</a></cite>
                </blockquote>
                <p>Non odio euismod lacinia at quis. Auctor augue mauris augue neque gravida. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. In tellus integer feugiat scelerisque varius morbi enim. Fringilla ut morbi tincidunt augue interdum velit. Est velit egestas dui id ornare arcu odio. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Amet massa vitae tortor condimentum lacinia quis vel. Ut tellus elementum sagittis vitae et</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-3 sidebar">
          <a href="#" class="btn btn-sidebar"><span>Widgets</span></a>
          <ul class="widgets">
            <li class="widget widget-recent-posts">
              <h3 class="title">Recent Blog Posts</h3>
              <ul>
                <li>
                  <a href="#">Mobile App Design: From Beginner to Intermediate</a>
                  <div class="date"><i class="fa fa-calendar" aria-hidden="true"></i>Dec 27, 2019 at 5:47 pm</div>
                </li>
                <li>
                  <a href="#">Et harum quidem rerum facilis est et expedita distinctio</a>
                  <div class="date"><i class="fa fa-calendar" aria-hidden="true"></i>Dec 17, 2018 at 5:47 pm</div>
                </li>
                <li>
                  <a href="#">Nam libero tempore, cum soluta nobis est eligendi optio</a>
                  <div class="date"><i class="fa fa-calendar" aria-hidden="true"></i>Dec 8, 2018 at 5:47 pm</div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.s-header-title {
  background-image: url('@/assets/img/bg-1-min.png');
  & > .container {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}
</style>
