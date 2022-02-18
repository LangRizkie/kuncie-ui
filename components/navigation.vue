<template>
  <Div class="navigation_container">
    <Div class="navigation_wrapper">
      <Div class="flex w-[75%] h-full px-4 text-black items-center justify-between">
        <ButtonIcon icon="ri-home-6-line" :scale="1.4" />
        <ButtonIcon icon="ri-group-line" :scale="1.4" />
        <ButtonIcon icon="ri-chat-3-line" :scale="1.4" />
        <ButtonIcon icon="ri-play-circle-line" :scale="1.4" />
      </Div>
      <Div class="flex absolute w-full h-0 px-8 items-center justify-end">
        <Button class="flex items-center justify-center">
          <Img width="80" src="/kuncie.svg" />
          <client-only>
            <VIcon class="absolute" name="ri-flashlight-fill" scale="2" />
          </client-only>
        </Button>
      </Div>
    </Div>
  </Div>
</template>

<style lang="scss" scoped>
.navigation {
  &_container {
   @apply flex
    fixed
    left-0
    bottom-0
    w-full
    h-16
    bg-white
    z-10
    justify-center;
  }

  &_wrapper {
   @apply flex
    relative
    w-full
    lg:w-screen-sm
    h-full
    px-4
    border-t
    flex-col;
  }
}
</style>
