<script>
export default {
    name: 'AppContacts',
    data() {
        return {

        }
    }
}
</script>

<template>
    <section class="contacts">

        <h3 class="py-5">Contact me</h3>

        <div class="container">

            <div class="row">
                <div class="col">
                    <form class="d-flex" action="" method="post">

                        <div class="mb-3 d-flex">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelper"
                                placeholder="" />
                            <small id="nameHelper" class="form-text text-muted">Insert your name</small>
                        </div>
                        <div class="mb-3 d-flex">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" name="email" id="email"
                                aria-describedby="emailHelper" placeholder="" />
                            <small id="emailHelper" class="form-text text-muted">Insert your email</small>
                        </div>
                        <div class="mb-3 d-flex">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" name="message" id="message" rows="10"
                                aria-describedby="messageHelper"></textarea>
                            <small id="messageHelper" class="form-text text-muted">Insert your message</small>
                        </div>


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
    outline: 4px ridge var(--dark-red);
}

/* ,
textarea:focus */
/*    {
    
} */
</style>