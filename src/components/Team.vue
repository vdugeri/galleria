<template>
  <section class="team">
    <h2 class="team__header">Team</h2>
    <div class="team__members">
      <TeamMember
        v-for="member in members"
        :key="member.id"
        :photo="member.photo"
        :name="member.name"
      />
    </div>
  </section>
</template>

<script>
import TeamMember from "@/components/TeamMember.vue";

export default {
  components: {
    TeamMember
  },

  computed: {
    members() {
      return this.$store.state.members;
    }
  }
};
</script>

<style lang="scss" scoped>
.team {
  &__header {
    margin: 2rem 12rem;
    font-size: 2.5rem;
    font-weight: 400;
    text-transform: uppercase;
    align-self: flex-start;
  }

  &__members {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 100vw;
    position: relative;
  }

  &__member {
    max-width: 30%;
  }
}
</style>
