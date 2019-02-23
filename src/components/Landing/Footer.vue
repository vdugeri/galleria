<template>
  <footer class="footer">
    <div class="footer__map">
      <div class="footer__map--about">
        <h2>JB</h2>
        <span>Creative Agency</span>
        <p>
          Often searching out the graphical symetry in chaos, while stil
          maintaining the personality and emotion of the subject
        </p>
      </div>
      <div class="footer__map--categories">
        <h2>Categories</h2>
        <ul>
          <li>
            <a href="#">Wildlife</a>
          </li>
          <li>
            <a href="#">Cities</a>
          </li>
          <li>
            <a href="#">Fashion</a>
          </li>
          <li>
            <a href="#">Nature</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Stuff</a>
          </li>
        </ul>
      </div>
      <div class="footer__map--recent">
        <h2>Recent Posts</h2>
        <ul>
          <li>
            <a href="#">Photography</a>
          </li>
          <li>
            <a href="#">Graphics</a>
          </li>
          <li>
            <a href="#">Video</a>
          </li>
        </ul>
      </div>
      <div class="footer__map--contact">
        <h2>Get in touch</h2>
        <div class="telephone">
          <i class="ion-ios-call icon-small" />
          <span>+234 7068923578</span>
        </div>
        <div class="location">
          <i class="ion-ios-navigate icon-small"></i>
          <span>12 Jos street Garki, Abuja</span>
        </div>
        <div class="email">
          <i class="ion-ios-mail icon-small"></i>
          <span>info@company.com</span>
        </div>
      </div>
    </div>
    <div class="footer__social">
      <div class="footer__social--copyright">&copy; 2019 Verem Dugeri</div>
      <div class="footer__social--icons">
        <a href="#">
          <i class="ion-logo-twitter icon-medium"></i>
        </a>
        <a href="#">
          <i class="ion-logo-facebook icon-medium"></i>
        </a>
        <a href="#">
          <i class="ion-logo-linkedin icon-medium"></i>
        </a>
        <a href="#">
          <i class="ion-logo-instagram icon-medium"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
$color-grey: #777;
$color-dark-grey: #25282d;
$color-dark-grey-2: #202226;
$color-white: #fff;
$color-secondary: #786eb3;

.footer {
  height: 35rem;
  &__map {
    height: 30rem;
    background-color: $color-dark-grey;
    display: flex;
    justify-content: space-around;

    &--about {
      padding: 2rem;
      align-self: flex-start;

      h2 {
        text-align: left;
        font-size: 3rem;
        font-weight: 700;
      }

      span {
        text-transform: uppercase;
        width: 1rem;
        display: block;
        margin-bottom: 1rem;
      }

      p {
        width: 20rem;
        font-size: 1.2rem;
        color: $color-grey;
        text-align: left;
      }
    }
    &--categories {
      padding: 2rem;
      align-self: flex-start;
      text-align: left;

      h2 {
        font-size: 1.8rem;
        color: $color-grey;
        font-weight: 700;
        text-transform: uppercase;
      }

      ul {
        list-style: none;
        li {
          padding: 0.5rem;
          font-size: 1.4rem;

          a {
            text-decoration: none;
            color: $color-grey;
          }
        }
      }
    }
    &--recent {
      padding: 2rem;
      text-align: left;

      h2 {
        text-transform: uppercase;
        font-size: 1.8rem;
        color: $color-grey;
        font-weight: 700;
      }
      ul {
        list-style-type: none;

        li {
          a {
            text-decoration: none;
            color: $color-grey;
            font-size: 1.4rem;
            padding: 1rem;
            display: block;
          }
        }
      }
    }

    &--contact {
      padding: 2rem;
      text-align: left;

      h2 {
        text-transform: uppercase;
      }

      .icon-small {
        font-size: 2rem;
        margin-right: 1rem;
        color: $color-secondary;
        padding: 1rem;
      }

      .telephone {
        span {
          font-size: 1.4rem;
          padding: 1rem;
        }
      }

      .location {
        span {
          font-size: 1.4rem;
          padding: 1rem;
        }
      }

      .email {
        span {
          font-size: 1.4rem;
          padding: 1rem;
        }
      }
    }
  }

  &__social {
    height: 5rem;
    background-color: $color-dark-grey-2;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 1rem;

    &--copyright {
      font-size: 1rem;
      word-spacing: 0.5rem;
      text-transform: uppercase;
    }
    &--icons {
      a {
        text-decoration: none;
        color: $color-grey;
      }
      .icon-medium {
        font-size: 2rem;
        padding: 1rem;
      }
    }
  }
}
</style>
