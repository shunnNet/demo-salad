<script setup>
defineProps({
  info: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="feat-card">
    <div class="feat-card__image">
      <img :src="info.icon" alt="feat card image" />
    </div>
    <div class="feat-card__content">
      <h3 class="feat-card__title">{{ info.title }}</h3>
      <p class="feat-card__description">
        {{ info.content }}
      </p>

      <button class="feat-card__action">VIEW MORE</button>
    </div>
  </div>
</template>
<style lang="scss">
$feat-card-theme: theme(light);
.feat-card {
  color: $feat-card-theme;

  &__image {
    @include circle(108px);
    background-color: $feat-card-theme;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 20px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    @include max-box(269px);
    height: 40px;
    margin-bottom: 15px;

    text-align: center;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    white-space: pre-wrap;
  }

  &__description {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 28px;
    text-align: center;
  }

  &__action {
    border: 2px solid $feat-card-theme;
    background-color: transparent;
    padding: 20px 35px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 2.22px;
    color: $feat-card-theme;
    border-radius: $border-radius;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: $feat-card-theme;
      color: theme(dark);
    }
  }
  .feat-card__image {
    animation-name: FoodJumpJump;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
  }

  @include breakpoint('mobile') {
    .feat-card__image {
      animation-name: none;
    }

    &:hover {
      .feat-card__image {
        animation-name: FoodJumpJump;
      }
    }
  }
}
@keyframes FoodJumpJump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
