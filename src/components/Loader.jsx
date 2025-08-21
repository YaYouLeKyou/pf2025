import { Html, useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        pointerEvents: "none", // Prevent blocking scroll/touch
      }}
    >
      {/* Loader animation */}
      <motion.div
        className="canvas-loader"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: 50,
          height: 50,
          border: "4px solid #915EFF",
          borderTop: "4px solid transparent",
          borderRadius: "50%",
          marginBottom: 20,
        }}
      />
      
      {/* Progress text */}
      <motion.p
        style={{
          fontSize: "14px",
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 10,
        }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        {progress.toFixed(0)}%
      </motion.p>
    </Html>
  );
};

export default CanvasLoader;
