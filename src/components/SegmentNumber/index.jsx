import HorizontalSeg from "./HorizontalSeg";
import VerticalSeg from "./VerticalSeg";

const segmentMap = [
  { a: true, b: true, c: true, d: true, e: true, f: true, g: false },
  { a: false, b: true, c: true, d: false, e: false, f: false, g: false },
  { a: true, b: true, c: false, d: true, e: true, f: false, g: true },
  { a: true, b: true, c: true, d: true, e: false, f: false, g: true },
  { a: false, b: true, c: true, d: false, e: false, f: true, g: true },
  { a: true, b: false, c: true, d: true, e: false, f: true, g: true },
  { a: true, b: false, c: true, d: true, e: true, f: true, g: true },
  { a: true, b: true, c: true, d: false, e: false, f: false, g: false },
  { a: true, b: true, c: true, d: true, e: true, f: true, g: true },
  { a: true, b: true, c: true, d: true, e: false, f: true, g: true },
];

export default function SevenSegmentDisplay(props) {
  let { width, height, onColor, offColor, value, style = {} } = props;

  width = +width;
  height = +height;
  value = +value;

  style.display = "inline-block";
  style.width = `${width + height * 2}px`;
  style.marginRight = 10;

  const segmentNumbers = value
    .toString()
    .split("")
    ?.map((number) => {
      const { a, b, c, d, e, f, g } = segmentMap[number];

      return (
        <div style={style}>
          <HorizontalSeg
            width={width}
            height={height}
            color={a ? onColor : offColor}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              height: `${width}px`,
            }}
          >
            <VerticalSeg
              width={height}
              height={width}
              color={f ? onColor : offColor}
              align="left"
            />
            <VerticalSeg
              width={height}
              height={width}
              color={b ? onColor : offColor}
              align="right"
            />
          </div>
          <HorizontalSeg
            width={width}
            height={height}
            color={g ? onColor : offColor}
          />
          <div
            style={{
              position: "relative",
              width: "100%",
              height: `${width}px`,
            }}
          >
            <VerticalSeg
              width={height}
              height={width}
              color={e ? onColor : offColor}
              align="left"
            />
            <VerticalSeg
              width={height}
              height={width}
              color={c ? onColor : offColor}
              align="right"
            />
          </div>
          <HorizontalSeg
            width={width}
            height={height}
            color={d ? onColor : offColor}
          />
        </div>
      );
    });

  return segmentNumbers;
}

SevenSegmentDisplay.defaultProps = {
  width: 80,
  height: 10,
  value: 0,
  onColor: "#CC3300",
  offColor: "#DDDDDD",
};
