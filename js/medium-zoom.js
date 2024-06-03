const images = Array.from(document.querySelectorAll("figure img"));
if ($(window).width() >= 991) {
  images.forEach(img => {
    mediumZoom(img, {
      margin: 64, /* The space outside the zoomed image */
      background: "#fff", /* The background of the overlay */
      scrollOffset: 32, /* The number of pixels to scroll to close the zoom */
      container: null, /* The viewport to render the zoom in */
      template: '#zoom-template', /* The template element to display on zoom */
      borderradius: 1.75,
    });
  });
}