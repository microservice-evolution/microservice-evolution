(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71b478a2"],{"4bd4":function(e,t,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var i=r("5530"),s=r("58df"),a=r("7e2b"),n=r("3206");t["a"]=Object(s["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,r=function(e){return e.$watch("hasError",(function(r){t.$set(t.errorBag,e._uid,r)}),{immediate:!0})},i={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",(function(s){s&&(t.errorBag.hasOwnProperty(e._uid)||(i.valid=r(e)))})):i.valid=r(e),i},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var r=this.watchers.find((function(e){return e._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"73cf":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"base_register"}},[r("v-app",{attrs:{id:"container"}},[r("v-form",{ref:"registerForm",staticClass:"register_container",attrs:{model:e.registerForm,rules:e.rules,"label-position":"left","label-width":"0px"}},[r("p",{staticClass:"register_title"},[e._v("Sign Up")]),r("v-text-field",{attrs:{type:"text",label:"username",hint:"5-32 characters consisting of letters/numbers/special characters(-_)",rules:[e.rules.usernameValidate],"validate-on-blur":!0,"prepend-icon":"account_circle"},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}}),r("v-text-field",{attrs:{type:"password",label:"password",hint:"6-32 characters  consisting of letters/numbers/special characters(-_), at least two categories above and must not contain your username",rules:[e.rules.passwordValidate,e.rules.notContainUsername],"validate-on-blur":!0,"prepend-icon":"lock"},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}}),r("v-text-field",{attrs:{type:"password",label:"confirm-password",rules:[e.rules.confirmPassword],"validate-on-blur":!0,"prepend-icon":"lock"}}),r("v-text-field",{attrs:{type:"text",label:"fullname",hint:"2-4 words seperated by space",rules:[e.rules.fullnameValidate],"validate-on-blur":!0,"prepend-icon":"person"},model:{value:e.registerForm.fullname,callback:function(t){e.$set(e.registerForm,"fullname",t)},expression:"registerForm.fullname"}}),r("v-text-field",{attrs:{type:"text",label:"email-address",rules:[e.rules.emailValidate],"validate-on-blur":!0,"prepend-icon":"mail"},model:{value:e.registerForm.email,callback:function(t){e.$set(e.registerForm,"email",t)},expression:"registerForm.email"}}),r("v-text-field",{attrs:{type:"text",label:"region",rules:[e.rules.required],"validate-on-blur":!0,"prepend-icon":"location_on"},model:{value:e.registerForm.region,callback:function(t){e.$set(e.registerForm,"region",t)},expression:"registerForm.region"}}),r("v-text-field",{attrs:{type:"text",label:"institution",rules:[e.rules.required],"validate-on-blur":!0,"prepend-icon":"business"},model:{value:e.registerForm.institution,callback:function(t){e.$set(e.registerForm,"institution",t)},expression:"registerForm.institution"}}),r("div",[r("v-btn",{staticStyle:{width:"50%",border:"none"},attrs:{id:"submit"},on:{click:function(t){return e.register(e.registerForm)}}},[e._v("CREATE ACCOUNT")])],1),r("router-link",{attrs:{to:"login"}},[r("div",{attrs:{id:"login"}},[e._v("Already have an account? Login now!")])])],1)],1)],1)},s=[],a=(r("caad"),r("ac1f"),r("2532"),r("5319"),{name:"Register",data:function(){var e=this;return{registerForm:{username:"",password:"",fullname:"",usertype:"",region:"",email:"",institution:""},rules:{required:function(e){return!!e||"This field is required."},confirmPassword:function(t){return t==e.registerForm.password||"This field should be identical to password"},notContainUsername:function(t){return!t.includes(e.registerForm.username)||"password must not contain your username"},usernameValidate:function(e){var t=/^[A-Za-z\-][A-Za-z\d_\-]{4,31}$/;return!!t.test(e)||(/^[\d]/.test(e)?"username begins with letters or special characters(-_)":"5-32 characters consisting of letters/numbers/special characters(-_)")},passwordValidate:function(e){var t=/^[a-zA-Z_\d\-]{6,32}$/,r=0;return/.*[a-zA-Z].*/.test(e)&&r++,/.*\d.*/.test(e)&&r++,/.*[_\-].*/.test(e)&&r++,!!(r>=2&&t.test(e))||"6-32 characters  consisting of letters/numbers/special characters(-_), at least two categories above and must not contain your username"},fullnameValidate:function(e){var t=/^([A-Za-z]*( |$)){2,4}$/;return!!t.test(e)||"2-4 words seperated by space"},emailValidate:function(e){var t=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return!!t.test(e)||"Invalid email address"}},loading:!1}},methods:{register:function(e){var t=this;if(!this.$refs.registerForm.validate())return!1;this.$axios.post("api/register",{username:this.registerForm.username,password:this.registerForm.password,fullname:this.registerForm.fullname,region:this.registerForm.region,email:this.registerForm.email,institution:this.registerForm.institution,authorities:[this.registerForm.usertype]}).then((function(e){200===e.status?"success"===e.data.responseMessage&&(t.$toast("successful registration",{color:"green"}),window.setTimeout(function(){this.$router.replace("login")}.bind(t),2e3)):t.$toast("register error due to network problem",{color:"red"})})).catch((function(e){t.$toast("register error due to network problem",{color:"red"})}))}}}),n=a,o=(r("f269"),r("2877")),u=r("6544"),l=r.n(u),c=r("7496"),d=r("8336"),f=r("4bd4"),p=r("8654"),m=Object(o["a"])(n,i,s,!1,null,"7821c387",null);t["default"]=m.exports;l()(m,{VApp:c["a"],VBtn:d["a"],VForm:f["a"],VTextField:p["a"]})},7496:function(e,t,r){"use strict";var i=r("5530"),s=(r("df86"),r("7560")),a=r("58df");t["a"]=Object(a["a"])(s["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:Object(i["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},"8d2a":function(e,t,r){},df86:function(e,t,r){},f269:function(e,t,r){"use strict";r("8d2a")}}]);
//# sourceMappingURL=chunk-71b478a2.a4cf2d55.js.map