<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col
              cols="12"
              md="4"
              v-for="({name,type,label,required},index) in inputs"
              :key="index" >
            <v-text-field
                v-model="data[name]"
                :type="type"
                :label="label"
                :required="required"
            />
          </v-col>
          <v-col md="12">
            <v-btn type="button" block class="mt-2" @click="insert">insert</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    inputs: [
      {
        name: 'name',
        type: 'text',
        label: 'name',
        required: true,
      },
      {
        name: 'family',
        type: 'text',
        label: 'family',
        required: true,
      },
      {
        name: 'email',
        type: 'email',
        label: 'email',
        required: true,
      },
      {
        name: 'password',
        type: 'password',
        label: 'password',
        required: true,
      },
    ],
    data: {
      name: null,
      family: null,
      email: null,
      password: null,
    },
  }),
  methods:{
    insert(){
      let headers = {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        'Accept': 'application/json',
      }
      let url = 'users/add';
      let body = this.data;
      window.axios.post(url, body, headers)
          .then((result) => {
            let user = result?.user ?? null;
            if(user){
              alert("user insert done :\n", `name:\t${user?.name}\n,family:\t${user?.family}\nemail:\t${user?.email}\n`)
            }
          })
          .catch((error) => {
            console.log('error:\t', error)
          });
    },
  }
}
</script>
