import styles from "./banner.module.scss";
import NextImage from "next/image";
import { useSpring, animated } from "react-spring";
import { useScrollDetect } from "lib/hooks";

export const AppBanner = () => {
    const { scrollCount } = useScrollDetect({});
    const state = scrollCount >= 80;
    const { backgroundColor, width, transform } = useSpring({
        transform: `translateY(${state ? 50 : 0}%)`,
        width: !state ? "100vw" : "95vw",
        // padding: state ? 64 : 0,
        backgroundColor: !state ? "rgb(0 0 0 / 0.3)" : "rgb(0 0 0 / 0.5)",
        // config: { mass: 1, tension: 2000, friction: 200 },
    });

    const imageTrans = useSpring({
        transform: `translateY(${state ? -10 : 0}%)`,
        borderBottomLeftRadius: state ? 64 : 0,
        borderBottomRightRadius: state ? 64 : 0,
        // config: { mass: 1, tension: 2000, friction: 200 },
    });
    return (
        <animated.div
            style={{ width, margin: "0 auto" }}
            className={styles.container}
        >
            <animated.div
                style={{
                    position: "relative",
                    height: "100%",
                    overflow: "hidden",
                    ...imageTrans,
                }}
            >
                <NextImage
                    src="https://images.unsplash.com/photo-1482575832494-771f74bf6857?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1920&q=80"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </animated.div>
            <animated.div
                style={{
                    backgroundColor,
                    ...imageTrans,
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <animated.div
                    style={{
                        transform,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div className={styles.logo}>Meraki</div>
                    <div style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                        Making Dream Weddings Possible
                    </div>
                    <button className={styles.button}>Explore Venue</button>
                </animated.div>
            </animated.div>
        </animated.div>
    );
};
