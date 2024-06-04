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
    background-image: url(/public/img/bg-home.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .jumbotron {
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
                    /* border: 4px solid var(--primary);*/
                    /* background: linear-gradient(217deg, transparent, rgba(255, 0, 0, 0) 70.71%),
                        linear-gradient(127deg, var(--darkest), rgba(0, 255, 0, 0) 70.71%),
                        linear-gradient(336deg, transparent, rgba(0, 0, 255, 0) 70.71%); */
                    border-radius: 20px;
                    /* border-top-right-radius: 50%;
                    border-bottom-right-radius: 50%; */

                    color: var(--light);
                    /*rgb(248, 164, 55); */
                    /* AD6C37; */
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
}
</style>