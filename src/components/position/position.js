import "./position.scss";
function Position() {
  return (
    <div className="position">
      <div className="bg-red container position-absolute">
        Position absolute.
        <div className="bg-grey child position-absolute__child">
          Position absolute.
        </div>
      </div>
      <div className="bg-blue container position-relative">
        Position relative.
        <div className="bg-grey child position-relative__child">
          Position relative.
        </div>
      </div>
      <div className="bg-green container position-fixed">
        Position fixed.
        <div className="bg-grey child position-fixed__child">
          Position fixed.
        </div>
      </div>
      <div className="bg-yellow container position-static">
        Position static.
        <div className="bg-grey child position-static__child">
          Position static.
        </div>
      </div>
      <div className="bg-orange container position-sticky">
        Position Sticky.
        <div className="bg-grey child position-sticky__child">
          Position Sticky.
        </div>
      </div>
    </div>
  );
}
// The fixed value is similar to absolute as it can help you position an element anywhere relative to the document,
// however this value is unaffected by scrolling.
// See the child element in the demo below and how, once you scroll, it continues to stick to the bottom of the page:

// And when we try to set other values such as left,
//  bottom, and right we’ll find that the child element is responding not to the dimensions of its parent,
//   but the document:
export default Position;
