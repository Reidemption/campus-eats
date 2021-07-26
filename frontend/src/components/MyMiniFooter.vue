<template>
    <div class="mini_footer">
        <div class="license">© 2021 Campus Eats Inc.</div>
        
        <div class="policy_and_terms">
            <span><a class="privacy_policy" href="https://policies.google.com/privacy" target="_blank">
                Privacy Policy
            </a></span>
            |
            <span><a class="terms_of_service" href="https://policies.google.com/terms" target="_blank">
                Terms
            </a></span>
        </div>
    </div>
</template>

<style scoped>
.mini_footer {
    background-color: var(--navy);
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
}

.policy_and_terms > span > a {
    text-decoration: none;
    color: white;
}

.policy_and_terms > span > a:hover {
    color: var(--yellow);
}
</style>