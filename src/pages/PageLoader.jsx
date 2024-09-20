import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingIcon = ({ progress }) => (
  <svg className="w-24 h-24" viewBox="0 0 100 100">
    <circle
      className="text-gray-200"
      strokeWidth="10"
      stroke="currentColor"
      fill="transparent"
      r="42"
      cx="50"
      cy="50"
    />
    <circle
      className="text-[#00567D] transition-all duration-300 ease-in-out"
      strokeWidth="10"
      strokeDasharray={264}
      strokeDashoffset={264 - (progress / 100) * 264}
      strokeLinecap="round"
      stroke="currentColor"
      fill="transparent"
      r="42"
      cx="50"
      cy="50"
    />
  </svg>
);

const LoadingText = ({ text }) => (
  <div className="flex space-x-1">
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: index * 0.05 }}
        className="text-2xl font-bold text-gray-800"
      >
        {char}
      </motion.span>
    ))}
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5  ">
    <div
      className="bg-[#00567D] h-2.5 rounded-full transition-all duration-300 ease-in-out"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const PageLoader = ({ isLoading, progress = 0, children }) => {
  const [loadingState, setLoadingState] = useState("initial");

  useEffect(() => {
    if (isLoading) {
      setLoadingState("loading");
    } else {
      setLoadingState("complete");
    }
  }, [isLoading]);

  const containerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <AnimatePresence>
        {(isLoading || loadingState !== "complete") && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white  z-50"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="text-center flex flex-col justify-center items-center gap-3 ">
              <LoadingIcon progress={progress} />
              <LoadingText
                text={loadingState === "complete" ? "Complete!" : "Loading"}
              />
              <ProgressBar progress={progress} />
              <motion.p
                className=" text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {loadingState === "loading"
                  ? "Please wait while we load your content..."
                  : "Ready to go!"}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={
          !isLoading && loadingState === "complete" ? "visible" : "hidden"
        }
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageLoader;
