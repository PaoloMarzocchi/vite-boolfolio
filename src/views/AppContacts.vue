<script>
import axios from 'axios';
import { state } from '../state.js';

export default {
    name: 'AppContacts',
    data() {
        return {
            state,
            data: {
                name: '',
                email: '',
                message: ''
            },
            errors: false,
            success: false,
            loading: false,
            alert_toggle: false

        }
    },
    methods: {
        sendForm() {
            this.loading = true;

            const url = state.base_api_url + '/api/contacts';

            const new_data = {
                name: this.data.name,
                email: this.data.email,
                message: this.data.message
            }

            this.errors = false;
            axios
                .post(url, new_data)
                .then(response => {
                    console.log(response.data);
                    this.success = response.data.success;

                    if (!this.success) {
                        this.errors = response.data.errors;
                    } else {
                        this.data = {
                            name: '',
                            email: '',
                            message: ''
                        }

                    }

                    this.loading = false;
                    this.alert_toggle = true;
                })
                .catch(err => {
                    console.error(err);
                })
        },
    }
}
</script>

<template>
    <section class="contacts">

        <h3 class="py-5">Contact me</h3>

        <div class="container">

            <div class="row">
                <div class="col">

                    <div v-show="alert_toggle">
                        <div class="alert-sent d-flex" v-if="success">
                            <span>Messaggio inviato con successo!</span>
                            <div @click="alert_toggle = !alert_toggle">✖</div>
                        </div>
                        <div class="alert-error d-flex" v-else-if="errors">
                            <ul>
                                <li v-for="error in errors">{{ error[0] }}</li>
                            </ul>
                            <div @click="alert_toggle = !alert_toggle">✖</div>
                        </div>
                    </div>

                    <form class="d-flex" @submit.prevent="sendForm()">

                        <div class="mb-3 d-flex">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" :class="{ 'error': errors.name }" name="name"
                                id="name" aria-describedby="nameHelper" placeholder="" v-model="data.name" />
                            <small id="nameHelper" class="form-text" :class="{ 'error-txt': errors.name }">{{
                        errors.name ? errors.name[0] : "Insert your name" }}</small>
                        </div>

                        <div class="mb-3 d-flex">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" :class="{ 'error': errors.email }" name="email"
                                id="email" aria-describedby="emailHelper" placeholder="" v-model="data.email" />
                            <small id="emailHelper" class="form-text" :class="{ 'error-txt': errors.email }">{{
                        errors.email ? errors.email[0] : "Insert your email" }}</small>
                        </div>

                        <div class="mb-3 d-flex">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" :class="{ 'error': errors.message }" name="message"
                                id="message" rows="10" aria-describedby="messageHelper"
                                v-model="data.message"></textarea>
                            <small id="messageHelper" class="form-text" :class="{ 'error-txt': errors.message }">{{
                        errors.message ? errors.message[0] : "Insert your message" }} </small>
                        </div>

                        <button type="submit" class="btn-lg" :disabled="loading">{{ loading ?
                            'Sending...':'Send'}}</button>

                    </form>

                </div>
            </div>
        </div>
    </section>
</template>



<style scoped>
.contacts {
    padding: 2rem 0 3rem 0;

    h3 {
        /* width: fit-content; */
        text-align: center;
        padding: 1rem 2rem;
        margin-bottom: 1rem;
        font-size: 3rem;
        background: linear-gradient(0.50turn, transparent, var(--primary)50%, transparent);
        border-radius: 20px;
        color: var(--light);
    }

    .row {
        color: var(--lightest);

        .col {
            width: calc(100%/12*8);
            margin: 0 auto;

            & form {
                flex-direction: column;
                gap: 1rem;



                .d-flex {
                    flex-direction: column;
                    gap: 0.5rem;

                    & input,
                    textarea {
                        padding: 0.5rem;
                        border-radius: 10px;
                        border: none;

                    }

                    & small.error-txt {
                        color: var(--primary);
                    }

                    & small {
                        color: var(--light);
                    }


                }
            }
        }
    }
}

input:focus,
textarea:focus {
    /* border: 2px solid var(--dark-red); */
    border-radius: 10px;
    /* border-bottom: 1px dashed #D9FFA9; */
    outline: 4px double var(--success);
}

.error {
    /* border: 2px solid var(--dark-red); */
    border-radius: 10px;
    /* border-bottom: 1px dashed #D9FFA9; */
    outline: 4px solid var(--primary);
}

.alert-sent,
.alert-error {
    padding: 0.5rem;
    border-radius: 10px;
    margin: 1rem 0;
    justify-content: space-between;

    & div {
        cursor: pointer;
    }
}

.alert-sent {
    border: 1px solid var(--success);
    background-color: var(--light-success);
}

.alert-error {
    border: 1px solid var(--dark-red);
    background-color: var(--light-primary);
}
</style>