<template>
    <div class="my_total_fees_wrapper">
        <div class="all_fees_calculation">
            <div class="single_fee_info_wrapper">
                <div class="name_and_additional_info">
                    <div class="name">
                        Subtotal
                    </div>
                </div>

                <div class="fee_price_amount">
                    <span class="dollar_sign">$</span>
                    {{ subtotal.toFixed(2) }}
                </div>
            </div>

            <div class="single_fee_info_wrapper">
                <div class="name_and_additional_info">
                    <div class="name">
                        Taxes & Fees
                    </div>

                    <div class="additional_info">
                        <span class="material-icons"
                            @mouseover="taxes_and_fees_hover = true"
                            @mouseleave="taxes_and_fees_hover = false">
                            info
                        </span>
                    </div>
                </div>

                <div class="fee_price_amount">
                    <span class="dollar_sign">$</span>
                    {{ taxes_and_fees.toFixed(2) }}
                </div>
            </div>

            <div class="single_fee_info_wrapper">
                <div class="name_and_additional_info">
                    <div class="name">
                        Delivery Fee
                    </div>

                    <div class="additional_info">
                        <span class="material-icons"
                            @mouseover="delivery_fee_hover = true"
                            @mouseleave="delivery_fee_hover = false">
                            info
                        </span>
                    </div>
                </div>

                <div class="fee_price_amount">
                    <span class="dollar_sign">$</span>
                    {{ delivery_fee.toFixed(2) }}
                </div>
            </div>
        </div>

        <div class="final_total_price">
            <div class="name">
                Total
            </div>

            <div class="total_amount">
                <span class="dollar_sign">$</span>
                {{ final_total_price.toFixed(2) }}
            </div>
        </div>

        <div class="place_order_button_and_agreement">
            <div class="place_order_button" @click="place_order_button_clicked">
                Place order
            </div>

            <div class="agreement">
                If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered.
            </div>
        </div>

        <div class="tax_and_fees_popup" v-if="taxes_and_fees_hover">
            <div class="title">What's included?</div>

            <div class="service_fee">
                <div class="main_info">
                    <div class="name">Service Fee:</div>

                    <div class="service_fee_amount">
                        <span class="dollar_sign">$</span>
                        {{ service_fee.toFixed(2) }}
                    </div>
                </div>

                <div class="additional_info">
                    15% of subtotal (
                        <span class="dollar_sign">$</span>
                        3 min
                        <span class="comma">,</span>
                        <span class="dollar_sign">$</span>
                        5 max
                    )
                </div>
            </div>

            <div class="taxes">
                <div class="main_info">
                    <div class="name">Taxes</div>

                    <div class="taxes_amount">
                        <span class="dollar_sign">$</span>
                        {{ taxes.toFixed(2) }}
                    </div>
                </div>

                <div class="additional_info">
                    6.75% of subtotal
                </div>
            </div>
        </div>

        <div class="delivery_fee_popup" v-if="delivery_fee_hover">
            <div class="title">What's a delivery fee?</div>

            <div class="delivery_fee_detail">
                This fee helps cover delivery costs. The amount varies for each store based on things like your location and availability of nearby couriers.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taxes_and_fees_hover: false,
            delivery_fee_hover: false,

            subtotal: "",
            service_fee: "",
            taxes: "",
            taxes_and_fees: "",
            delivery_fee: "",
            final_total_price: ""
        }
    },
    created() {
        this.calculate_all_fees();
    },
    methods: {
        calculate_all_fees() {
            let customer_cart_by_meals = this.$store.state.customer_cart_by_meals;
            let cart_subtotal = [];

            customer_cart_by_meals.forEach(meal => {
                cart_subtotal.push(meal.meal_infos.subtotal_price);
            });

            //* Subtotal price of the cart
            this.subtotal = cart_subtotal.reduce((a, b) => a + b, 0);

            //* Service fee (15% of subtotal price, $3 min - $5 max)
            this.service_fee = this.subtotal * 15 / 100;
            if(this.service_fee < 3.00) {
                this.service_fee = 3.00;
            } 
            if(this.service_fee > 5.00) {
                this.service_fee = 5.00;
            }

            //* Taxes
            this.taxes = this.subtotal * 6.75 / 100;

            //* Total of taxes and service fee
            this.taxes_and_fees = this.service_fee + this.taxes;

            //* Delivery fee
            this.delivery_fee = 0.1

            //* Cart total price
            this.final_total_price = this.subtotal + this.taxes_and_fees + this.delivery_fee;
        },
        place_order_button_clicked() {
            this.$emit("place_order_button_clicked");
        }
    }
}
</script>

<style scoped>
.my_total_fees_wrapper {
    padding: 40px 60px;
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
}

.single_fee_info_wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.name_and_additional_info {
    display: flex;
    align-items: center;
}

.name {
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    color: var(--navy);
}

.additional_info {
    margin-left: 6px;
    color: var(--gray-dark);
    display: flex;
}

.additional_info > span {
    font-size: 22px;
}

.additional_info > span:hover {
    cursor: default;
    color: var(--navy);
}

.fee_price_amount, .total_amount {
    font-size: 19px;
}

.dollar_sign {
    font-family: 'Cabin', sans-serif;
    font-size: 16px;
    margin-right: 1px;
    margin-bottom: 1px;
}

.final_total_price {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--gray-fade);
    border-bottom: 1px solid var(--gray-fade);
    padding: 20px 0;
}

.place_order_button {
    background-color: var(--navy);
    color: white;
    display: flex;
    justify-content: center;
    padding: 15px 0;
    font-size: 20px;
    margin: 30px 0 20px;
}

.place_order_button:hover {
    cursor: pointer;
    background-color: var(--red);
}

.agreement {
    color: var(--gray-dark);
    font-size: 13px;
    line-height: 20px;
}

.tax_and_fees_popup {
    position: absolute;
    top: 26%;
    background-color: white;
    padding: 30px 40px;
}

.tax_and_fees_popup  > .title,
.delivery_fee_popup  > .title {
    font-size: 20px;
    color: var(--red-dark);
    margin-bottom: 15px;
}

.service_fee > .main_info,
.taxes > .main_info {
    display: flex;
}

.service_fee > .main_info > .name,
.taxes > .main_info > .name {   
    font-size: 17px;
    color: var(--navy);
    font-family: 'Cabin';
}

.service_fee_amount, .taxes_amount {
    font-size: 15px;
    display: flex;
    align-items: flex-end;
    margin-left: 7px;
}

.service_fee_amount > .dollar_sign,
.taxes_amount > .dollar_sign {
    font-size: 14px;
    margin-right: 3px;
}

.service_fee > .additional_info,
.taxes > .additional_info {
    margin-left: 0;
    font-size: 15px;
    margin: 5px 0 10px;
}

.service_fee > .additional_info > span {
    font-size: 13px;
}

.comma {
    margin: 0 3px;
}

.taxes_and_fees_additional_info > span:hover .tax_and_fees_popup {
    display: block;
}

.delivery_fee_popup {
    position: absolute;
    top: 37%;
    background-color: white;
    padding: 30px 40px;
    max-width: 50%;
}

.delivery_fee_detail {
    color: var(--navy);
}
</style>