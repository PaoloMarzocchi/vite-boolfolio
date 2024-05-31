<script>
export default {
    name: 'AppFooter',
    data() {
        return {

        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="logo d-flex">
                        <img width="200" src="/public/img/logo-pm.png" alt="">

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, soluta, nulla pariatur modi
                            tempore possimus expedita ea ducimus labore officia.
                        </p>
                    </div>

                </div>
                <div class="col">
                    <h4>Quick links</h4>
                    <ul>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div class="col">
                    <h4>Legal</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Cookies.</li>
                        <li>GDPR</li>
                    </ul>
                </div>
                <div class="col">
                    <h4>Follow me</h4>
                    <ul class="d-flex">
                        <li>
                            <div class="my-1">Linkedin</div>
                            <i class="fa-brands fa-linkedin fa-xl" style="color: #ad3737;"></i>
                        </li>
                        <li>
                            <div class="my-1">GitHub</div>
                            <i class="fa-brands fa-github fa-xl" style="color: #ad3737;"></i>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>


<style>
footer {
    background-color: var(--light);
    padding: 1rem 0;
    box-shadow: inset 0px 3px 2px 0px var(--primary);
    ;

    .row {
        justify-content: space-between;

        .col {
            width: calc(100%/12*3);
            text-align: center;

            & h4 {
                color: var(--primary);
            }

            .logo {
                flex-direction: column;
                justify-content: center;
                align-items: center;

                & p {
                    margin-top: 0.2rem;
                    font-size: 0.8rem;
                }
            }

            & ul {
                list-style: none;

                & li {
                    width: fit-content;
                    font-size: 0.8rem;
                    padding: 0.5rem 1rem;
                    margin: 0 auto;

                    & i {
                        padding-top: 0.5rem;
                    }

                }

                & li:hover {
                    box-shadow: 0px 8px 5px 0px var(--primary);
                    border-radius: 5px;
                    transition: all 0.3s ease-in-out;
                }
            }

            & ul.d-flex {
                justify-content: center;
            }
        }
    }




}
</style>