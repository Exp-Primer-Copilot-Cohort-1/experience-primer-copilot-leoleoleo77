function skillsMember() {
  return {
    skills: ['Javascript', 'React', 'Node'],
    addSkill: function(skill) {
      this.skills.push(skill);
    }
  }
}