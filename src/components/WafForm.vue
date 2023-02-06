<template>
  <div :class="classes">
    <label :for="'checked' + task.id" :aria-label="'archiveTask-' + task.id" class="checkbox">
      <input type="checkbox" :checked="isChecked" disabled :name="'checked' + task.id" :id="'archiveTask-' + task.id" />
      <span class="checkbox-custom" @click="archiveTask" />
    </label>
    <label :for="'title-' + task.id" :aria-label="task.title" class="title">
      <input type="text" readonly :value="task.title" :id="'title-' + task.id" name="title" placeholder="Input title"
        style="text-overflow: ellipsis" />
      />
    </label>
    <button v-if="!isChecked" class="pin-button" @click="pinTask" :id="'pinTask-' + task.id"
      :aria-label="'pinTask-' + task.id">
      <span class="icon-star" />
    </button>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "WafForm",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({ id: "", state: "", title: "" }),
      validator: (task) => ["id", "state", "title"].every((key) => key in task),
    },
  },
};
</script>
