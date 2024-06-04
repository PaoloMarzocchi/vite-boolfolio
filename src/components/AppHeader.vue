<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menuEl: [
                {
                    txt: 'Home',
                    routeName: 'home'
                },
                {
                    txt: 'Projects',
                    routeName: 'projects'
                },
                {
                    txt: 'About',
                    routeName: 'about'
                },
                {
                    txt: 'Contacts',
                    routeName: 'contacts'
                },
            ]
        }
    }
}
</script>



<template>
    <header>

        <nav class="menu">
            <div class="container d-flex">
                <div class="logo">
                    <img src="/img/logo-pm.png" alt="">
                </div>
                <ul class="items d-flex">
                    <li :class="$route.name == element.routeName ? 'active' : ''" v-for="element in menuEl">
                        <router-link :to="{ name: element.routeName }">{{ element.txt }}</router-link>
                    </li>
                </ul>
            </div>

        </nav>
    </header>
</template>


<style>
header {

    .menu {
        padding: 0.8rem 0;
        font-weight: 400;
        box-shadow: inset 0px -1px 1px 0px var(--primary);



        .container {
            justify-content: space-between;
            align-items: center;


        }

        .logo {
            width: 20%;

            & img {
                vertical-align: middle;
            }

        }

        .items {
            list-style: none;
            gap: 0.5rem;


            & li {

                padding: 0.5rem;
                color: var(--lightest);

                & a {
                    text-decoration: none;
                    color: inherit;


                }
            }


            .active {
                box-shadow: 0px 1px 0px 2px var(--primary);
                border-radius: 5px;
                transition: all 0.5s ease-in-out;
                font-weight: 600;
                color: var(--primary);
            }
        }

    }
}
</style>