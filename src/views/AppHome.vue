<script>
export default {
    name: 'AppHome',
    data() {
        return {

        }
    }
}
</script>

<template>
    <section class="home_section">
        <div class="jumbotron p-5 pb-4 rounded-3">
            <div class="container py-5 d-flex flex-column gap-2">
                <div class="my_logo">
                    <img width="400" class="img-fluid" src="/public/img/logo-pm.png" alt="my logo">
                </div>
                <h1>
                    Welcome to My Portfolio
                </h1>

                <p class="intro">
                    I'm Paolo Marzocchi, a Junior Full-Stack Developer <br>
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
            flex-direction: column;
            gap: 1rem;

            &>h1 {
                width: fit-content;
                padding: 0 2rem;
                margin-left: -2rem;
                font-size: 3rem;
                border-bottom: 4px solid var(--primary);
                border-radius: 20%;
            }

            .intro {
                font-size: 1.5rem;
            }

            .sub-intro {
                color: var(--light);
            }
        }
    }
}
</style>