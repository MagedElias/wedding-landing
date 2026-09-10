/* =========================================================
   BESH0Y & JOYA — WEDDING WEBSITE
========================================================= */


document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    const target =
      new Date(
        "2026-09-17T18:00:00+03:00"
      ).getTime();


    const daysEl =
      document.querySelector(
        "#days"
      );


    const hoursEl =
      document.querySelector(
        "#hours"
      );


    const minutesEl =
      document.querySelector(
        "#minutes"
      );


    const secondsEl =
      document.querySelector(
        "#seconds"
      );


    function updateCountdown() {


      const difference =
        Math.max(
          0,
          target - Date.now()
        );


      const days =
        Math.floor(
          difference / 86400000
        );


      const hours =
        Math.floor(
          (difference % 86400000)
          / 3600000
        );


      const minutes =
        Math.floor(
          (difference % 3600000)
          / 60000
        );


      const seconds =
        Math.floor(
          (difference % 60000)
          / 1000
        );


      if (daysEl) {

        daysEl.textContent =
          String(days).padStart(
            2,
            "0"
          );

      }


      if (hoursEl) {

        hoursEl.textContent =
          String(hours).padStart(
            2,
            "0"
          );

      }


      if (minutesEl) {

        minutesEl.textContent =
          String(minutes).padStart(
            2,
            "0"
          );

      }


      if (secondsEl) {

        secondsEl.textContent =
          String(seconds).padStart(
            2,
            "0"
          );

      }

    }


    updateCountdown();


    window.setInterval(
      updateCountdown,
      1000
    );


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealTargets =
      document.querySelectorAll(
        ".section, .photo-band, .quote, footer, .cards article"
      );


    /*
      Add the reveal class.
    */

    revealTargets.forEach(
      (element) => {

        element.classList.add(
          "reveal"
        );

      }
    );


    /* =====================================================
       LOCATION CARD STAGGER
    ===================================================== */

    document
      .querySelectorAll(
        ".cards article"
      )
      .forEach(
        (item, index) => {

          item.dataset.revealDelay =
            String(
              index * 140
            );

        }
      );


    /* =====================================================
       MAJOR SECTION ANIMATION
    ===================================================== */

    document
      .querySelectorAll(
        ".intro, .countdown-section, .details, .quote"
      )
      .forEach(
        (section) => {

          section.classList.add(
            "slow-reveal"
          );

        }
      );


    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    const revealObserver =
      new IntersectionObserver(

        (entries, observer) => {


          entries.forEach(
            (entry) => {


              if (
                !entry.isIntersecting
              ) {

                return;

              }


              const element =
                entry.target;


              const delay =
                Number(
                  element.dataset.revealDelay || 0
                );


              /*
                Start the animation after
                the optional stagger delay.
              */

              window.setTimeout(
                () => {

                  element.classList.add(
                    "is-visible"
                  );

                },
                delay
              );


              /*
                Each element animates once.
              */

              observer.unobserve(
                element
              );

            }
          );

        },

        {

          threshold:
            0.08,

          rootMargin:
            "0px 0px -70px 0px"

        }

      );


    revealTargets.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(
        (link) => {


          link.addEventListener(
            "click",
            (event) => {


              const targetSelector =
                link.getAttribute(
                  "href"
                );


              /*
                Ignore empty "#".
              */

              if (
                !targetSelector ||
                targetSelector === "#"
              ) {

                return;

              }


              const targetElement =
                document.querySelector(
                  targetSelector
                );


              if (!targetElement) {

                return;

              }


              event.preventDefault();


              targetElement.scrollIntoView(
                {

                  behavior:
                    "smooth",

                  block:
                    "start"

                }
              );


            }
          );


        }
      );


  }
);