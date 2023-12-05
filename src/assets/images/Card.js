import * as React from "react"
import Svg, {
    Defs,
    Pattern,
    Image,
    G,
    Rect,
    Path,
    Text,
    TSpan
} from "react-native-svg"

function SvgComponent({ width, height, color }) {

    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            height={height}
            viewBox="0 0 360 496"

        >
            <Defs>
                <Pattern
                    id="a"
                    width="100%"
                    height="100%"
                    x={85}
                    y={110}

                >
                    <Image

                        width={width * 1.15}
                        height={height * 1.15}
                        xlinkHref={require('./1407-image.jpg')}

                    />
                </Pattern>
                <Pattern
                    id="b"
                    preserveAspectRatio="xMidYMid slice"
                    width="100%"
                    height="100%"
                    viewBox="0 0 1659 1840"
                >
                    <Image
                        width={1659}
                        height={1840}
                        xlinkHref={require('./1407-image2.png')}
                    />
                </Pattern>
            </Defs>
            <G data-name="Groupe 1407" transform="translate(-43 -191)" >
                <Rect
                    width={360}
                    height={496}
                    rx={25}
                    transform="translate(43 191)"
                    fill={color}
                />
                <Path
                    data-name={require('./Intersection4.jpg')}
                    d="M109 607a24 24 0 01-24-24V135a24 24 0 0124-24h312a24 24 0 0124 24v448a24 24 0 01-24 24z"
                    transform="translate(-42 80)"
                    opacity={0.08}
                    fill="url(#a)"
                    style={{
                        mixBlendMode: "overlay",
                        isolation: "isolate"
                    }}
                />
                <Path
                    data-name={require('./Intersection6.jpg')}
                    d="M771 1000a24 24 0 01-24-24V528a24 24 0 0124-24h312a24 24 0 0124 24v448a24 24 0 01-24 24z"
                    transform="translate(-704 -313)"
                    fill="url(#b)"
                    opacity={0.4}
                    style={{
                        mixBlendMode: "soft-light",
                        isolation: "isolate"
                    }}
                />
                <Text
                    data-name="?"
                    transform="translate(215 502)"
                    fill="#f4cfb9"
                    fontSize={190}
                    fontFamily="SegoeUI-Light, Segoe UI"
                    fontWeight={300}
                >
                    <TSpan x={-30} y={10}>
                        {"?"}
                    </TSpan>
                </Text>
                <G
                    transform="translate(67 218)"
                    fill="none"
                    stroke="#f4cfb9"
                    strokeWidth={3}
                >
                    <Rect width={312} height={448} rx={24} stroke="none" />
                    <Rect x={1.5} y={1.5} width={309} height={445} rx={22.5} />
                </G>
            </G>
        </Svg>
    )
}

export default SvgComponent
