<template>
  <div id="loginIn">
    <div style="text-align:center">
    <Card style="width:50%">

        <Form ref="user" :model="user" :rules="ruleInline">
          <Form-item prop="username">
            <Input type="text" v-model="user.username" placeholder="username" style="width: 300px">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </Form-item>
          <Form-item prop="password">
            <Input type="password" v-model="user.password" placeholder="password" style="width: 300px">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </Form-item>
          <Form-item>
            <Button type="primary" @click="handleSubmit('user')">登录</Button>
          </Form-item>
        </Form>
    </Card>
    </div>
  </div>
</template>
<script>
 export default {
	data () {
            return {
                ACCESS_TOKEN:"",
                user: {
                    username: '',
                    password: '',
                    grant_type:'password'
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
          handleSubmit(name) {
            this.$refs[name].validate((valid) => {
              if (valid) {
					      this.$http.post("/connect/token", this.user,{emulateJSON:true})
                .then(function(response){
                  this.ACCESS_TOKEN = response.data.access_token;
                  this.$router.push("/CarOrderPanel");
					      }).catch(function(response){
                  console.log(response.data);
                })
              }
              else {
                this.$Message.error('登录验证失败!');
              }
            })
         }
       }
    }
</script>
