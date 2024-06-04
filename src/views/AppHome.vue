<script>
import { state } from '../state';

export default {
    name: 'AppHome',
    data() {
        return {
            state,
        }
    },
    mounted() {

    }
}
</script>

<template>
    <section class="home_section">
        <div class="jumbotron">
            <div class="container py-5">
                <!-- <div class="my_logo">
                    <img width="400" class="img-fluid" src="/img/logo-pm.png" alt="my logo">
                </div> -->
                <div class="col d-flex">
                    <h1>
                        Welcome to My Portfolio
                    </h1>

                    <p class="intro">
                        I'm <span>Paolo Marzocchi</span>, a Junior Full-Stack Developer <br>
                        eager to build dynamic and responsive web
                        applications.
                    </p>
                    <p class="sub-intro">
                        Explore my projects to see how I am learning and applying <br>
                        modern technologies to bring ideas to
                        life.
                    </p>
                    <a style="width: fit-content" href="#" class="btn-lg" type="button">See my
                        projects</a>

                </div>
            </div>
        </div>

        <div class="favourites">

        </div>
    </section>

</template>



<style>
.home_section {

    .jumbotron {
        background-image: url(/public/img/bg-home.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .container {

            .col {
                width: calc(100%/12*8);
                flex-direction: column;
                gap: 1rem;

                &>h1 {
                    width: fit-content;
                    padding: 1rem 2rem;
                    margin-left: -2rem;
                    font-size: 3rem;
                    background: linear-gradient(0.50turn, transparent, var(--primary)50%, transparent);
                    border-radius: 20px;
                    color: var(--light);

                }

                .intro {
                    font-size: 1.5rem;
                    color: var(--lightest);

                    & span {
                        color: var(--primary);
                    }
                }

                .sub-intro {
                    color: var(--light);
                }



            }

        }
    }

    .favourites {
        height: 20rem;
        box-shadow: inset 0px 1px 1px 0px var(--primary);

    }
}
</style>