<template>
    <div class="my_footer_wrapper">
        <div class="main_footer">
            <div class="app_name_and_social_medias">
                <div class="app_name">Campus Eats</div>
                <div class="socila_media_links">
                    <div class="single_link">
                        <i class="lab la-facebook-square"></i>
                    </div>
                    <div class="single_link">
                        <i class="lab la-instagram"></i>
                    </div>
                    <div class="single_link">
                        <i class="lab la-twitter"></i>
                    </div>
                </div>
            </div>

            <div class="infos">
                <div class="info_column">
                    <div class="single_info" v-for="information in information_list_1" :key="information.name">
                        <div class="name">{{ information.name }}</div>
                    </div>
                </div>

                <div class="info_column">
                    <div class="single_info" v-for="information in information_list_2" :key="information.name">
                        <div class="name">{{ information.name }}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="additional_footer">
            <div class="license">
                © 2021 Campus Eats Inc.
            </div>
            <div class="protection">
                This site is protected by the Google Privacy Policy and Terms of Service apply.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            information_list_1: [
                {
                    name: "About Campus Eats"
                },
                {
                    name: "Our team"
                },
                {
                    name: "Add your restaurant"
                },
                {
                    name: "Sign up to deliver"
                }
            ],
            information_list_2: [
                {
                    name: "Get help"
                },
                {
                    name: "Privacy Policy"
                },
                {
                    name: "Terms"
                },
                {
                    name: "Pricing"
                }
            ]
        }
    }
}
</script>

<style scoped>
.my_footer_wrapper {
    margin-top: 90px;
    background-color: var(--navy);
    padding: 40px;
    color: white;
}

.main_footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 40px;
    border-bottom: 1px solid white;
}

.app_name_and_social_medias {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.app_name {
    font-family: 'Roboto Slab', serif;
    font-size: 40px;
}

.socila_media_links {
    display: flex;
    width: 150px;
    justify-content: space-between;
}

.single_link {
    font-size: 35px;
    display: flex;
}

.infos {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 130px;
}

.info_column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.single_link:hover, .single_info:hover {
    cursor: pointer;
    color: var(--yellow);
}

.additional_footer {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}
</style>>