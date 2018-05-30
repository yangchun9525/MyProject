<template>
   <div>
       <Form ref="info" inline :label-width="100">
           <Row>
               <i-col span="20">
                   <Form-item label="服务城市55511">
                       <Select placeholder="请选择" v-model="serviceCity" style="width: 100px">
                           <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                       </Select>
                   </Form-item>
                   <Form-item label="车辆规格">
                       <Select placeholder="请选择" style="width: 100px" v-model="specification">
                           <Option :value="-1" :key="-1">(不限)</Option>
                           <Option :value="1" :key="1">经济型</Option>
                           <Option :value="2" :key="2">舒适型</Option>
                           <Option :value="3" :key="3">豪华型</Option>
                           <Option :value="4" :key="4">奢华型</Option>
                           <Option :value="5" :key="5">商务型</Option>
                           <Option :value="6" :key="6">10座小巴</Option>
                           <Option :value="7" :key="7">豪华商务型</Option>
                           <Option :value="8" :key="8">8座小巴</Option>
                       </Select>
                   </Form-item>
                   <Form-item label="司机状态">
                       <Select placeholder="请选择" style="width: 100px" v-model="state">
                           <Option :value="-1" :key="-1">(不限)</Option>
                           <Option :value="1" :key="1">审核中</Option>
                           <Option :value="2" :key="2">审核通过</Option>
                           <Option :value="3" :key="3">审核不通过</Option>
                           <Option :value="4" :key="4">已冻结</Option>
                       </Select>
                   </Form-item>
                   <Form-item label="车队信息">
                       <Select placeholder="请选择" v-model="carRentalCompany" style="width: 300px">
                           <Option v-for="item in carRentalCompanies" :value="item.value" :key="item.value">
                               {{ item.label }}
                           </Option>
                       </Select>
                   </Form-item>
                </i-col>
            </Row>
           <Row>
               <i-col span="20">
                   <Form-item prop="name">
                       <Input type="text" v-model="name" placeholder="司机姓名" style="width: 200px"></Input>
                   </Form-item>
                   <Form-item prop="phone">
                       <Input type="text" v-model="phone" placeholder="司机电话" style="width: 200px"></Input>
                   </Form-item>

                   <Form-item prop="model">
                       <Input type="text" v-model="model" Models placeholder="具体车型" style="width: 200px"></Input>
                   </Form-item>

                   <Form-item prop="city">
                       <Input type="text" v-model="city" placeholder="选择城市" style="width: 200px"></Input>
                   </Form-item>

                   <Form-item prop="vehicleNumber ">
                       <Input type="text" v-model="vehicleNumber" placeholder="车辆号码" style="width: 200px"></Input>
                   </Form-item>

                   <Form-item>
                       <i-button type="primary" @click="queryButtonClick">查询</i-button>
                   </Form-item>
                </i-col>
            </Row>
        </Form>
       <Table border :columns="columns7" :data="driverInfoList"></Table>
       <Page :total="total" @on-change="getPageData" :page-size="pageSize" align="center" show-elevator/>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                total: 0,
                pageSize: 20,
                pageIndex: 1,
                cityList: [],
                serviceCity: '',
                vehicleNumber: '',
                city: '',
                model: '',
                name: '',
                phone: '',
                state: '',
                specification: '',
                carRentalCompanies: [],
                carRentalCompany: '',
                driverInfoList: [],
                columns7: [
                    {
                        title: '编号',
                        key: 'number'
                    },
                    {
                        title: '服务城市',
                        key: 'ServiceRegion'
                    },
                    {
                        title: '司机姓名',
                        key: 'Name'
                    },
                    {
                        title: '司机电话',
                        key: 'Phone'
                    },
                    {
                        title: '具体车型',
                        key: 'model'
                    },
                    {
                        title: '车辆规格',
                        key: 'CarClass'
                    },
                    {
                        title: '选择城市',
                        key: 'CityName'
                    },
                    {
                        title: '车辆牌号',
                        key: 'LicensePlateNumber'
                    },
                    {
                        title: '车队信息',
                        key: 'Fleet'
                    },
                    {
                        title: '状态',
                        key: 'State'
                    },
                    {
                        title: '查看车辆信息',
                        key: 'carInfo',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看车辆信息')])
                        }
                    },
                    {
                        title: '密码重置',
                        key: 'pwdReset',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.pwdReset(params.index)
                                        }
                                    }
                                }, '密码重置')])
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        height:200,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.updateState(params.index)
                                        }
                                    }
                                }, params.row.action)
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            queryButtonClick() {
                console.log(this.serviceCity);
                console.log(this.vehicleNumber);
                console.log(this.city);
                console.log(this.model);
                console.log(this.name);
                console.log(this.phone);
                console.log(this.state);
                console.log(this.specification);
                console.log(this.carRentalCompany);
                this.$http({
                    url: "http://localhost:2595/CarApi/GetCarList",
                    method: 'POST',
                    params: {
                        ServiceRegion: this.serviceCity,
                        Name: this.name,
                        Phone: this.phone,
                        model: this.model,
                        LicensePlateNumber: this.vehicleNumber,
                        Owner: this.carRentalCompany,
                        state: this.state,
                        cityname: this.city,
                        CarClass: this.specification,
                        PageSize: this.pageSize,
                        CurPage: this.pageIndex
                    }
                }).then(function (response) {
                    setTimeout(() => {
                        const driverInfoList = response.data.data.map((item, i) => {
                            return {
                                number: (this.pageIndex - 1) * this.pageSize + i + 1,
                                ServiceRegion: item.ServiceRegion,
                                Name: item.Name,
                                Phone: item.Phone,
                                model: item.model,
                                LicensePlateNumber: item.LicensePlateNumber,
                                Owner: item.Owner,
                                State: item.State === 1 ? '审核中' : item.State === 2 ? '审核通过' : item.State === 3 ? '审核不通过' : '已冻结',
                                CarClass: item.CarClass === 1 ? '经济型' : item.CarClass === 2 ? '舒适性' : item.CarClass === 3 ? '豪华型' : '商务型',
                                CityName: item.CityName,
                                Fleet: item.Fleet,
                                CarId: item.CarID,
                                action: item.State === 4 ? '解冻' : '冻结'
                            };
                        });
                        console.log(driverInfoList);
                        this.driverInfoList = driverInfoList;
                        this.total = response.data.total;
                        //    this.cityList = cityList;
                        //console.log(this.cityList);
                    }, 200);
                    //this.driverInfoList = response.data.data;
                    //this.total = response.data.total;
                    //console.log(response);
                }).catch(function (response) {
                    console.log(response);
                })
            },
            getPageData(pageIndex) {
                this.pageIndex = pageIndex;
                console.log(this.pageIndex);
                this.$http({
                    url: "http://localhost:2595/CarApi/GetCarList",
                    method: 'POST',
                    params: {
                        ServiceRegion: this.serviceCity,
                        Name: this.name,
                        Phone: this.phone,
                        model: this.model,
                        LicensePlateNumber: this.vehicleNumber,
                        Owner: this.carRentalCompany,
                        state: this.state,
                        cityname: this.city,
                        CarClass: this.specification,
                        PageSize: this.pageSize,
                        CurPage: this.pageIndex
                    }
                }).then(function (response) {
                    setTimeout(() => {
                        const driverInfoList = response.data.data.map((item, i) => {
                            return {
                                number: (this.pageIndex - 1) * this.pageSize + i + 1,
                                ServiceRegion: item.ServiceRegion,
                                Name: item.Name,
                                Phone: item.Phone,
                                model: item.model,
                                LicensePlateNumber: item.LicensePlateNumber,
                                Owner: item.Owner,
                                State: item.State === 1 ? '审核中' : item.State === 2 ? '审核通过' : item.State === 3 ? '审核不通过' : '已冻结',
                                CarClass: item.CarClass === 1 ? '经济型' : item.CarClass === 2 ? '舒适性' : item.CarClass === 3 ? '豪华型' : '商务型',
                                CityName: item.CityName,
                                Fleet: item.Fleet,
                                CarId: item.CarID,
                                action: item.State === 4 ? '解冻' : '冻结'
                            };
                        });
                        console.log(driverInfoList);
                        this.driverInfoList = driverInfoList;
                        this.total = response.data.total;
                        //    this.cityList = cityList;
                        //console.log(this.cityList);
                    }, 200);
                }).catch(function (response) {
                    console.log(response);
                })
             //   this.$emit('page-index-changed');
            },
            show(index) {
                this.$router.push({
                    name: 'drvierEntry',
                    params: {
                        CarId: this.driverInfoList[index].CarId,
                        insert: 'true'
                    }
                })
              //  this.$router.push('/DriverEntry');
                //this.$Modal.info({
                //    title: '用户信息',
                //    content:
                //            `姓名：${this.driverInfoList[index].Name}<br>
                //            年龄：${this.driverInfoList[index].Phone}<br>
                //            地址：${this.driverInfoList[index].CityName}<br>
                //            id：${this.driverInfoList[index].CarId}`
                //})
            },
            updateState(index) {
                this.$http({
                    url: "http://localhost:2595/CarApi/UpdateDriver",
                    method: 'POST',
                    params: {
                        DriverId: this.driverInfoList[index].DriverId
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                })
            },
            pwdReset(index) {
                this.$http({
                    url: "http://localhost:2595/CarApi/UpdateDriver",
                    method: 'POST',
                    params: {
                        DriverId: this.driverInfoList[index].DriverId
                    }
                }).then(function (response) {
                    console.log(response);
                }).catch(function (response) {
                    console.log(response);
                })
            }
        },
        created() {
            console.log(this);
            this.$http({
                url: "http://localhost:2595/CarApi/GetCarRentalCompanies",
                method: 'POST'
            }).then(function (response) {
                setTimeout(() => {
                    const carRentalCompanies = response.data.map(item => {
                    return {
                        value: item.CarRentalCompanyId,
                        label: item.Name
                        };
                    });
                    this.carRentalCompanies = [{ value: '', label: '(不限)' }, ...carRentalCompanies]
               //     this.carRentalCompanies = carRentalCompanies;
                    console.log(this.carRentalCompanies);
                }, 200);
                console.log(response);
            }).catch(function (response) {
                console.log(response);
            }),
            this.$http({
                url: "/CarApi/GetCityName",
                method: 'POST'
            }).then(function (response) {
                setTimeout(() => {
                    const cityList = response.data.map(item => {
                        return {
                            value: item.Name,
                            label: item.Name
                        };
                    });
                    this.cityList = [{ value: '', label: '(不限)' }, ...cityList]
                //    this.cityList = cityList;
                    console.log(this.cityList);
                }, 200);
                console.log(response);
            }).catch(function (response) {
                console.log(response);
            }),
            this.$http({
                url: "http://localhost:2595/CarApi/GetCarList",
                method: 'POST',
                params: {
                    ServiceRegion: this.serviceCity,
                    Name: this.name,
                    Phone: this.phone,
                    model: this.model,
                    LicensePlateNumber: this.vehicleNumber,
                    Owner: this.carRentalCompany,
                    state: this.state,
                    cityname: this.city,
                    CarClass: this.specification,
                    PageSize: this.pageSize,
                    CurPage: this.pageIndex
                }
            }).then(function (response) {
                setTimeout(() => {
                    const driverInfoList = response.data.data.map((item, i) => {
                        return {
                            number: (this.pageIndex - 1) * this.pageSize + i + 1,
                            ServiceRegion: item.ServiceRegion,
                            Name: item.Name,
                            Phone: item.Phone,
                            model: item.model,
                            LicensePlateNumber: item.LicensePlateNumber,
                            Owner: item.Owner,
                            State: item.State === 1 ? '审核中' : item.State === 2 ? '审核通过' : item.State === 3 ? '审核不通过' : '已冻结',
                            CarClass: item.CarClass === 1 ? '经济型' : item.CarClass === 2 ? '舒适性' : item.CarClass === 3 ? '豪华型' : '商务型',
                            CityName: item.CityName,
                            Fleet: item.Fleet,
                            CarId: item.CarID,
                            action: item.State === 4 ? '解冻' : '冻结'
                        };
                    });
                    console.log(driverInfoList);
                    this.driverInfoList = driverInfoList;
                    this.total = response.data.total;
                    //    this.cityList = cityList;
                    //console.log(this.cityList);
                }, 200);
            }).catch(function (response) {
                console.log(response);
            })
        }
    }
</script>
