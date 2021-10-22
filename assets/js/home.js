var words = [
  "HTML",
  "CSS",
  "JavaScript",
  "Webpack",
  "SASS",
  "Bootstrap",
  "SEO",
  "Accessibilité",
  "Node",
  "Git",
  "GitHub",
  "MySql",
  "Figma",
];
var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-",
  speed = 250,
  steps = 4,
  loader = document.querySelector("#loader");

function getRandomWord() {
  var randomWord = words[Math.floor(Math.random() * words.length)];
  return randomWord;
}
function getRandomLetter() {
  var randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
}

function randomWordLoop() {
  var word = getRandomWord();
  var textLength = word.length;
  for (var i = 0; i < textLength; i++) {
    (function (i, word) {
      letterAppear(i, word);
    })(i, word);
  }

  function letterAppear(i, word) {
    setTimeout(function () {
      randomLetters(i, word);
    }, speed * i);
  }

  function randomLetters(i, word) {
    for (var j = 0; j <= steps; j++) {
      charsAnim(i, word, j);
    }
  }

  function charsAnim(i, word, j) {
    setTimeout(function () {
      var count = j;
      if (j < steps) {
        randomChar(i, word, count, j);
      } else {
        goodChar(i, word, count, j);
      }
      /* seems it fails less if I divide j, don't know why */
      /*}, (speed/steps)*(j / 1.8));*/
    }, (speed / steps) * j - speed / steps);
  }

  function randomChar(i, word, count, j) {
    var letter = getRandomLetter();
    if (j > 0) {
      var oldText = loader.textContent.slice(0, -1);
    } else {
      var oldText = loader.textContent;
    }
    loader.textContent = oldText + letter;
  }
  function goodChar(i, word, count, j) {
    var oldText = loader.textContent.slice(0, -1);
    loader.textContent = oldText + word[i];
    if (i == textLength - 1) {
      removeWord();
    }
  }

  function removeWord() {
    setTimeout(function () {
      for (var k = 0; k < textLength; k++) {
        removeLetters(k);
      }
    }, speed * 2);
  }
  function removeLetters(k) {
    setTimeout(function () {
      removeLetter(k);
    }, 75 * k);
  }
  function removeLetter(k) {
    var actualText = loader.textContent.slice(0, -1);
    loader.textContent = actualText;
    if (k == textLength - 1) {
      randomWordLoop();
    }
  }
}

randomWordLoop();


//portfolio

const glide = document.querySelector(".glide");
      if (glide)
        new Glide(glide, {
          type: "carousel",
          startAt: 0,
          perView: 1,
          focusAt: "center",
          gap: 30,
          hoverpause: true,
          gap: 0,
          autoplay: 2500,
          animationDuration: 1000,
          animationTimingFunc: "linear",
        }).mount();

        // Cursor
//=============================>>
var cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector(".cursor-dot"),
  $outline: document.querySelector(".cursor-dot-outline"),

  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function () {
    var self = this;

    // Anchor hovering
    document.querySelectorAll("a").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });

    // Click events
    document.addEventListener("mousedown", function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener("mouseup", function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });

    document.addEventListener("mousemove", function (e) {
      // Show the cursor
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      // Position the dot
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + "px";
      self.$dot.style.left = self.endX + "px";
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    });

    document.addEventListener("mouseleave", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    });
  },

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + "px";
    self.$outline.style.left = self._x + "px";

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    var self = this;

    if (self.cursorEnlarged) {
      self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  },
};

cursor.init();
//=============================>>
// Cursor
//=============================>>

//=============================>>
// MODAL
//=============================>>

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//=============================>>
// MODAL
//=============================>>