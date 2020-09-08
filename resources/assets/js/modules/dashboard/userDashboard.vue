<template>
    <div class="container">
        <div class="row rowMargin">
            <div class="col-md-4" v-for="(item, index) in data" :key="index" style="margin-bottom: 3%;">
                <div class="product" data-toggle="modal" data-target="#viewDetails">
                    <div class="row">
                        <div class="col-md-5">
                            <img style="width: 100%; height: 100%;" :src="image1">
                        </div>
                        <div class="col-md-7" style="text-align: left">
                            <h5>Product Name</h5>
                            <h6>Price: Php50.00</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="viewDetails" role="dialog">
            <div class="modal-dialog modal-lg">
            <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img class="imageSize" :src="image1">
                            </div>
                            <div class="col-md-6">
                                <h2>Product Name</h2>
                                <h4>Price: Php50.00</h4>
                                <div>
                                    <p class="productDescription">The quick brown fox jumps over the lazy dog.</p>
                                </div>
                                <div class="modalDiv">
                                    <form>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Size : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <select class="form-control">
                                                <option value="small">Regular</option>
                                                <option value="large">Large</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Sugar Level: &nbsp;&nbsp;</label>
                                            <select class="form-control">
                                                <option value="extra">110%(Extra Sugar)</option>
                                                <option value="normal">100%(Normal Sugar)</option>
                                                <option value="less">80%(Less Sugar)</option>
                                                <option value="half">20%(Half Sugar)</option>
                                                <option value="no">0%(No Sugar)</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Ice Level: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                            <select class="form-control">
                                                <option value="extra">Extra Ice</option>
                                                <option value="normal">Normal Ice</option>
                                                <option value="less">Less Ice</option>
                                                <option value="no">No Ice</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Sinkers(Optional):<span class="spanStyle">+10&nbsp;each</span></label><br>
                                            <div class="checkboxStyle">
                                                <input type="checkbox" id="pearl" value="pearl" v-model="sinkers">
                                                <label for="pearl">Pearl</label><br>
                                                <input type="checkbox" id="coconut" value="coconut" v-model="sinkers">
                                                <label for="coconut">Coconut Jelly</label><br>
                                                <input type="checkbox" id="triColor" value="triColor" v-model="sinkers">
                                                <label for="triColor">Tri Color Jelly</label><br>
                                                <input type="checkbox" id="Coffee" value="Coffee" v-model="sinkers">
                                                <label for="Coffee">Coffee Jelly</label><br>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="size" style="font-size: 15px; font-weight: bold">Add&nbsp;Ons(Optional):<span class="spanStyle2">+10&nbsp;each</span></label><br>
                                            <div class="checkboxStyle">
                                                <input type="checkbox" id="stevia" value="stevia" v-model="addOns">
                                                <label for="stevia">Stevia</label><br>
                                                <input type="checkbox" id="muscuvado" value="muscuvado" v-model="addOns">
                                                <label for="muscuvado">Muscuvado Sugar</label><br>
                                                <input type="checkbox" id="honey" value="honey" v-model="addOns">
                                                <label for="honey">Honey</label><br>
                                                <input type="checkbox" id="oreo" value="oreo" v-model="addOns">
                                                <label for="oreo">Crushed Oreo</label><br>
                                                <input type="checkbox" id="cheese" value="cheese" v-model="addOns">
                                                <label for="cheese">Cheese Cream</label><br>
                                                <input type="checkbox" id="puff" value="puff" v-model="addOns">
                                                <label for="puff">Cream Puff</label><br>
                                                <input type="checkbox" id="nutella" value="nutella" v-model="addOns">
                                                <label for="nutella">Nutella</label><br>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="quantity" style="font-size: 15px; font-weight: bold;">Quantity:</label>
                                            <input v-model="quantity" type="number" min="1" style="width:70px" class="form-control">
                                        </div>
                                    </form>
                                </div>
                                <center><button type="submit" class="btn btnRegister">Add to Cart {{totalPrice}}</button></center>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="cancel">Cancel</button>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.spanStyle{
    margin-left: 70%;
    font-size: 13px;
}
.spanStyle2{
    margin-left: 62%;
    font-size: 13px;
}
form{
    margin: 5%;
}
.checkboxStyle{
    margin-left: 5%;
}
.modalDiv{
    text-align: left; 
    margin-top: 5%; 
    border: 1px solid #17D817; 
    height: 400px;
    overflow: auto;
}
.btnRegister{
    background-color: #17D817;
    font-weight: bold;
    margin-top: 2%;
}
@media screen and (max-width: 600px){
    .imageSize[data-v-4376b304] {
        width: 62%;
        margin-left: 18%;
    }
    h2, h4{
        text-align: center
    }
}
.imageSize{
    width: 100%;
    margin-top: 8%;
}
.form-control{
    display: inline;
    width: 180px;
}
.productDescription{
    font-size: 15px;
    margin-top: 5%;
}
h2, h4{
    text-align: center;
}
.product{
    box-shadow: 3px 3px #888888;
    cursor: pointer;
}
.rowMargin{
    margin-top: 5%;
}
h5{
    margin-top: 30%;
}
@media screen and (max-width: 800px){
    .col-md-5{
        text-align: center;
        width: 80%;
        margin-left: 10%;
        margin-right: 10%;
    }
    h5, h6{
        text-align: center;
        margin-top: 1%;
    }
}
</style>
<script>
import ROUTER from '../../../router'
import image from "../../../image/milktea.png"
import image1 from "../../../image/product1.png"
import AUTH from '../../../services/auth'
export default {
    data(){
        return{
            image: image,
            image1: image1,
            data: [1,2,3,4,5,6,7,8,9,8,7,6],
            product: 'product ni cya',
            price: 'Php150.00',
            quantity: 1,
            sinkers: [],
            addOns: []
        }
    },
    methods: {
        cancel(){
            this.sinkers = []
            this.addOns = []
        }
    }
}
</script>

