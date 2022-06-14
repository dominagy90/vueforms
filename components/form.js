export default {
    name: 'formcomp',
    props: ['id'],
    data() {
        return {
            form: {
                id: this.id,
                name: '',
                age: null
            }
        }
    },
    methods: {
        submForm() {
            alert('csé')
            this.$emit('submitted', form)
        }
    },
    template: `
    <style>
        label {
            color: red;
        }
    </style>
    <div class="formdiv">
      <label>name</label>
      <input :value="text" @input="event => form.name = event.target.value">
      <label>age</label>
      <input :value="text" @input="event => form.age = event.target.value">
      <button @click="event => this.$emit('submitted',form)">submit</button>
    </div>`
}