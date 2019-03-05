<template>
  <section class="app">
    <aside class="sidebar">
      <header>
        <router-link to="/admin">Admin</router-link>
      </header>
      <nav class="sidebar-nav">
        <ul>
          <li>
            <router-link to="/admin">
              <i class="ion-ios-camera"></i>
              <span>Photography</span>
            </router-link>
            <ul class="nav-flyout">
              <li>
                <router-link to="/admin/wildlife">
                  <i class="ion-ios-paw"></i>Wildlife
                </router-link>
              </li>
              <li>
                <router-link to="/admin/people">
                  <i class="ion-ios-contacts"></i>People
                </router-link>
              </li>
              <li>
                <router-link to="/admin/nature">
                  <i class="ion-ios-leaf"></i>Nature
                </router-link>
              </li>
              <li>
                <router-link to="/admin/fashion">
                  <i class="ion-ios-ribbon"></i>Fashion
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/admin">
              <i class="ion-ios-desktop"></i>
              <span class>Graphics</span>
            </router-link>
            <ul class="nav-flyout">
              <li>
                <router-link to="/admin/banners">
                  <i class="ion-ios-easel"></i>Banners
                </router-link>
              </li>
              <li>
                <router-link to="/admin/cards">
                  <i class="ion-ios-mail-open"></i>IV Cards
                </router-link>
              </li>
              <li>
                <router-link to="/admin/flyers">
                  <i class="ion-ios-document"></i>Flyers
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/admin">
              <i class="ion-ios-videocam"></i>
              <span class>Videography</span>
            </router-link>
            <ul class="nav-flyout">
              <li>
                <router-link to="/admin/weddings">
                  <i class="ion-ios-notifications"></i>Weddings
                </router-link>
              </li>
              <li>
                <router-link to="/admin/events">
                  <i class="ion-ios-calendar"></i>Events
                </router-link>
              </li>
              <li>
                <router-link to="/admin/musicals">
                  <i class="ion-ios-musical-notes"></i>Musicals
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-analytics"></i>
              <span class>Branding</span>
            </a>
            <ul class="nav-flyout">
              <li>
                <a href="#"> <i class="ion-ios-timer-outline"></i>Timers </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-arrow-graph-down-left"></i>You Lose
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-ios-partlysunny-outline"></i>Stormy
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-ios-timer-outline"></i>Lookie Look
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-ios-game-controller-a-outline"></i>Dork Mfer
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-paper"></i>
              <span class>Consulting</span>
            </a>
            <ul class="nav-flyout">
              <li>
                <a href="#"> <i class="ion-ios-filing-outline"></i>File Cab </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-ios-information-outline"></i>Infos
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ion-ios-paperplane-outline"></i>Planes
                </a>
              </li>
              <li>
                <a href="#"> <i class="ion-android-star-outline"></i>Shop </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-people"></i>
              <span class>Users</span>
            </a>
            <ul class="nav-flyout">
              <li>
                <a href="#"> <i class="ion-ios-people"></i>New Users </a>
              </li>
              <li>
                <a href="#"> <i class="ion-ios-people"></i>All Users </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-white: #fff;
$color-black: #000;
a {
  text-decoration: none;
  transition: all 0.6s ease;

  &:hover {
    transition: all 0.6s ease;
  }
}

.app {
  height: 100vh;
  text-align: left;
  font-size: 1.8rem;
  width: 17em;
}
/* -------------
Sidebar
----------------*/
.sidebar {
  position: absolute;
  width: 17em;
  height: 100%;
  top: 0;
  overflow: hidden;
  background-color: #19222a;
  -webkit-transform: translateZ(0);
  visibility: visible;
  -webkit-backface-visibility: hidden;

  header {
    background-color: #09f;
    width: 100%;
    display: block;
    padding: 0.75em 1em;

    a:link,
    a:visited {
      color: $color-white;
      text-decoration: none;
    }
  }
}

/* -------------
Sidebar Nav
----------------*/
.sidebar-nav {
  position: fixed;
  //width: 13em;
  background-color: #19222a;
  height: 100%;
  font-weight: 400;
  font-size: 1.2em;
  overflow: auto;
  padding-bottom: 6em;
  z-index: 9;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;

  ul {
    list-style: none;
    display: block;
    padding: 0;
    margin: 0;

    li {
      margin-left: 0;
      padding-left: 0;
      display: inline-block;
      width: 100%;

      a {
        color: rgba($color-white, 0.9);
        font-size: 1.8rem;
        padding: 1.5rem 1rem;
        position: relative;
        display: block;

        &:hover {
          background-color: rgba($color-black, 0.9);
          transition: all 0.6s ease;
        }
      }
      /* -------------
      Sidebar: icons
      ----------------*/
      i {
        font-size: 1.8em;
        padding-right: 0.5em;
        display: inline;
        vertical-align: middle;
      }
    }
  }

  /* -------------
  Chev elements
  ----------------*/
  & > ul > li > a:after {
    content: "\f3d1";
    font-family: ionicons;
    font-size: 0.5em;
    width: 10px;
    color: #fff;
    position: absolute;
    right: 0.75em;
    top: 45%;
  }
  /* -------------
Nav-Flyout
----------------*/
  & .nav-flyout {
    position: absolute;
    background-color: #080d11;
    z-index: 9;
    left: 2.5em;
    top: 0;
    height: 100vh;
    transform: translateX(100%);
    transition: all 0.5s ease;

    a:hover {
      background-color: rgba($color-white, 0.05);
    }
  }

  /* -------------
  Hover
  ----------------*/
  & ul > li:hover {
    .nav-flyout {
      transform: translateX(0);
      transition: all 0.5s ease;
    }
  }
}
</style>
