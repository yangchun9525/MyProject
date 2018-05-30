
<template>
    <div id="loginIn">
        <div style="text-align:center">
            <Card style="width:50%">

                <Form ref="info" :model="info" :rules="ruleInline" :label-width="120">
                    第一步：填写司机信息
                    <Form-item prop="Name" label="司机姓名:">
                        <Input type="text" v-model="info.Name" placeholder="司机姓名" style="width: 300px">

                        </Input>
                    </Form-item>
                    <Form-item prop="Phone" label="接单手机号:">
                        <Input type="text" v-model="info.Phone" placeholder="接单手机号" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="IDCarNo" label="身份证号:">
                        <Input type="text" v-model="info.IDCarNo" placeholder="身份证号" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="IDCarNo" label="驾驶证号:">
                        <Input type="text" v-model="info.IDCarNo" placeholder="驾驶证号" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="DrivingLicenseValidFrom" label="初次领证日期:">
                        <Date-picker type="date" v-model="info.DrivingLicenseValidFrom" format="yyyy年MM月dd日" placeholder="选择日期" style="width: 300px"></Date-picker>
                    </Form-item>
                </Form>

                <Form ref="info" :model="info" :rules="ruleInline" :label-width="120">
                    第二步：完善车辆信息
                    <Form-item prop="CityName" label="填写上线城市:">
                        <Input type="text" v-model="info.CityName" placeholder="填写上线城市" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="serviceProvince" label="选择服务省份:">
                        <Select v-model="province11" style="width: 300px" @on-change="getCityList()">
                            <Option v-for="item1 in province" :value="item1.value" :key="item1.value">{{ item1.label }}</Option>
                        </Select>
                    </Form-item>

                    <Form-item prop="serviceCity" label="选择服务城市">
                        <Select v-model="city11" style="width: 300px" @on-change="getCityName()">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </Form-item>

                    <Form-item prop="LicensePlateNumber" label="车牌号码:">
                        <Input type="text" v-model="info.LicensePlateNumber" placeholder="车牌号码" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="Color" label="车辆颜色:">
                        <Input type="text" v-model="info.Color" placeholder="车辆颜色" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="Model" label="品牌型号:">
                        <Input type="text" v-model="info.Model" placeholder="品牌型号" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="Owner" label="车辆所有人:">
                        <Input type="text" v-model="info.Owner" placeholder="车辆所有人" style="width: 300px">
                        </Input>
                    </Form-item>
                    <Form-item prop="PurchaseDate" label="购买日期:">
                        <Date-picker type="date"  v-model="info.PurchaseDate" placeholder="选择日期" format="yyyy年MM月dd日" style="width: 300px"></Date-picker>
                    </Form-item>

                    <Form-item prop="CarClass" label="车辆规格:">
                        <Select placeholder="请选择" v-model="info.CarClass" style="width: 300px">
                            <Option :value="-1" :key="-1">(不限)</Option>
                            <Option :value="1" :key="1">经济型</Option>
                            <Option :value="2" :key="2">舒适型</Option>
                            <Option :value="3" :key="3">商务型</Option>
                            <Option :value="4" :key="4">豪华型</Option>
                        </Select>
                    </Form-item>

                    <Form-item prop="motorcade" label="公司信息:">

                        <Select v-model="carRentalCompanies11" style="width: 300px">
                            <Option v-for="item in carRentalCompanies" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </Form-item>

                     <div class="demo-upload-list">
                        <template>
                            <img :src="portraitImageUrl">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(portraitImageUrl)"></Icon>
                            </div>
                        </template>
                     </div>
                    <Upload action="/CarApi/Upload"
                            name="files"
                            :show-upload-list="false"
                            :on-success="handleSuccess1"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload">
                        <Button type="ghost" icon="ios-cloud-upload-outline">司机正面照</Button>
                    </Upload>

                    <div class="demo-upload-list">
                        <template>
                            <img :src="drivingLicenseImageUrl">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(drivingLicenseImageUrl)"></Icon>
                            </div>
                        </template>
                    </div>
                    <Upload action="/CarApi/Upload"
                            name="files"
                            :show-upload-list="false"
                            :on-success="handleSuccess2"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload">
                        <Button type="ghost" icon="ios-cloud-upload-outline">上传驾照</Button>
                    </Upload>

                    <div class="demo-upload-list">
                        <template>
                            <img :src="photoUrl">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(photoUrl)"></Icon>
                            </div>
                        </template>
                    </div>
                    <Upload action="/CarApi/Upload"
                            name="files"
                            :show-upload-list="false"
                            :on-success="handleSuccess3"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload">
                        <Button type="ghost" icon="ios-cloud-upload-outline">车身正面照</Button>
                    </Upload>

                    <div class="demo-upload-list">
                        <template>
                            <img :src="jointPhotoWithCarUrl">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(jointPhotoWithCarUrl)"></Icon>
                            </div>
                        </template>
                    </div>
                    <Upload action="/CarApi/Upload"
                            name="files"
                            :show-upload-list="false"
                            :on-success="handleSuccess4"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload">
                        <Button type="ghost" icon="ios-cloud-upload-outline">人车合影</Button>
                    </Upload>

                    <div class="demo-upload-list">
                        <template>
                            <img :src="vehicleLicenseImgUrl">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(vehicleLicenseImgUrl)"></Icon>
                            </div>
                        </template>
                    </div>
                    <Upload action="/CarApi/Upload"
                            name="files"
                            :show-upload-list="false"
                            :on-success="handleSuccess5"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload">
                        <Button type="ghost" icon="ios-cloud-upload-outline">行驶证照片</Button>
                    </Upload>

                    <div class="demo-upload-list">
                        <template>
                            <img :src="commercialInsuranceImgUrl">
                            <div class="demo-upload-list-cover">
                                <Icon type="ios-eye-outline" @click.native="handleView(commercialInsuranceImgUrl)"></Icon>
                            </div>
                        </template>
                    </div>
                    <Upload action="/CarApi/Upload"
                            name="files"
                            :show-upload-list="false"
                            :on-success="handleSuccess6"
                            :format="['jpg','jpeg','png']"
                            :max-size="2048"
                            :on-format-error="handleFormatError"
                            :on-exceeded-size="handleMaxSize"
                            :before-upload="handleBeforeUpload">
                        <Button type="ghost" icon="ios-cloud-upload-outline">车辆商业保险</Button>
                    </Upload>
                    <Modal title="查看图片" v-model="visible">
                        <img :src="modalUrl" v-if="visible" style="width: 100%">
                    </Modal>

                    <Form-item>
                        <Button type="primary" @click="handleSubmit()">录入司机并审核通过</Button>
                    </Form-item>
                </Form>
            </Card>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                ruleInline: {
                    CityName: [{ required: true, message: '请填写上线城市', trigger: 'blur' }],
                    LicensePlateNumber: [{ required: true, message: '请填写车牌号码', trigger: 'blur' }],
                    Model: [{ required: true, message: '请填写品牌型号', trigger: 'blur' }],
                    Owner: [{ required: true, message: '请填写车辆所有人', trigger: 'blur' }],
                    Color: [{ required: true, message: '请填写颜色', trigger: 'blur' }],
                    DrivingLicenseValidFrom: [
                        { required: true, message: '请填写日期', trigger: 'blur' },
                        {
                            validator(rule, value, callback, source, options)
                            {
                                var errors = [];
                                console.log(value);
                                console.log(new Date());
                                if (value > new Date()) {
                                    callback('输入时间不能大于当前时间');
                                }
                                callback(errors);
                            }
                        }
                    ],
                    PurchaseDate: [
                        { required: true, message: '请填写日期', trigger: 'blur' },
                        {
                            validator(rule, value, callback, source, options) {
                                var errors = [];
                                console.log(value);
                                console.log(new Date());
                                if (value > new Date()) {
                                    callback('输入时间不能大于当前时间');
                                }
                                callback(errors);
                            }
                        }
                    ],
                    Name: [
                        { required: true, message: '请填写姓名', trigger: 'blur' }
                    ],
                    Phone: [
                        { required: true, message: '请填写手机号', trigger: 'blur' },
                        {
                            validator(rule, value, callback, source, options) {
                                var errors = [];
                                if (!/^1[0-9]{10}$/.test(value)) {
                                    callback('输入正确的手机号');
                                }
                                callback(errors);
                            }
                        }
                    ],
                    IDCarNo:[
                        {
                            required: true, message: '不能为空'
                        },
                        {
                            validator(rule, value, callback, source, options)
                            {
                                var errors = [];
                                if (!/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)) {
                                    callback('输入正确的数值');
                                }
                                callback(errors);
                            }
                        }
                    ]
                },
                province11: '',
                info: {},
                province: [],
                carRentalCompanies: [],
                carRentalCompanies11:'',
                cityList: [],
                city11: '',
                data:'',
                defaultList: [

                ],
                fileName:'',
                imgName: '',
                visible: false,
                uploadList: [],
                portraitImageUrl:'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar',
                portraitImageName: '',
                drivingLicenseImageUrl: 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar',
                drivingLicenseImageName: '',
                photoUrl: 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar',
                photoName: '',
                jointPhotoWithCarUrl: 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar',
                jointPhotoWithCarName: '',
                vehicleLicenseImgUrl: 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar',
                vehicleLicenseImgName: '',
                commercialInsuranceImgUrl: 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar',
                commercialInsuranceImgName: '',
                modalUrl:''
            }
        },
        //CommercialInsuranceImgUrl,VehicleLicenseImgUrl,PhotoUrl,DrivingLicenseImageUrl,JointPhotoWithCarUrl,PortraitImageUrl,ServiceRegion(省+市),fleet公司信息，把公司id传过去
        methods: {
            handleSubmit() {
                console.log(this.info);
                console.log(this.province11 + this.city11);
                console.log(this.province11);
                console.log(this.city11);
                console.log(this.carRentalCompanies11);
                console.log(this.vehicleLicenseImgUrl);
                console.log(this.commercialInsuranceImgUrl);
                console.log(this.photoUrl);
                console.log(this.drivingLicenseImageUrl);
                console.log(this.jointPhotoWithCarUrl);
                console.log(this.portraitImageUrl);
                this.$http({
                    url: "/CarApi/AddCarsDriver",
                    method: 'POST',
                    body: this.info,
                    params: {
                        CommercialInsuranceImgUrl: this.commercialInsuranceImgUrl,
                        VehicleLicenseImgUrl: this.vehicleLicenseImgUrl,
                        PhotoUrl: this.photoUrl,
                        DrivingLicenseImageUrl: this.drivingLicenseImageUrl,
                        JointPhotoWithCarUrl: this.jointPhotoWithCarUrl,
                        PortraitImageUrl: this.portraitImageUrl,
                        ServiceRegion: this.province11 + this.city11,
                        Fleet: this.carRentalCompanies11
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                    this.$Message.error('录入失败!');
                })
            },
            getCityList() {
                console.log(this.province11);
                this.$http({
                    url: "/CarApi/GetCityName",
                    method: 'POST',
                    params: {
                        CityName: this.province11
                    }
                }).then(function (response) {
                    setTimeout(() => {
                        const cityList = response.data.map(item => {
                            return {
                                value: item.Name,
                                label: item.Name
                            };
                        });
                        this.cityList = cityList;
                        console.log(this.cityList);
                    }, 200);
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                })
            },
            getCityName() {
                console.log(this.city11);
            },
            handleView(name) {
                this.modalUrl = name;
                this.imgName = name;
                this.visible = true;
            },
            handleSuccess2(res, file, response) {
                // 因为上传过程为实例，这里模拟添加 url
                this.drivingLicenseImageUrl = 'http://qiniu.kc.com/' + res.files;
                this.drivingLicenseImageName = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleSuccess1(res, file, response) {
                // 因为上传过程为实例，这里模拟添加 url
                this.portraitImageUrl = 'http://qiniu.kc.com/' + res.files;
                this.portraitImageName = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleSuccess3(res, file, response) {
                console.log(res, file, response);
                // 因为上传过程为实例，这里模拟添加 url
                this.photoUrl = 'http://qiniu.kc.com/' + res.files;
                this.photoName = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleSuccess4(res, file, response) {
                console.log(res, file, response);
                // 因为上传过程为实例，这里模拟添加 url
                this.jointPhotoWithCarUrl = 'http://qiniu.kc.com/' + res.files;
                this.jointPhotoWithCarName = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleSuccess5(res, file, response) {
                console.log(res, file, response);
                // 因为上传过程为实例，这里模拟添加 url
                this.vehicleLicenseImgUrl = 'http://qiniu.kc.com/' + res.files;
                this.vehicleLicenseImgName = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleSuccess6(res, file, response) {
                console.log(res, file, response);
                // 因为上传过程为实例，这里模拟添加 url
                this.commercialInsuranceImgUrl = 'http://qiniu.kc.com/' + res.files;
                this.commercialInsuranceImgName = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError(file) {
                this.$Notice.warning({
                    title: '文件格式不正确',
                    desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
                });
            },
            handleMaxSize(file) {
                console.log(file);
                this.$Notice.warning({
                    title: '超出文件大小限制',
                    desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
                });
            },
            handleBeforeUpload(file) {
                console.log(file);
                console.log(file.name);
                this.fileName = file.name;
                const check = this.uploadList.length < 6;
                console.log(this.uploadList);
                if (!check) {
                    this.$Notice.warning({
                        title: '最多只能上传 6 张图片。'
                    });
                }
                return check;
            }
        },

        created() {
          var respinse = this.$store.commit("getContentlist", this.data);
          console.log("----------------------------------");
          console.log(respinse);
          console.log("----------------------------------");
            const CarId = this.$route.params.CarId;
            const insert = this.$route.params.insert;
            console.log(CarId);
            this.$http({
                url: "/CarApi/GetCarAndDriverList",
                method: 'POST',
                params: {
                    Carid: CarId,
                    insert: insert
                }
            }).then(function (response) {
                this.info = response.data[0];
                console.log(response);
            }).catch(function (response) {
                console.log(response);
            }),
            this.$http({
                url: "/CarApi/GetCityProvinceName",
                method: 'POST'
            }).then(function (response) {
                setTimeout(() => {
                    const province = response.data.map(item => {
                        return {
                            value: item,
                            label: item
                        };
                    });
                    this.province = province;
                    console.log(this.province);
                }, 200);
            }).catch(function (response) {
                console.log(response);
            }),
            this.$http({
                url: "/CarApi/GetCarRentalCompanies",
                method: 'POST'
            }).then(function (response) {
                setTimeout(() => {
                    const carRentalCompanies = response.data.map(item => {
                        return {
                            value: item.CarRentalCompanyId,
                            label: item.Name
                        };
                    });
                    this.carRentalCompanies = carRentalCompanies;
                    console.log(this.carRentalCompanies);
                }, 200);
                console.log(response);
            }).catch(function (response) {
                console.log(response);
            })
        }
    }
</script>
<style>
    .demo-upload-list {
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }

        .demo-upload-list img {
            width: 100%;
            height: 100%;
        }

    .demo-upload-list-cover {
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }

    .demo-upload-list:hover .demo-upload-list-cover {
        display: block;
    }

    .demo-upload-list-cover i {
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>
