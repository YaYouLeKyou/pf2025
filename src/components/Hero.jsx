import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";
import { useViewportScroll, useTransform } from "framer-motion";

// Loader
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white", fontSize: 14 }}>
      <span className="canvas-loader" />
      <p style={{ marginTop: 40, fontWeight: 800 }}>{progress.toFixed(0)} %</p>
    </Html>
  );
};

// 3D Computer
const Computers = ({ isMobile, scrollY }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Animate Y position based on scroll
  const yOffset = useTransform(scrollY, [0, 500], [0, isMobile ? -0.5 : -1.5]);

  return (
    <motion.group style={{ y: yOffset }}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      {!isMobile && (
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      )}
      <pointLight intensity={isMobile ? 0.3 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.75}
        position={isMobile ? [0, -2, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </motion.group>
  );
};

// Canvas Wrapper
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Optional: replace heavy model with placeholder on mobile
  if (isMobile) return null;

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} scrollY={scrollY} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Hero Component
const Hero = () => {
  const { scrollY } = useViewportScroll();
  const scrollTextY = useTransform(scrollY, [0, 500], [0, 50]); // Text parallax

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text + Decoration */}
      <motion.div
        style={{ y: scrollTextY }}
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Yanès</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm web/mobil developer creating 3D visuals, user <br className="sm:block hidden" /> interfaces and applications
          </p>
        </div>
      </motion.div>

      {/* 3D Canvas */}
      <div className="w-full h-[500px] sm:h-full">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[55px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
