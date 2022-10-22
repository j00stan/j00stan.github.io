const images = Array.from(document.querySelectorAll("figure img"));
images.forEach(img => {
    mediumZoom(img, {
      margin: 0, /* The space outside the zoomed image */
      background: "#fff", /* The background of the overlay */
      scrollOffset: 40, /* The number of pixels to scroll to close the zoom */
      container: null, /* Advanced - The viewport to render the zoom in */
      template: null /* Advanced - The template element to display on zoom */
    });
  });